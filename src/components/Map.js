/* global document */
/* global window */

import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

import 'mapbox-gl/dist/mapbox-gl.css'

import Icon from './Icon'
import Link from './Link'
import translate from './translate'
import withEmitter from './withEmitter'
import EmittProvider from './EmittProvider'
import { getParams, getURL } from '../common'
import bounds from  '../json/bounds.json'

import '../styles/components/Map.pcss'

class Map extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      center: {
        lng: null,
        lat: null,
        zoom: null,
      }
    }
    this.updatePoints = this.updatePoints.bind(this)
    this.updateZoom = this.updateZoom.bind(this)
    this.updateActiveCountry = this.updateActiveCountry.bind(this)
  }

  componentDidMount() {

    const bounds = [[Number.NEGATIVE_INFINITY, -60], [Number.POSITIVE_INFINITY, 84]]
    const mapboxgl = require('mapbox-gl')
    mapboxgl.accessToken = this.props.mapboxConfig.token

    const mapParameters = this.props.map
      && this.props.map.split(',')

    const center = {}
    if (mapParameters) {
      center.lng = (mapParameters[0] && !isNaN(mapParameters[0])) ? mapParameters[0] : null
      center.lat = (mapParameters[1] && !isNaN(mapParameters[1])) ? mapParameters[1] : null
      center.zoom = (mapParameters[2] && !isNaN(mapParameters[2])) ? mapParameters[2] : null
    }

    this.map = new mapboxgl.Map({
      container: 'Map',
      style: `mapbox://styles/${this.props.mapboxConfig.style}`,
      center: (center.lng && center.lat) ? [center.lng, center.lat] : [-100.486052, 37.830348],
      zoom: center.zoom || 2,
      maxBounds: bounds
    })

    this.map.once('load', () => {

      this.map.on('zoom', this.zoom)
      this.setState({center})

      this.map.setLayoutProperty('country-label', 'text-field', `{name_${this.props.locales[0]}}`)
      this.map.setLayoutProperty('road-label', 'text-field', `{name_${this.props.locales[0]}}`)
      this.map.setLayoutProperty('minor-place-label', 'text-field', `{name_${this.props.locales[0]}}`)
      this.map.setLayoutProperty('major-place-label', 'text-field', `{name_${this.props.locales[0]}}`)
      this.map.setLayoutProperty('place-label', 'text-field', `{name_${this.props.locales[0]}}`)

      this.Map.addEventListener('mouseleave', ()=> {
        this.hoverPopup.remove()
        this.setState({hoveredFeatures:null})
      })

      // Set data source for points layers
      this.map.addSource('pointsSource', {
        type: 'geojson',
        data: this.props.features
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
      this.updateChoropleth(this.props.aggregations)
      this.updateZoom(this.props.iso3166)
      this.updateActiveCountry(this.props.iso3166)

      // Update URL values
      this.map.on("moveend", (e) => {
        if (!this.props.iso3166) {
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
          this.setState({center})
        }
      })

      // Get features currently under the mouse
      this.map.on("mousemove", (e) => {
        const hoveredCountry = this.map.queryRenderedFeatures(e.point, { layers: ['countries'] })

        if (hoveredCountry
          && hoveredCountry[0]
          && (!this.state.bucket || this.state.bucket && this.state.bucket.key !== hoveredCountry[0].properties.iso_a)) {
          const bucket = this.getBucket(hoveredCountry[0].properties.iso_a2)
          this.setState({bucket})
          this.map.getCanvas().style.cursor = 'pointer'
        } else {
          this.map.getCanvas().style.cursor = ''
        }

        const hoveredPoints = this.map.queryRenderedFeatures(e.point, { layers: ['points'] })
        const hoveredFeatures = hoveredPoints.length ? hoveredPoints : hoveredCountry
        this.setState({
          hoveredFeatures,
        })

        let popupContent

        if (this.state.hoveredFeatures && this.state.hoveredFeatures.length && !this.state.overlayList) {
          if (this.state.hoveredFeatures[0] && this.state.hoveredFeatures[0].layer.id  === 'countries') {
            popupContent = (
              <ul>
                {/* ADD TRANSLATION FOR COUNTRY AND SERVICE */}
                <li>
                  <b>
                    {this.state.hoveredFeatures[0].properties.iso_a2}
                    <br />
                    {this.state.bucket &&
                      <div className="buckets" >{this.renderTypes(this.state.bucket.by_type.buckets)}</div>
                    }
                  </b>
                </li>

                {this.state.bucket && this.state.bucket.champions.doc_count > 0 &&
                  <li className="separator"><span>{this.props.translate('Map.countryChampionAvailable')}</span></li>
                }
              </ul>
            )
          } else {
            popupContent = (
              <ul className="list">
                {this.state.hoveredFeatures.length <= 6 ? (
                  this.state.hoveredFeatures.map(feature => (
                    <li key={feature.properties['@id']}>
                      <Icon type={feature.properties['@type']} />
                      &nbsp;<b>{feature.properties['@type']}:</b>
                      &nbsp;{this.props.translate(JSON.parse(feature.properties.name))}
                    </li>
                  ))
                ) : (
                  <li>
                    {this.calculateTypes(this.state.hoveredFeatures)}
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
                    pointerEvents:'none',
                  }}
              >
                {popupContent}
              </div>, popupDOM))
            .addTo(this.map)

          this.hoverPopup._content.classList.add('noEvents')
        } else {
          this.hoverPopup.remove()
        }
      })

      // When the user moves their mouse over the points layer, we'll update the filter in
      // the points hover layer to only show the matching point, thus making a hover effect.
      this.map.on("mousemove", "points", (e) => {
        const ids = e.features.map(function (feat) { return feat.properties['@id'] })
        this.map.setFilter('points-hover', [ 'in', '@id' ].concat(ids))
        if (ids.length) {
          this.map.getCanvas().style.cursor = 'pointer'
        }
      })

      // Reset the point hover layer's filter when the mouse leaves the layer.
      this.map.on("mouseleave", "points", () => {
        this.map.setFilter('points-hover', ['==', "display", "hidden"])
        this.map.getCanvas().style.cursor = ''
      })

      this.map.on('click', 'points', function (e) {
        if (e.features.length > 6) {
          this.map.flyTo({
            center: e.features[0].geometry.coordinates,
            zoom: 10
          })

        } else if (e.features.length > 1) {
          const list = e.features.map(feature => {
            return (
              <li key={feature.properties['@id']}>
                <Icon type={feature.properties['@type']} />
                &nbsp;
                <Link href={feature.properties['@id']}>
                  <b>{feature.properties['@type']}:</b>
                  &nbsp;{this.props.translate(JSON.parse(feature.properties.name))}
                </Link>
              </li>
            )
          })

          // Show overlay
          const popupDOM = document.createElement('div')
          ReactDOM.render(
            <EmittProvider emitter={this.props.emitter}>
              <div className="tooltip">
                <ul className="list">{list}</ul>
              </div>
            </EmittProvider>
            , popupDOM)

          if (this.popup && this.popup.isOpen()) {
            this.popup.remove()
          } else {
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
          this.props.emitter.emit('navigate', url)
        }
      }.bind(this))

      this.map.on('click', 'countries', function (e) {
        if (this.popup && this.popup.isOpen()) return
        // Check if a point is clicked too and do nothing in that case
        const features = this.map.queryRenderedFeatures(e.point, { layers: ['points'] })
        if (!features.length) {
          this.props.emitter.emit('navigate', `/country/${e.features[0].properties.iso_a2.toLowerCase()}`)
        }
      }.bind(this))

      // Receive event from ItemList
      this.props.emitter.on('hoverPoint', (e) => {
        this.map.setFilter('points-hover', [ 'in', '@id' ].concat(e.id))
      })

      // Add mapbox controls
      const nav = new mapboxgl.NavigationControl()
      this.map.addControl(nav, 'bottom-left')

      // Receive event from Filters
      this.props.emitter.on('hideOverlay', () => {
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
    this.updateZoom(nextProps.iso3166)
    this.updateActiveCountry(nextProps.iso3166)
    this.updatePoints(nextProps.features)
  }

  componentWillUnmount() {
    this.map.off('zoom', this.zoom)
  }

  getBucket(country) {
    if (this.props.features === null)  return
    return this.props.aggregations["about.location.address.addressCountry"].buckets.find(e => {
      return e.key === country
    })
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

  updateZoom(iso3166) {
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
              padding: 20
            })
          }
        }
      } else {
        window.setTimeout(()=> {
          this.updateZoom(iso3166)
        }, 500)
      }
    } else {
      if (Object.keys(this.state.center).length) {
        this.map.flyTo(
          {center: [this.state.center.lng, this.state.center.lat],
            zoom: this.state.center.zoom || 2
          }
        )
      }
    }
  }

  updateChoropleth(aggregations) {

    if (aggregations === null) return
    // The buckets holding the data for the choropleth layers
    const buckets = aggregations
      ? aggregations["about.location.address.addressCountry"].buckets
      : []

    // Dynamically get layers to be used for choropleth country overlays
    // and divide aggregation data into corresponding groups
    const choroplethLayersCount = this.map.getStyle().layers
      .filter(l => { return l.id.startsWith("choropleth")})
      .map(l => { return l.id }).length

    const max = buckets.length && buckets[0].doc_count || 0

    // Divide into steps rounded to the next 10
    const steps = Math.ceil(max / choroplethLayersCount / 10) * 10

    // Initialize array of arrays to hold bucket keys
    const choroplethLayerGroups = []
    for (let i = 0; i < choroplethLayersCount; i++) {
      choroplethLayerGroups.push([])
    }

    // Add keys to layer groups
    buckets.forEach(bucket => {
      choroplethLayerGroups[Math.floor(bucket.doc_count / steps)].push(bucket.key)
    })

    // Set filters of actual choropleth layers
    choroplethLayerGroups.forEach((group, i) => {
      this.map.setFilter('choropleth-'+(i+1), [ 'in', 'iso_a2' ].concat(group))
    })

    // Get mapbox colors for choropleth
    const colors = []
    choroplethLayerGroups.forEach((group, i) => {
      colors.push(this.map.getPaintProperty(`choropleth-${i+1}`, 'fill-color'))
    })

    this.setState({colors})

    if (aggregations["about.location.address.addressRegion"]) {

      const regionBuckets = aggregations
        ? aggregations["about.location.address.addressRegion"].buckets
        : []

      const stops = []

      const regionMax = regionBuckets.reduce(function(acc, val) {
        return acc < val.doc_count ? val.doc_count : acc
      }, 0)

      const regionSteps = Math.ceil(regionMax / choroplethLayersCount / 10) * 10

      regionBuckets.forEach(function(bucket) {
        stops.push([bucket['key'], colors[Math.floor(bucket.doc_count / regionSteps)]])
      })

      // In case of not having any stops, set an empty
      if (stops.length === 0)
        stops.push(['none', 'rgba(255, 255, 255, 1)'])

      this.map.setPaintProperty('Regions', 'fill-color', {
        "property": 'code_hasc',
        "type": "categorical",
        "default": 'rgba(255, 255, 255, 1)',
        "stops": stops
      })
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
      return <span key={key}>{types[key]} <Icon type={key} /> </span>
    })
  }

  renderTypes(types) {
    return types.map((type) => {
      return <div key={type.key}><Icon type={type.key} /><span>{type.doc_count}</span></div>
    })
  }

  render() {

    return (
      <div
        ref={(map) => { this.Map = map }}
        id="Map"
        style={
          {position:'absolute',
            width:'101%',
            height: '100%',
            top:0,
            left: 0}}
      >
        {this.state.overlayList &&
          <div className="overlayList" />
        }

        {this.state.colors &&
          <div className="mapLeyend">
            <div className="infoContainer">
              <span className="min">0</span>

              <span className="description">
                {this.props.aggregations['about.location.address.addressRegion'] &&
                  this.props.aggregations['about.location.address.addressRegion'].buckets.length
                  ? this.props.translate('Map.entriesPerRegion') : this.props.translate('Map.entriesPerCountry')}
              </span>

              <span className="max">
                {this.props.aggregations['about.location.address.addressRegion'] &&
                  this.props.aggregations['about.location.address.addressRegion'].buckets.length
                  ? (this.props.aggregations['about.location.address.addressRegion'].buckets.length
                    ? this.props.aggregations['about.location.address.addressRegion'].buckets[0].doc_count
                    : '')
                  : (this.props.aggregations['about.location.address.addressCountry'].buckets[0]
                    ? this.props.aggregations['about.location.address.addressCountry'].buckets[0].doc_count
                    : ''
                  )}
              </span>
            </div>

            <div className="stepsContainer">
              {this.state.colors.map(color => (
                <div key={color} style={{backgroundColor: color}} className="step" />
              ))}
            </div>
          </div>
        }

        {this.props.aggregations['about.location.address.addressRegion'] &&
          <div className='goToMap'>
            <Link href='/resource/'>
              <i className='fa fa-globe' />
            </Link>
          </div>
        }

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
}

Map.defaultProps = {
  iso3166: null,
  map: null,
}

export default withEmitter(translate(Map))
