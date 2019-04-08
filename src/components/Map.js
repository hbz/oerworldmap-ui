/* global document */
/* global window */
/* global navigator */

import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

import {scaleLog, quantile, interpolateHcl} from 'd3'

import 'mapbox-gl/dist/mapbox-gl.css'

import Icon from './Icon'
import Link from './Link'
import withI18n from './withI18n'
import withEmitter from './withEmitter'
import EmittProvider from './EmittProvider'
import { getParams, getURL, getProp } from '../common'
import bounds from  '../json/bounds.json'
import ResourcePreview from './ResourcePreview'
import I18nProvider from './I18nProvider'
import i18n from '../i18n'

import '../styles/components/Map.pcss'

class Map extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
    this.updatePoints = this.updatePoints.bind(this)
    this.updateZoom = this.updateZoom.bind(this)
    this.updateActiveCountry = this.updateActiveCountry.bind(this)
    this.mouseMovePoints = this.mouseMovePoints.bind(this)
    this.mouseMove = this.mouseMove.bind(this)
    this.moveEnd = this.moveEnd.bind(this)
    this.mouseLeave = this.mouseLeave.bind(this)
    this.clickPoints = this.clickPoints.bind(this)
    this.clickCountries = this.clickCountries.bind(this)
    this.choroplethStopsFromBuckets = this.choroplethStopsFromBuckets.bind(this)
  }

  componentDidMount() {

    const { mapboxConfig, map, locales, features, aggregations, iso3166, home, emitter } = this.props

    const bounds = [[Number.NEGATIVE_INFINITY, -60], [Number.POSITIVE_INFINITY, 84]]
    const mapboxgl = require('mapbox-gl')
    mapboxgl.accessToken = mapboxConfig.token

    const mapParameters = map
      && map.split(',')

    const center = {}
    if (mapParameters) {
      center.lng = (mapParameters[0] && !isNaN(mapParameters[0])) ? mapParameters[0] : null
      center.lat = (mapParameters[1] && !isNaN(mapParameters[1])) ? mapParameters[1] : null
      center.zoom = (mapParameters[2] && !isNaN(mapParameters[2])) ? mapParameters[2] : null
    }

    this.map = new mapboxgl.Map({
      container: 'Map',
      style: `mapbox://styles/${mapboxConfig.style}`,
      center: (center.lng && center.lat) ? [center.lng, center.lat] : [0, 0],
      zoom: center.zoom || 1,
      maxBounds: bounds,
      preserveDrawingBuffer: navigator.userAgent.toLowerCase().indexOf('firefox') > -1
    })

    this.map.once('load', () => {

      this.map.dragRotate.disable()
      this.map.touchZoomRotate.disableRotation()

      this.map.on('zoom', this.zoom)

      this.map.setLayoutProperty('country-label', 'text-field', `{name_${locales[0]}}`)
      this.map.setLayoutProperty('road-label', 'text-field', `{name_${locales[0]}}`)
      this.map.setLayoutProperty('minor-place-label', 'text-field', `{name_${locales[0]}}`)
      this.map.setLayoutProperty('major-place-label', 'text-field', `{name_${locales[0]}}`)
      this.map.setLayoutProperty('place-label', 'text-field', `{name_${locales[0]}}`)

      this.Map.addEventListener('mouseleave', ()=> {
        this.hoverPopup.remove()
        this.setState({hoveredFeatures:null})
      })

      // Set data source for points layers
      this.map.addSource('pointsSource', {
        type: 'geojson',
        data: features
      })

      // Hack to use Mapbox studio styles with local data (source)
      const pointsLayers = ['points', 'points-hover', 'points-select']
      pointsLayers.forEach(layer => {
        const pointsLayer = this.map.getStyle().layers.find(l => { return l.id === layer})
        delete pointsLayer['source-layer']
        this.map.removeLayer(layer)
        pointsLayer.source = 'pointsSource'
        pointsLayer.paint['circle-opacity'] = 1
        pointsLayer.paint['circle-stroke-opacity'] = 1
        this.map.addLayer(pointsLayer)
      })

      // Initialize choropleth layers
      this.updateChoropleth(aggregations)
      this.updateZoom(iso3166, home, map)
      this.updateActiveCountry(iso3166)

      // Update URL values
      this.map.on("moveend", this.moveEnd)

      // Get features currently under the mouse
      this.map.on("mousemove", this.mouseMove)

      // When the user moves their mouse over the points layer, we'll update the filter in
      // the points hover layer to only show the matching point, thus making a hover effect.
      this.map.on("mousemove", "points", this.mouseMovePoints)

      // Reset the point hover layer's filter when the mouse leaves the layer.
      this.map.on("mouseleave", "points", this.mouseLeave)

      this.map.on('click', 'points', this.clickPoints)

      this.map.on('click', 'countries', this.clickCountries)

      // Receive event from ItemList
      emitter.on('hoverPoint', (e) => {
        this.map.setFilter('points-hover', [ 'in', '@id' ].concat(e.id))
      })

      // Add mapbox controls
      const nav = new mapboxgl.NavigationControl({showCompass: false})
      this.map.addControl(nav, 'bottom-left')

      // Receive event from Filters
      emitter.on('hideOverlay', () => {
        this.popup ? this.popup.remove() : null
      })

    })

    // Create and hide popup for hover
    this.popupOffsets = {
      'top': [0, 20],
      'bottom': [0, -20],
      'left': [20, 0],
      'right': [-20, 0],
      'top-left': [0, 20],
      'top-right': [0, 20],
      'bottom-left': [0, -20],
      'bottom-right': [0, -20],
    }
    this.hoverPopup = new mapboxgl.Popup(
      {
        closeButton:false,
        offset:this.popupOffsets
      })
      .remove()
  }

  componentWillReceiveProps(nextProps) {
    this.updateChoropleth(nextProps.aggregations)
    this.updateZoom(nextProps.iso3166, nextProps.home, nextProps.map)
    this.updateActiveCountry(nextProps.iso3166)
    this.updatePoints(nextProps.features)
  }

  componentWillUnmount() {
    this.map.off('zoom', this.zoom)
    this.map.off('mousemove', 'points', this.mouseMovePoints)
    this.map.off('mousemove', this.mouseMove)
    this.map.off('moveend', this.moveEnd)
    this.map.off('mouseleave', 'points', this.mouseLeave)
    this.map.off('click', 'points', this.clickPoints)
    this.map.off('click', 'countries', this.clickCountries)
  }

  getBucket(country) {
    const { features, iso3166, aggregations} = this.props

    return features ? (
      country === iso3166
      && Object.assign(aggregations["global#facets"]["filter#filtered"]["filter#country"], {key: country})
    ) || (
      aggregations["sterms#feature.properties.location.address.addressCountry"]
      && aggregations["sterms#feature.properties.location.address.addressCountry"]
        .buckets.find(e => e.key === country)
    ) : null
  }

  getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    const R = 6371 // Radius of the earth in km
    const dLat = this.deg2rad(lat2-lat1)  // this. below
    const dLon = this.deg2rad(lon2-lon1)
    const a =
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
      Math.sin(dLon/2) * Math.sin(dLon/2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
    const d = R * c // Distance in km
    return d
  }

  zoom(e) {
    if (e.target.getZoom() >= 7) {
      e.target.setPaintProperty('water-overlay', 'background-opacity', 0)
    } else {
      e.target.setPaintProperty('water-overlay', 'background-opacity', 1)
    }
  }

  mouseMovePoints(e) {
    const ids = e.features.map(function (feat) { return feat.properties['@id'] })
    this.map.setFilter('points-hover', [ 'in', '@id' ].concat(ids))
    if (ids.length) {
      this.map.getCanvas().style.cursor = 'pointer'
    }
  }

  mouseMove(e) {
    const { translate, iso3166, aggregations, phrases, locales, emitter } = this.props
    const { bucket, overlayList, hoveredFeatures } = this.state
    const hoveredCountry = this.map.queryRenderedFeatures(e.point, { layers: ['countries'] })

    if (hoveredCountry
      && hoveredCountry[0]
      && (!bucket || bucket && bucket.key !== hoveredCountry[0].properties.iso_a)
    ) {
      const bucketObj = this.getBucket(hoveredCountry[0].properties.iso_a2)
      this.setState({bucket: bucketObj})
      this.map.getCanvas().style.cursor = 'pointer'
    } else {
      this.map.getCanvas().style.cursor = ''
    }

    const hoveredPoints = this.map.queryRenderedFeatures(e.point, { layers: ['points'] })
    const hoveredFeaturesObj = hoveredPoints.length ? hoveredPoints : hoveredCountry
    this.setState({
      hoveredFeatures: hoveredFeaturesObj,
    })

    let popupContent

    if (hoveredFeatures && hoveredFeatures.length && !overlayList) {
      if (hoveredFeatures[0] && hoveredFeatures[0].layer.id  === 'countries') {
        popupContent = (
          <ul>
            <li>
              <b>
                {translate(hoveredFeatures[0].properties.iso_a2)}
                <br />
                {bucket &&
                  <div className="buckets">{this.renderTypes(bucket['sterms#by_type'].buckets)}</div>
                }
              </b>
            </li>

            {bucket && aggregations["global#champions"]["sterms#about.countryChampionFor.keyword"].buckets.some(b => b.key === bucket.key) ? (
              <li className="separator"><span>{translate('Map.countryChampionAvailable')}</span></li>
            ) : (
              !iso3166
                ? <li className="separator"><span>{translate('Map.noCountryChampionYet')}</span></li>
                : null
            )
            }
          </ul>
        )
      } else {
        popupContent = (
          <ul className="list">
            {hoveredFeatures.length <= 6 || this.map.getZoom() === this.map.getMaxZoom() ? (
              (hoveredFeatures.length >= 1 && hoveredFeatures.length < 2) ? (
                <li>
                  <I18nProvider i18n={i18n(locales, phrases)}>
                    <EmittProvider emitter={emitter}>
                      <ResourcePreview
                        about={Object.assign(hoveredFeatures[0].properties, {
                          name: JSON.parse(hoveredFeatures[0].properties.name),
                          location: JSON.parse(hoveredFeatures[0].properties.location),
                          additionalType: hoveredFeatures[0].properties.additionalType
                            && JSON.parse(hoveredFeatures[0].properties.additionalType)
                            || undefined,
                          alternateName: hoveredFeatures[0].properties.alternateName
                            && JSON.parse(hoveredFeatures[0].properties.alternateName)
                            || undefined,
                        })}
                      />
                    </EmittProvider>
                  </I18nProvider>
                </li>
              ) : (
                hoveredFeatures.map(feature => (
                  <li key={feature.properties['@id']}>
                    <Icon type={feature.properties['@type']} />
                    &nbsp;
                    {translate(JSON.parse(feature.properties.name))}
                  </li>
                ))
              )
            ) : (
              <li>
                {this.calculateTypes(hoveredFeatures)}
              </li>
            )}
          </ul>
        )
      }

      let coords = hoveredPoints[0] && hoveredPoints[0].geometry.coordinates

      // In case of multipoint choose the closest to the mouse position
      if (coords && coords.length > 2) {
        let current = coords[0]
        coords.forEach((pos) => {
          if (this.getDistanceFromLatLonInKm(pos[1], pos[0], e.lngLat.lat, e.lngLat.lng)
            < this.getDistanceFromLatLonInKm(current[1], current[0], e.lngLat.lat, e.lngLat.lng)) {
            current = pos
          }
          coords = current
        })
      }

      const popupDOM = document.createElement('div')
      this.hoverPopup
        .setLngLat((coords && typeof coords[0] === 'number')
          ? coords : e.lngLat)
        .setDOMContent(ReactDOM.render(
          <div
            className="tooltip"
            style={
              { zIndex: 9,
                pointerEvents: 'none',
              }}
          >
            {popupContent}
          </div>, popupDOM))
        .addTo(this.map)

      this.hoverPopup._content.classList.add('noEvents')
    } else {
      this.hoverPopup.remove()
    }
  }

  moveEnd(e) {
    const { iso3166 } = this.props

    if (!iso3166) {
      const center = e.target.getCenter()
      center.zoom = e.target.getZoom()
      const params = getParams(window.location.search)
      params.map = `${center.lng.toFixed(5)},${center.lat.toFixed(5)},${Math.floor(center.zoom)}`
      const route = {
        params,
        path: window.location.pathname,
        hash: window.location.hash.replace('#', '')
      }
      window.history.replaceState(null, null, decodeURIComponent(getURL(route)))
    }
  }

  deg2rad(deg) {
    return deg * (Math.PI / 180)
  }

  updateActiveCountry(iso3166) {
    if (iso3166) {
      this.map.setFilter('countries-inactive', ['!=', 'iso_a2', iso3166])
      this.map.setFilter('Regions', ['==', 'iso_a2', iso3166])
    } else {
      this.map.setFilter('countries-inactive', ["!has", "iso_a2"])
      this.map.setFilter('Regions', ["!has", "iso_a2"])
    }
  }

  updateZoom(iso3166, home, map) {
    const mapboxgl = require('mapbox-gl')
    // Zoom if a country is selected
    if (iso3166) {

      if (this.map.isStyleLoaded()) {
        const coutryFeatures = this.map.queryRenderedFeatures({
          layers:['countries'],
          filter: ['in', 'iso_a2', iso3166]
        })

        if (coutryFeatures.length) {

          if (iso3166 in bounds) {
            const bound = bounds[iso3166]
            this.map.flyTo(
              {center: [bound[0],bound[1]],
                zoom: [bound[2]]
              }
            )
          } else {
            const sumCoords = []

            coutryFeatures.forEach(feature => {
              feature.geometry.coordinates.forEach(land => {
                sumCoords.push.apply(sumCoords, feature.geometry.type === 'MultiPolygon' ? land[0] : land)
              })
            })

            const bounds = sumCoords.reduce(function(bounds, coord) {
              return bounds.extend(coord)
            }, new mapboxgl.LngLatBounds(sumCoords[0], sumCoords[0]))

            this.map.fitBounds(bounds, {
              padding: 20,
              maxZoom: 6.9
            })
          }
        }
      } else {
        window.setTimeout(()=> {
          this.updateZoom(iso3166, home, map)
        }, 500)
      }
    } else if (map) {
      const center = {}
      const mapParameters = map.split(',')

      center.lng = (mapParameters[0] && !isNaN(mapParameters[0])) ? mapParameters[0] : null
      center.lat = (mapParameters[1] && !isNaN(mapParameters[1])) ? mapParameters[1] : null
      center.zoom = (mapParameters[2] && !isNaN(mapParameters[2])) ? mapParameters[2] : null

      const pos = {
        center: (center.lng && center.lat) ? [center.lng, center.lat] : [0, 0],
        zoom: center.zoom || 1
      }
      this.map.flyTo(pos)
    } else if (home) {
      this.map.setCenter([0,0])
      this.map.setZoom(1)
    }
  }

  choroplethStopsFromBuckets(buckets) {
    const counts = buckets.map(bucket => bucket.doc_count)
    const range = this.map.getStyle().layers
      .filter(layer => layer.id.startsWith("choropleth"))
      .map(layer => {
        this.map.setLayoutProperty(layer.id, 'visibility', 'none')
        return this.map.getPaintProperty(layer.id, 'fill-color')
      })

    const getColor = scaleLog()
      .range([range[range.length-1], range[0]])
      .interpolate(interpolateHcl)
      .domain([quantile(counts, .01), quantile(counts, .99)])

    return buckets.length
      ? buckets.map(bucket => [bucket.key, getColor(bucket.doc_count)])
      : [['', 'rgb(255, 255, 255)']]
  }

  updateChoropleth(aggregations) {
    if (aggregations) {
      const aggregation = aggregations["sterms#feature.properties.location.address.addressRegion"]
        || aggregations["sterms#feature.properties.location.address.addressCountry"]
      const stops = this.choroplethStopsFromBuckets(aggregation.buckets)
      const colors = stops
        .map(stop => stop[1])
        .filter((value, index, self) => self.indexOf(value) === index)
        .concat('rgba(255, 255, 255)')
        .reverse()
      const property = aggregations["sterms#feature.properties.location.address.addressRegion"] ? 'code_hasc' : 'iso_a2'
      const layer = aggregations["sterms#feature.properties.location.address.addressRegion"] ? 'Regions' : 'countries'

      this.map.setPaintProperty(layer, 'fill-color', {
        property,
        stops,
        "type": "categorical",
        "default": 'rgb(255, 255, 255)'
      })
      this.setState({
        colors
      })
    }
  }

  mouseLeave() {
    this.map.setFilter('points-hover', ['==', "display", "hidden"])
    this.map.getCanvas().style.cursor = ''
  }

  clickPoints(e) {
    const { translate, emitter } = this.props
    if (e.features.length > 6 && this.map.getZoom() !== this.map.getMaxZoom()) {
      this.map.flyTo({
        center: e.lngLat,
        zoom: this.map.getZoom() + 5
      })
    } else if (e.features.length > 1) {
      const list = e.features.map(feature => {
        return (
          <li key={feature.properties['@id']}>
            <Link href={feature.properties['@id']}>
              <Icon type={feature.properties['@type']} />
              &nbsp;
              {translate(JSON.parse(feature.properties.name))}
            </Link>
          </li>
        )
      })

      // Show overlay
      const popupDOM = document.createElement('div')
      ReactDOM.render(
        <EmittProvider emitter={emitter}>
          <div className="tooltip">
            <ul className="list">{list}</ul>
          </div>
        </EmittProvider>
        , popupDOM)

      if (this.popup && this.popup.isOpen()) {
        this.popup.remove()
      } else {
        const mapboxgl = require('mapbox-gl')
        this.popup = new mapboxgl.Popup(
          {
            closeButton:false,
            offset:this.popupOffsets
          })
          .setLngLat(this.hoverPopup ? this.hoverPopup._lngLat : e.features[0].geometry.coordinates)
          .setDOMContent(popupDOM)
          .addTo(this.map)

        this.popup.on('close', () => {
          this.setState({overlayList:false})
        })

        this.setState({
          overlayList:true,
          hoveredFeatures:null
        })
      }
    }

    else {
      this.map.setFilter('points-select', [ 'in', '@id' ].concat(e.features[0].properties['@id']))
      // Click on a single resource
      const url = `/resource/${e.features[0].properties['@id']}`
      emitter.emit('navigate', url)
    }
  }

  clickCountries(e) {
    const { emitter } = this.props
    if (this.popup && this.popup.isOpen()) return
    // Check if a point is clicked too and do nothing in that case
    const features = this.map.queryRenderedFeatures(e.point, { layers: ['points'] })
    if (!features.length) {
      if (e.features[0].properties.iso_a2 !== '-99') {
        emitter.emit('navigate', `/country/${e.features[0].properties.iso_a2.toLowerCase()}${window.location.search}`)
      }
    }
  }

  updatePoints(features) {
    this.map.getSource('pointsSource').setData(features)
  }

  calculateTypes(features) {
    const types = []
    features.forEach(feature => {
      if (types[feature.properties['@type']]) {
        types[feature.properties['@type']] = types[feature.properties['@type']] +1
      } else {
        types[feature.properties['@type']] = 1
      }
    })
    return Object.keys(types).map((key) => {
      return (
        <span className="item" key={key}>
          <Icon type={key} />
          &nbsp;
          {types[key]}
        </span>
      )
    })
  }

  renderTypes(types) {
    return types.map((type) => {
      return (
        <div key={type.key}>
          <Icon type={type.key} />
          <span>{type.doc_count}</span>
        </div>
      )
    })
  }

  render() {

    const { iso3166, emitter, translate, aggregations } = this.props
    const { overlayList, colors } = this.state

    return (
      <div
        ref={(map) => { this.Map = map }}
        id="Map"
        style={
          {position: 'absolute',
            width: '101%',
            height: '100%',
            top: 0,
            left: 0}}
        onKeyDown={e => {
          if (e.keyCode === 27 && iso3166) {
            emitter.emit('navigate', '/resource/')
          }
        }}
        role="presentation"
      >
        {overlayList &&
          <div className="overlayList" />
        }

        {colors &&
        (
          (getProp(['sterms#feature.properties.location.address.addressRegion', 'buckets', 0, 'doc_count'], aggregations) > 0) ||
          (getProp(['sterms#feature.properties.location.address.addressCountry', 'buckets', 0, 'doc_count'], aggregations) > 0) ||
          (getProp(['country', 'sterms#feature.properties.location.address.addressCountry', 'buckets', 0, 'doc_count'], aggregations) > 0)
        ) && (
          <div className="mapLeyend">
            <div className="infoContainer">
              <span className="min">0</span>

              <span className="description">
                {aggregations['sterms#feature.properties.location.address.addressRegion'] &&
                  aggregations['sterms#feature.properties.location.address.addressRegion'].buckets.length
                  ? translate('Map.entriesPerRegion') : translate('Map.entriesPerCountry')}
              </span>

              <span className="max">
                {
                  getProp(['sterms#feature.properties.location.address.addressRegion', 'buckets', 0, 'doc_count'], aggregations) ||
                  getProp(['sterms#feature.properties.location.address.addressCountry', 'buckets', 0, 'doc_count'], aggregations) ||
                  getProp(['country', 'sterms#feature.properties.location.address.addressCountry', 'buckets', 0, 'doc_count'], aggregations)
                }
              </span>
            </div>

            <div className="stepsContainer">
              {colors.map(color => (
                <div key={color} style={{backgroundColor: color}} className="step" />
              ))}
            </div>
          </div>
        )}

        {aggregations['sterms#feature.properties.location.address.addressRegion'] && (
          <div className='goToMap'>
            <Link href='/resource/'>
              <i aria-hidden="true" className='fa fa-globe' />
            </Link>
          </div>
        )}

        <a className="imprintLink" href="/imprint">{translate('main.imprintPrivacy')}</a>

      </div>
    )
  }

}

Map.propTypes = {
  mapboxConfig: PropTypes.shape(
    {
      token: PropTypes.string,
      style: PropTypes.string,
    }
  ).isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
  locales: PropTypes.arrayOf(PropTypes.any).isRequired,
  features: PropTypes.objectOf(PropTypes.any).isRequired,
  aggregations: PropTypes.objectOf(PropTypes.any).isRequired,
  iso3166: PropTypes.string,
  translate: PropTypes.func.isRequired,
  map: PropTypes.string,
  home: PropTypes.bool.isRequired,
  phrases: PropTypes.objectOf(PropTypes.any).isRequired,
}

Map.defaultProps = {
  iso3166: null,
  map: null,
}

export default withEmitter(withI18n(Map))
