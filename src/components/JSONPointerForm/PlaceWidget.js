/* global document */
import React from 'react'
import PropTypes from 'prop-types'
import { debounce } from 'lodash'

import Fieldset from './Fieldset'
import Input from './Input'
import DropdownSelect from './DropdownSelect'
import withFormData from './withFormData'

import MiniMap from '../MiniMap'
import withApi from '../withApi'

import regions from '../../json/iso3166-2.json'

import {
  triggerClick, getProp, mapNominatimResult, objectMap,
} from '../../common'

class PlaceWidget extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: '',
      options: [],
      collapsed: props.schema._display && props.schema._display.collapsed,
    }
    this.handleChange = this.handleChange.bind(this)
    this.updateOptions = debounce(this.updateOptions.bind(this), 200)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClick)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick)
  }

  handleClick(e) {
    const { options } = this.state

    if (options.length && !this.wrapper.contains(e.target)) {
      this.setState({ options: [] })
    }
  }

  handleChange(e) {
    this.setState({ filter: e.target.value })
    e.target.value ? this.updateOptions() : this.setState({ options: [] })
  }

  updateOptions() {
    const { value, api, translate } = this.props
    const { filter } = this.state

    const url = 'https://nominatim.openstreetmap.org/search'
    const params = [
      'format=json',
      'addressdetails=1',
      'limit=10',
      `countrycodes=${getProp(['address', 'addressCountry'], value)}`,
    ]
    api.fetch(`${url}/${filter} ${translate(getProp(['address', 'addressRegion'], value)) || ''}?${params.join('&')}`).then(
      result => this.setState({ options: result.map(result => mapNominatimResult(result)) }),
    )
  }

  render() {
    const {
      name, value, errors, property, title, className, translate, schema,
      setValue, description, formId, required,
    } = this.props
    const { collapsed, filter, options } = this.state

    const geometry = value.geo && value.geo.lon && value.geo.lat
      ? {
        type: 'Point',
        coordinates: [value.geo.lon, value.geo.lat],
      } : null

    return (
      <div
        className={`PlaceWidget ${property || ''} ${className} ${errors.length ? 'hasError' : ''}`.trim()}
        role="group"
        aria-labelledby={`${formId}-${name}-label`}
        ref={el => this.wrapper = el}
      >
        <span className="fieldDescription">
          {(description
          && translate(description)
          !== description)
            ? translate(description)
            : ''}
        </span>
        {errors.map((error, index) => (
          <div className="error" key={index}>
            {translate(`Error.${error.keyword}`, objectMap(error.params, translate))}
          </div>
        ))}
        {collapsed ? (
          <div>
            <div
              className={`label ${required ? 'required' : ''}`.trim()}
              id={`${formId}-${name}-label`}
            >
              {translate(title)}
            </div>
            <div><em>{translate(description)}</em></div>
            <button
              className="btn btn-default"
              type="button"
              onClick={() => this.setState({ collapsed: false })}
            >
              {translate('show')}
            </button>
          </div>
        ) : (
          <div>
            <Fieldset property="address" translate={translate}>
              <DropdownSelect
                property="addressCountry"
                translate={translate}
                options={schema.properties.address.properties.addressCountry.enum}
                title={schema.properties.address.properties.addressCountry.title}
                setValue={country => setValue({ address: { addressCountry: country } })}
              />
              {getProp(['address', 'addressCountry'], value) && (
                <div>
                  <DropdownSelect
                    property="addressRegion"
                    translate={translate}
                    options={regions
                      .filter(region => region.startsWith(value.address.addressCountry))
                      .filter((v, i, a) => a.indexOf(v) === i)
                    }
                    title={schema.properties.address.properties.addressRegion.title}
                  />
                  <div className="locationForm" aria-labelledby={`${formId}-${name}/address-label`}>
                    <div className="label" id={`${formId}-${name}/address-label`}>
                      {translate('ResourceIndex.PostalAddress.edit.address')}
                    </div>
                    <div className="selectContainer">
                      <div className="filterContainer">
                        <input
                          type="text"
                          value={filter}
                          className="filter"
                          onChange={this.handleChange}
                          placeholder={translate('ClientTemplates.place_widget.searchLocation')}
                        />
                      </div>
                      {options.length > 0 && (
                        <div className="optionsContainer">
                          <ul>
                            {options.map(option => (
                              <li key={option['@id']}>
                                <input
                                  type="checkbox"
                                  value={option['@id']}
                                  id={`${formId}-${name}-${option['@id']}`}
                                  onChange={() => {
                                    const address = value.address || {}
                                    Object.assign(address, {
                                      streetAddress: option.address.streetAddress,
                                      postalCode: option.address.postalCode,
                                      addressLocality: option.address.addressLocality,
                                    })
                                    setValue(Object.assign(
                                      value ? JSON.parse(JSON.stringify(value)) : {},
                                      {
                                        address,
                                        geo: {
                                          lat: option.geo.lat,
                                          lon: option.geo.lon,
                                        },
                                      },
                                    ))
                                    this.setState({ options: [], filter: '' })
                                  }}
                                />
                                <label
                                  htmlFor={`${formId}-${name}-${option['@id']}`}
                                  tabIndex="0"
                                  role="button"
                                  onKeyDown={e => triggerClick(e, 13)}
                                >
                                  &nbsp;
                                  {translate(option.name)}
                                </label>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                    <p>{translate('ClientTemplates.place_widget.searchExplanation')}</p>
                    <Input
                      property="streetAddress"
                      type="text"
                      translate={translate}
                      title={schema.properties.address.properties.streetAddress.title}
                      placeholder={schema.properties.address.properties.streetAddress.title}
                    />
                    <div className="divided">
                      <Input
                        property="postalCode"
                        type="text"
                        translate={translate}
                        title={schema.properties.address.properties.postalCode.title}
                        placeholder={schema.properties.address.properties.postalCode.title}
                      />
                      <Input
                        property="addressLocality"
                        type="text"
                        translate={translate}
                        title={schema.properties.address.properties.addressLocality.title}
                        placeholder={schema.properties.address.properties.addressLocality.title}
                      />
                    </div>
                    {geometry && (
                      <div
                        className="mapContainer"
                        style={{
                          position: 'relative',
                          height: '300px',
                        }}
                      >
                        <MiniMap
                          geometry={geometry}
                          zoom={geometry ? 12 : 1}
                          draggable
                          boxZoom
                          onFeatureDrag={geometry => setValue(Object.assign(
                            value ? JSON.parse(JSON.stringify(value)) : {},
                            {
                              geo: {
                                lat: geometry.coordinates.lat,
                                lon: geometry.coordinates.lng,
                              },
                            },
                          ))}
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </Fieldset>
          </div>
        )}
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
  description: PropTypes.string,
  formId: PropTypes.string.isRequired,
  required: PropTypes.bool,
}

PlaceWidget.defaultProps = {
  errors: [],
  property: undefined,
  title: '',
  description: undefined,
  className: '',
  value: {},
  required: false,
}

export default withApi(withFormData(PlaceWidget))
