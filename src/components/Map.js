import React from 'react'
import PropTypes from 'prop-types'
import { renderToStaticMarkup } from 'react-dom/server'

import 'mapbox-gl/dist/mapbox-gl.css'

import Icon from './Icon'
import Link from './Link'
import translate from './translate'
import withEmitter from './withEmitter'

import '../styles/Map.pcss'

class Map extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
    this.updatePoints = this.updatePoints.bind(this)
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
      
      this.Map.addEventListener('mouseleave', ()=> {
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
      this.updateChoropleth(this.props.features)

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
      })

      // When the user moves their mouse over the points layer, we'll update the filter in
      // the points hover layer to only show the matching point, thus making a hover effect.
      this.map.on("mousemove", "points", (e) => {
        const ids = e.features.map(function (feat) { return feat.properties['@id'] })
        this.map.setFilter('points-hover', [ 'in', '@id' ].concat(ids))
        this.map.getCanvas().style.cursor = 'pointer'
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
                <Icon type={feature.properties['@type']} /> <Link to={feature.properties['@id']}><b>{feature.properties['@type']}:</b> {this.props.translate(JSON.parse(feature.properties.name))}</Link>
              </li>
            )
          })

          // Show overlay
          this.popup = new mapboxgl.Popup({closeButton:false})
            .setLngLat(e.features[0].geometry.coordinates)
            .setHTML(renderToStaticMarkup(<div className="tooltip"><ul>{list}</ul></div>))
            .addTo(this.map)

          this.setState({
            overlayList:true,
            hoveredFeatures:null
          })
        }
        
        else {
          this.map.setFilter('points-select', [ 'in', '@id' ].concat(e.features[0].properties['@id']))          
          // Click on a single resource          
          const url = `/resource/${e.features[0].properties['@id']}`
          this.props.emitter.emit('load', url)
        }
      }.bind(this))

      // Receive event from ItemList
      this.props.emitter.on('hoverPoint', (e) => {
        this.map.setFilter('points-hover', [ 'in', '@id' ].concat(e.id))
      })

      // Add mapbox controls
      const nav = new mapboxgl.NavigationControl()
      this.map.addControl(nav, 'bottom-left')

    })

  }

  componentWillReceiveProps(nextProps) {
    this.updateChoropleth(nextProps.features)
    this.updatePoints(nextProps.features)
  }

  
  getBucket(country) {
    return this.props.features.aggregations["about.location.address.addressCountry"].buckets.find(e => {
      return e.key === country
    })
  }
  
  updateChoropleth(features) {

    // The buckets holding the data for the choropleth layers
    const buckets = features.aggregations
      ? features.aggregations["about.location.address.addressCountry"].buckets
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
      return <span key={type.key}>{type.doc_count} <Icon type={type.key} /> </span>
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
        {this.state.hoveredFeatures &&
          <div
            className="tooltip"
            style={
              { left: this.state.point.x + 5,
                top: this.state.point.y + 5,
                position: 'absolute',
                zIndex: 9,
                pointerEvents:'none',
              }}
          >
            {this.state.hoveredFeatures[0] && this.state.hoveredFeatures[0].layer.id  === 'countries' ? (
              <ul>
                {/* ADD TRANSLATION FOR COUNTRY AND SERVICE */}
                <li><b>{this.state.hoveredFeatures[0].properties.iso_a2} {this.state.bucket && this.renderTypes(this.state.bucket.by_type.buckets)}</b></li>
                <li className="darker">Country Champion: <i className={`fa fa-${this.state.bucket && this.state.bucket.champions.doc_count > 0 ? 'check' : 'times'}`} /></li>
              </ul>
            ) : (
              <ul>
                {this.state.hoveredFeatures.length <= 6 ? (
                  this.state.hoveredFeatures.map(feature => (
                    <li key={feature.properties['@id']}>
                      <Icon type={feature.properties['@type']} /> <b>{feature.properties['@type']}:</b> {this.props.translate(JSON.parse(feature.properties.name))}
                    </li>
                  ))
                ) : (
                  <li>
                    {this.calculateTypes(this.state.hoveredFeatures)}   
                  </li>
                )}
              </ul>
            )}
          </div>
        }

        {this.state.overlayList &&
          <div
            role="button"
            tabIndex="0"
            onClick={() => {
              this.popup.remove()
              this.setState({overlayList:false})}}
            className="overlayList"
          />
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
  features: PropTypes.objectOf(PropTypes.any).isRequired,
  translate: PropTypes.func.isRequired
}

export default withEmitter(translate(Map))
