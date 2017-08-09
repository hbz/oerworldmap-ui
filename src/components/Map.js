import React from 'react'
import PropTypes from 'prop-types'

import 'mapbox-gl/dist/mapbox-gl.css'

import aggregation from '../../test/resources/aggregation.json'
import resource from '../../test/resources/resourceTest.json'

class Map extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {

    const mapboxgl = require('mapbox-gl')
    mapboxgl.accessToken = this.props.mapboxConfig.token

    const map = new mapboxgl.Map({
      container: 'Map',
      style: `mapbox://styles/${this.props.mapboxConfig.style}`,
      center: [-100.486052, 37.830348],
      zoom: 2
    })

    // Receive event from ItemList
    this.props.emitter.on('hoverPoint', (e) => {
      map.setFilter('points-hover', [ 'in', '@id' ].concat(e.id))
    })

    map.on('load', function () {

      // The buckets holding the data for the choropleth layers
      const buckets = aggregation["about.location.address.addressCountry"].buckets

      // Dynamically get layers to be used for choropleth country overlays
      // and divide aggregation data into corresponding groups
      const choroplethLayersCount = map.getStyle().layers
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
        map.setFilter('choropleth-'+(i+1), [ 'in', 'iso_a2' ].concat(group))
      })

      // Hack to use Mapbox studio styles with local data (source)
      map.addSource('pointsSource', {
        type: 'geojson',
        data:resource
      })
      const pointsLayers = ['points', 'points-hover', 'points-select']
      pointsLayers.forEach(layer => {
        const pointsLayer = map.getStyle().layers.find(l => { return l.id === layer})
        delete pointsLayer['source-layer']
        map.removeLayer(layer)
        pointsLayer.source = 'pointsSource'
        pointsLayer.paint['circle-opacity'] = 1
        pointsLayer.paint['circle-stroke-opacity'] = 1
        map.addLayer(pointsLayer)
      })

      map.on("mousemove", function(e) {
        const hoveredCountry = map.queryRenderedFeatures(e.point, { layers: ['countries'] })
        const hoveredPoints = map.queryRenderedFeatures(e.point, { layers: ['points'] })
        const hoveredFeatures = hoveredPoints.length ? hoveredPoints : hoveredCountry
        this.setState({
          hoveredFeatures,
          point: e.point
        })
      }.bind(this))

      // When the user moves their mouse over the points layer, we'll update the filter in
      // the points hover layer to only show the matching point, thus making a hover effect.
      map.on("mousemove", "points", function(e) {
        const ids = e.features.map(function (feat) { return feat.properties['@id'] })
        map.setFilter('points-hover', [ 'in', '@id' ].concat(ids))
        map.getCanvas().style.cursor = 'pointer'
      })

      // Reset the point hover layer's filter when the mouse leaves the layer.
      map.on("mouseleave", "points", function() {
        map.setFilter('points-hover', ['==', "display", "hidden"])
        map.getCanvas().style.cursor = ''
      })

      // When the user moves their mouse over the countries layer, we'll update the filter in
      // the countries hover layer to only show the matching country, thus making a hover effect.
      map.on("mousemove", "countries", function(e) {
        const ids = e.features.map(function (feat) { return feat.properties.iso_a2 })
        map.setFilter('countries-hover', [ 'in', 'iso_a2' ].concat(ids))
        map.getCanvas().style.cursor = 'pointer'
      })

      // Reset the countries hover layer's filter when the mouse leaves the layer.
      map.on("mouseleave", "countries", function() {
        map.setFilter('countries-hover', ['!has', "iso_a2"])
        map.getCanvas().style.cursor = ''
      })

      // Add map mapbox controls
      const nav = new mapboxgl.NavigationControl()
      map.addControl(nav, 'bottom-left')

      map.addControl(new mapboxgl.FullscreenControl())

      map.on('drag', (e) => {
        this.setState({
          point: { x: e.originalEvent.x, y: e.originalEvent.y -35}
        })
      })

    }.bind( this ))

  }

  render() {
    return (
      <div
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
                backgroundColor: 'white',
                zIndex: 9,
                pointerEvents:'none',
                overflow: 'hidden'
              }}
          >
            {this.state.hoveredFeatures.map(feature => {
              return <pre key={feature.properties.iso_a2 || feature.properties['@id']}>{JSON.stringify(feature.properties.iso_a2 || feature.properties['@id'], null, 2)}</pre>
            })}
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
  emitter: PropTypes.objectOf(PropTypes.any).isRequired
}

export default Map
