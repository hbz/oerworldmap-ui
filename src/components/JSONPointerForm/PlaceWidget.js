/* global document */
import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import Fieldset from './Fieldset'
import Input from './Input'
import DropdownSelect from './DropdownSelect'
import withFormData from './withFormData'

import MiniMap from '../MiniMap'
import withApi from '../withApi'

import { triggerClick, getProp, mapNominatimResult } from '../../common'

class PlaceWidget extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      filter: "",
      options: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.updateOptions = _.debounce(this.updateOptions.bind(this), 200)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    document.addEventListener("click", this.handleClick)
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClick)
  }

  handleClick(e) {
    if (this.state.options.length && !this.wrapper.contains(e.target)) {
      this.setState({options: []})
    }
  }

  handleChange(e) {
    this.setState({filter: e.target.value})
    e.target.value ? this.updateOptions() : this.setState({options: []})
  }

  updateOptions() {
    const {value, api} = this.props
    const url = 'https://nominatim.openstreetmap.org/search'
    const params = [
      'format=json',
      'addressdetails=1',
      'limit=10',
      `countrycodes=${getProp(['address', 'addressCountry'], value)}`
    ]
    api.fetch(`${url}/${this.state.filter}?${params.join('&')}`).then(
      result => this.setState({options: result.map(result => mapNominatimResult(result))})
    )
  }

  render() {
    const {
      name, value, errors, property, title, className, translate, schema, api, setValue, config
    } = this.props

    const geometry = value.geo && value.geo.lon && value.geo.lat
      ? {
        "type": "Point",
        "coordinates": [value.geo.lon, value.geo.lat]
      } : null

    return (
      <div
        className={`PlaceWidget ${property || ''} ${className}`.trim()}
        role="group"
        aria-labelledby={`${name}-label`}
        ref={el => this.wrapper = el}
      >
        <div className="label" id={`${name}-label`}>{translate(title)}</div>
        {errors.map((error, index) => (
          <div className="error" key={index}>{error.message}</div>
        ))}
        <div
          className="mapContainer"
          style={{
            position:'relative',
            height: '300px'
          }}
        >
          <MiniMap
            mapboxConfig={config.mapboxConfig}
            features={geometry}
            zoom={geometry ? 12 : 1}
            zoomable
            draggable
            onFeatureDrag={point => {
              const update = JSON.parse(JSON.stringify(value))
              update.geo = {
                lat: point.geometry.coordinates.lat,
                lon: point.geometry.coordinates.lng,
              }
              setValue(update)
            }}
            center={geometry ? geometry.coordinates : undefined}
          />
        </div>
        <Fieldset property="address" translate={translate}>
          <DropdownSelect
            property="addressCountry"
            translate={translate}
            options={schema.properties.address.properties.addressCountry.enum}
            title={schema.properties.address.properties.addressCountry.title}
          />
          {getProp(['address', 'addressCountry'], value) &&
            <div className="locationForm">
              <div className="selectContainer">
                <div className="filterContainer">
                  <input
                    type="text"
                    value={this.state.filter}
                    className="filter"
                    onChange={this.handleChange}
                    placeholder={translate('ClientTemplates.place_widget.searchLocation')}
                  />
                </div>
                {this.state.options.length > 0 &&
                  <div className="optionsContainer">
                    <ul>
                      {this.state.options.map(option => (
                        <li key={option['@id']}>
                          <input
                            type="checkbox"
                            value={option['@id']}
                            id={`${name}-${option['@id']}`}
                            onChange={() => {
                              api.fetch('http://192.168.178.39:9200/geojson/_search', {
                                method: 'POST',
                                body: JSON.stringify({
                                  "_source": "properties.*",
                                  "query": {
                                    "geo_shape": {
                                      "geometry": {
                                        "shape": {
                                          "type":   "point",
                                          "coordinates": [
                                            option.geo.lon,
                                            option.geo.lat
                                          ]
                                        }
                                      }
                                    }
                                  }
                                })
                              }).then(data => {
                                option.address.addressRegion = data.hits.hits[0]._source.properties.code_hasc
                                setValue(option)
                                this.setState({options: [], filter: ""})
                              })
                            }}
                          />
                          <label
                            htmlFor={`${name}-${option['@id']}`}
                            tabIndex="0"
                            role="button"
                            onKeyDown={e => triggerClick(e, 13)}
                          >
                            &nbsp;{translate(option.name)}
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                }
              </div>
              <p>{translate('ClientTemplates.place_widget.searchExplanation')}</p>
              <Input
                property="streetAddress"
                type="text"
                translate={translate}
                title={schema.properties.address.properties.streetAddress.title}
              />
              <div className="divided">
                <Input
                  property="postalCode"
                  type="text"
                  translate={translate}
                  title={schema.properties.address.properties.postalCode.title}
                />
                <Input
                  property="postOfficeBoxNumber"
                  type="text"
                  translate={translate}
                  title={schema.properties.address.properties.postOfficeBoxNumber.title}
                />
                <Input
                  property="addressLocality"
                  type="text"
                  translate={translate}
                  title={schema.properties.address.properties.addressLocality.title}
                />
              </div>
              <Input
                property="addressRegion"
                type="text"
                translate={translate}
                title={schema.properties.address.properties.addressRegion.title}
              />
            </div>
          }
        </Fieldset>
        <Fieldset property="geo" translate={translate}>
          <Input
            property="lat"
            type="number"
            translate={translate}
            title={schema.properties.geo.properties.lat.title}
          />
          <Input
            property="lon"
            type="number"
            translate={translate}
            title={schema.properties.geo.properties.lon.title}
          />
        </Fieldset>
      </div>
    )
  }
}

PlaceWidget.propTypes = {
  name: PropTypes.string.isRequired,
  errors: PropTypes.arrayOf(PropTypes.object),
  property: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
  translate: PropTypes.func.isRequired,
  value: PropTypes.objectOf(PropTypes.any),
  api: PropTypes.objectOf(PropTypes.any).isRequired,
  schema: PropTypes.objectOf(PropTypes.any).isRequired,
  setValue: PropTypes.func.isRequired,
  config: PropTypes.objectOf(PropTypes.any).isRequired
}

PlaceWidget.defaultProps = {
  errors: [],
  property: undefined,
  title: '',
  className: '',
  value: {}
}

export default withApi(withFormData(PlaceWidget))
