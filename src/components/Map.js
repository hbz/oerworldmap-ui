/* global document */

import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

import 'mapbox-gl/dist/mapbox-gl.css'

import Icon from './Icon'
import Link from './Link'
import translate from './translate'
import withEmitter from './withEmitter'
import EmittProvider from './EmittProvider'

import '../styles/Map.pcss'

class Map extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
    this.updatePoints = this.updatePoints.bind(this)
    this.updateZoom = this.updateZoom.bind(this)
    this.updateActiveCountry = this.updateActiveCountry.bind(this)
  }

  componentDidMount() {

    const mapboxgl = require('mapbox-gl')
    mapboxgl.accessToken = this.props.mapboxConfig.token

    this.map = new mapboxgl.Map({
      container: 'Map',
      style: `mapbox://styles/${this.props.mapboxConfig.style}`,
      center: [-100.486052, 37.830348],
      zoom: 2
    })

    this.map.on('load', () => {

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

      // Get features currently under the mouse
      this.map.on("mousemove", (e) => {
        const hoveredCountry = this.map.queryRenderedFeatures(e.point, { layers: ['countries'] })

        if (hoveredCountry
          && hoveredCountry[0]
          && (!this.state.bucket || this.state.bucket && this.state.bucket.key !== hoveredCountry[0].properties.iso_a)) {
          const bucket = this.getBucket(hoveredCountry[0].properties.iso_a2)
          this.setState({bucket})
        }

        const hoveredPoints = this.map.queryRenderedFeatures(e.point, { layers: ['points'] })
        const hoveredFeatures = hoveredPoints.length ? hoveredPoints : hoveredCountry
        this.setState({
          hoveredFeatures,
          point: e.point
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
        if (ids.length > 6) {
          this.map.getCanvas().style.cursor = 'zoom-in'
        } else if (ids.length > 2) {
          this.map.getCanvas().style.cursor = 'context-menu'
        } else {
          this.map.getCanvas().style.cursor = 'pointer'
        }
      })

      // Reset the point hover layer's filter when the mouse leaves the layer.
      this.map.on("mouseleave", "points", () => {
        this.map.setFilter('points-hover', ['==', "display", "hidden"])
        this.map.getCanvas().style.cursor = ''
      })

      // When the user moves their mouse over the countries layer, we'll update the filter in
      // the countries hover layer to only show the matching country, thus making a hover effect.
      this.map.on("mousemove", "countries", (e) => {
        const ids = e.features.map(function (feat) { return feat.properties.iso_a2 })
        this.map.setFilter('countries-hover', [ 'in', 'iso_a2' ].concat(ids))
        this.map.getCanvas().style.cursor = 'pointer'
      })

      // Reset the countries hover layer's filter when the mouse leaves the layer.
      this.map.on("mouseleave", "countries", () => {
        this.map.setFilter('countries-hover', ['!has', "iso_a2"])
        this.map.getCanvas().style.cursor = ''
      })

      // Update popup position when dragging map
      this.map.on('drag', (e) => {
        this.setState({
          point: { x: e.originalEvent.x, y: e.originalEvent.y -35}
        })
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
                &nbsp;<Link to={feature.properties['@id']}>
                  <b>{feature.properties['@type']}:</b>
                  &nbsp;{this.props.translate(JSON.parse(feature.properties.name))}</Link>
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

        else {
          this.map.setFilter('points-select', [ 'in', '@id' ].concat(e.features[0].properties['@id']))
          // Click on a single resource
          const url = `/resource/${e.features[0].properties['@id']}`
          this.props.emitter.emit('navigate', url)
        }
      }.bind(this))

      this.map.on('click', 'countries', function (e) {
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
      const coutryFeatures = this.map.queryRenderedFeatures({
        layers:['countries'],
        filter: ['in', 'iso_a2', iso3166]
      })

      if (coutryFeatures.length) {
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

    // Reduce to max doc_count value
    const max = buckets.reduce(function(acc, val) {
      return acc < val.doc_count ? val.doc_count : acc
    }, 0)

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

    if (aggregations["about.location.address.addressRegion"]) {

      const regionBuckets = aggregations
        ? aggregations["about.location.address.addressRegion"].buckets
        : []

      const stops = []
      const colors = []

      // Get mapbox colors for choropleth
      choroplethLayerGroups.forEach((group, i) => {
        colors.push(this.map.getPaintProperty(`choropleth-${i+1}`, 'fill-color'))
      })

      const regionMax = regionBuckets.reduce(function(acc, val) {
        return acc < val.doc_count ? val.doc_count : acc
      }, 0)

      const regionSteps = Math.ceil(regionMax / choroplethLayersCount / 10) * 10

      regionBuckets.forEach(function(bucket) {
        stops.push([bucket['key'], colors[Math.floor(bucket.doc_count / regionSteps)]])
      })

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
            width:'100%',
            height: '100%',
            top:0,
            left: 0}}
      >
        {this.state.overlayList &&
          <div className="overlayList" />
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
  translate: PropTypes.func.isRequired
}

Map.defaultProps = {
  iso3166: null,
}

export default withEmitter(translate(Map))
