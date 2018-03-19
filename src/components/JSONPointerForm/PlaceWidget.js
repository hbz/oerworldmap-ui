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

import regions from '../../json/iso3166-2.json'

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
    const {value, api, translate} = this.props
    const url = 'https://nominatim.openstreetmap.org/search'
    const params = [
      'format=json',
      'addressdetails=1',
      'limit=10',
      `countrycodes=${getProp(['address', 'addressCountry'], value)}`
    ]
    api.fetch(`${url}/${this.state.filter} ${translate(getProp(['address', 'addressRegion'], value))}?${params.join('&')}`).then(
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
            onFeatureDrag={point => setValue(Object.assign(
              value ? JSON.parse(JSON.stringify(value)) : {},
              {geo: {
                lat: point.geometry.coordinates.lat,
                lon: point.geometry.coordinates.lng,
              }}
            ))}
            center={geometry ? geometry.coordinates : undefined}
          />
        </div>
        <Fieldset property="address" translate={translate}>
          <DropdownSelect
            property="addressCountry"
            translate={translate}
            options={schema.properties.address.properties.addressCountry.enum}
            title={schema.properties.address.properties.addressCountry.title}
            setValue={country => setValue(Object.assign(
              value ? JSON.parse(JSON.stringify(value)) : {},
              {address: {addressCountry: country}}
            ))}
          />
          {getProp(['address', 'addressCountry'], value) &&
            <div>
              <DropdownSelect
                property="addressRegion"
                translate={translate}
                options={regions.filter(region => region.startsWith(value.address.addressCountry))}
                title={schema.properties.address.properties.addressRegion.title}
                setValue={region => setValue(Object.assign(
                  value ? JSON.parse(JSON.stringify(value)) : {},
                  {address: {
                    addressCountry: value.address.addressCountry,
                    addressRegion: region
                  }}
                ))}
              />
              {getProp(['address', 'addressRegion'], value) &&
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
                                  const address = value.address || {}
                                  Object.assign(address, {
                                    streetAddress: option.address.streetAddress,
                                    postalCode: option.address.postalCode,
                                    addressLocality: option.address.addressLocality
                                  })
                                  setValue(Object.assign(
                                    value ? JSON.parse(JSON.stringify(value)) : {},
                                    {address, geo: {
                                      lat: option.geo.lat,
                                      lon: option.geo.lon
                                    }}
                                  ))
                                  this.setState({options: [], filter: ""})
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
                      property="addressLocality"
                      type="text"
                      translate={translate}
                      title={schema.properties.address.properties.addressLocality.title}
                    />
                  </div>
                </div>
              }
            </div>
          }
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
