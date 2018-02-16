import React from 'react'
import PropTypes from 'prop-types'

import withEmitter from './withEmitter'

import 'mapbox-gl/dist/mapbox-gl.css'

class MiniMap extends React.Component {

  constructor(props) {
    super(props)

    this.mouseDown = this.mouseDown.bind(this)
    this.onMove = this.onMove.bind(this)
    this.onUp = this.onUp.bind(this)
    this.mouseEnter = this.mouseEnter.bind(this)
    this.mouseLeave = this.mouseLeave.bind(this)
    this.updateMap = this.updateMap.bind(this)
  }

  componentDidMount() {
    const mapboxgl = require('mapbox-gl')
    mapboxgl.accessToken = this.props.mapboxConfig.token

    this.MiniMap = new mapboxgl.Map({
      container: this.MiniMapContainer,
      style: `mapbox://styles/${this.props.mapboxConfig.miniMapStyle}`,
      center: this.props.center,
      zoom: this.props.zoom
    })

    this.canvas = this.MiniMap.getCanvasContainer()
    this.isDragging = false
    this.isCursorOverPoint = false

    this.MiniMap.on('load', () => {
      this.MiniMap.addSource('points', {
        "type": "geojson",
        "data": this.props.features
      })

      this.MiniMap.addLayer({
        "id": "points",
        "type": "circle",
        "source": "points",
        "paint": {
          "circle-radius": 7,
          "circle-color": "#FF882F",
          "circle-stroke-width": 1,
          "circle-stroke-color": "white"
        }
      })

      this.props.emitter.on('setPlace', location =>
        this.MiniMap.getSource('points').setData({
          type: 'Point',
          coordinates: [location.geo.lon, location.geo.lat]
        })
      )
      this.updateMap()
    })
  }

  componentDidUpdate() {
    this.updateMap()
  }

  onMove(e) {
    if (!this.isDragging) return
    const coords = e.lngLat

    this.canvas.style.cursor = 'grabbing'

    if (this.selected) {

      const data = JSON.parse(JSON.stringify(this.MiniMap.getSource('points')._data))

      if (data.type === 'FeatureCollection') {
        data.features = data.features.map(feature => {
          if (feature.properties['@id'] === this.selected.properties['@id']) {
            feature = feature.geometry.coordinates = [coords.lng, coords.lat]
          }
          return feature
        })
      } else if (data.type === 'Point') {
        data.coordinates = [coords.lng, coords.lat]
      }

      this.MiniMap.getSource('points').setData(data)
    }

  }

  onUp(e) {
    this.selected = null
    if (!this.isDragging) return
    const coords = e.lngLat

    this.canvas.style.cursor = ''
    this.isDragging = false

    this.MiniMap.off('mousemove', this.onMove)

    const region = this.MiniMap.queryRenderedFeatures(e.point, { layers: ['Regions'] }).pop()

    const feature = {
      "type": "Feature",
      "geometry": {
        "coordinates": coords
      },
      "properties": {}
    }

    if (region) {
      feature.properties.region =  region.properties
    }
    if (this.props.onFeatureDrag) {
      this.props.onFeatureDrag(feature)
    }
  }

  mouseDown(e) {
    if (!this.isCursorOverPoint) return

    this.selected = this.MiniMap.queryRenderedFeatures(e.point, {layers: ['points']}).pop()

    this.isDragging = true
    this.canvas.style.cursor = 'grab'

    this.MiniMap.on('mousemove', this.onMove)
    this.MiniMap.once('mouseup', this.onUp)
  }

  mouseEnter() {
    this.MiniMap.setPaintProperty('points', 'circle-color', '#3bb2d0')
    this.canvas.style.cursor = 'move'
    this.isCursorOverPoint = true
    this.MiniMap.dragPan.disable()
  }

  mouseLeave() {
    this.MiniMap.setPaintProperty('points', 'circle-color', '#3887be')
    this.canvas.style.cursor = ''
    this.isCursorOverPoint = false
    this.MiniMap.dragPan.enable()
  }

  updateMap() {
    this.MiniMap.getSource('points').setData(this.props.features)
    if (this.props.draggable) {
      this.MiniMap.on('mouseenter', 'points', this.mouseEnter)
      this.MiniMap.on('mouseleave', 'points', this.mouseLeave)
      this.MiniMap.on('mousedown', this.mouseDown)
    } else {
      this.MiniMap.off('mouseenter', 'points', this.mouseEnter)
      this.MiniMap.off('mouseleave', 'points', this.mouseLeave)
      this.MiniMap.off('mousedown', this.mouseDown)
    }
  }

  render() {
    return (
      <div
        ref={(map) => { this.MiniMapContainer = map }}
        id='MiniMap'
        style={
          {position:'absolute',
            width:'100%',
            height: '100%',
            top:0,
            left: 0}
        }
      />
    )
  }
}

MiniMap.propTypes = {
  mapboxConfig: PropTypes.shape(
    {
      token: PropTypes.string,
      style: PropTypes.string,
      miniMapStyle: PropTypes.string,
    }
  ).isRequired,
  center: PropTypes.arrayOf(PropTypes.any),
  zoom: PropTypes.number,
  features: PropTypes.objectOf(PropTypes.any),
  draggable: PropTypes.bool,
  onFeatureDrag: PropTypes.func
}

MiniMap.defaultProps = {
  center: [0, 0],
  zoom: 2,
  features: null,
  draggable: false,
  onFeatureDrag: null,
}

export default withEmitter(MiniMap)
