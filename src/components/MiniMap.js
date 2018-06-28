/* global window */
/* global Event */
import React from 'react'
import PropTypes from 'prop-types'
import { bbox } from '@turf/turf'
import { getCoord } from '@turf/invariant'
import { center as turfCenter } from '@turf/center'
import { point } from '@turf/helpers'

import 'mapbox-gl/dist/mapbox-gl.css'

class MiniMap extends React.Component {

  constructor(props) {
    super(props)

    this.mouseDown = this.mouseDown.bind(this)
    this.mouseMove = this.mouseMove.bind(this)
    this.mouseUp = this.mouseUp.bind(this)
    this.mouseEnter = this.mouseEnter.bind(this)
    this.mouseLeave = this.mouseLeave.bind(this)
    this.updateMap = this.updateMap.bind(this)
  }

  componentDidMount() {

    const { geometry, mapboxConfig, boxZoom, draggable, center } = this.props
    const mapboxgl = require('mapbox-gl')

    mapboxgl.accessToken = mapboxConfig.token

    this.MiniMap = new mapboxgl.Map({
      container: this.MiniMapContainer,
      center: center || (geometry
          && geometry.features
          && geometry.features.length
          && getCoord(turfCenter(geometry))) || [0,0],
      zoom: 1,
      boxZoom,
      style: `mapbox://styles/${mapboxConfig.miniMapStyle}`,
      dragRotate: false,
      touchZoomRotate: false
    })

    this.canvas = this.MiniMap.getCanvasContainer()
    this.isDragging = false

    this.MiniMap.on('load', () => {

      if (draggable) {
        const nav = new mapboxgl.NavigationControl({showCompass:false})
        this.MiniMap.addControl(nav, 'bottom-left')
      }

      this.MiniMapContainer.addEventListener('mouseleave', () => {
        this.selected = null
        this.canvas.style.cursor = ''
        this.isDragging = false
        this.MiniMap.dragPan.enable()
      })

      this.MiniMap.addSource('points', {
        "type": "geojson",
        "data": geometry
      })

      this.MiniMap.addLayer({
        "id": "points",
        "type": "circle",
        "source": "points",
        "paint": {
          "circle-radius": 7,
          "circle-color": "#f93",
          "circle-stroke-width": 1,
          "circle-stroke-color": "white"
        }
      })
      this.updateMap(this.props)
      window.dispatchEvent(new Event('resize'))
    })
  }

  componentWillReceiveProps(nextProps) {
    this.updateMap(nextProps)
  }

  shouldComponentUpdate() {
    return false
  }

  mouseMove(e) {
    if (!this.isDragging) return
    const coords = e.lngLat

    this.canvas.style.cursor = 'grabbing'

    if (this.selected) {
      const data = JSON.parse(JSON.stringify(this.MiniMap.getSource('points')._data))
      if (data.type === 'Point') {
        data.coordinates = [coords.lng, coords.lat]
      }
      this.MiniMap.getSource('points').setData(data)
    }
  }

  mouseUp(e) {
    this.selected = null
    if (!this.isDragging) {
      return
    }

    this.canvas.style.cursor = ''
    this.isDragging = false
    this.MiniMap.dragPan.enable()

    this.props.onFeatureDrag && this.props.onFeatureDrag({
      type: 'Point',
      coordinates: e.lngLat
    })
  }

  mouseDown(e) {
    this.selected = this.MiniMap.queryRenderedFeatures(e.point, {layers: ['points']}).pop()
    this.isDragging = true
    this.MiniMap.dragPan.disable()
    this.canvas.style.cursor = 'grab'
  }

  mouseEnter() {
    this.MiniMap.setPaintProperty('points', 'circle-color', '#3bb2d0')
    this.canvas.style.cursor = 'move'
    this.MiniMap.dragPan.disable()
  }

  mouseLeave() {
    this.MiniMap.setPaintProperty('points', 'circle-color', '#3887be')
    this.canvas.style.cursor = ''
    this.MiniMap.dragPan.enable()
  }

  updateMap(props) {

    const { geometry, draggable, zoomable, center } = props

    this.MiniMap.getSource('points').setData(geometry)

    if (center || (geometry && geometry.type !== 'FeatureCollection')) {
      setTimeout(() => {
        this.MiniMap.fitBounds((center && bbox(point(center))) || bbox(geometry), {
          padding: 20,
          maxZoom: 3
        })
      }, 0)
    } else {
      setTimeout(() => {
        this.MiniMap.flyTo({
          center: [0, 0],
          zoom: 1,
        })
      }, 0)
    }

    this.MiniMap.getSource('points').setData(geometry)

    this.MiniMap.off('mouseenter', 'points', this.mouseEnter)
    this.MiniMap.off('mouseleave', 'points', this.mouseLeave)
    this.MiniMap.off('mousedown', 'points', this.mouseDown)
    this.MiniMap.off('mousemove', this.mouseMove)
    this.MiniMap.off('mouseup', this.mouseUp)

    if (draggable) {
      this.MiniMap.on('mouseenter', 'points', this.mouseEnter)
      this.MiniMap.on('mouseleave', 'points', this.mouseLeave)
      this.MiniMap.on('mousedown', 'points', this.mouseDown)
      this.MiniMap.on('mousemove', this.mouseMove)
      this.MiniMap.on('mouseup', this.mouseUp)
    }

    if (zoomable) {
      this.MiniMap.scrollZoom.enable()
      this.MiniMap.doubleClickZoom.enable()
    } else {
      this.MiniMap.scrollZoom.disable()
      this.MiniMap.doubleClickZoom.disable()
    }
    setTimeout(() => {
      this.MiniMap.resize()
    }, 0)
  }

  render() {
    return (
      <div
        ref={(map) => { this.MiniMapContainer = map }}
        className='MiniMap'
        style={
          {position: 'absolute',
            width: '100%',
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
  center: PropTypes.arrayOf(PropTypes.any), // eslint-disable-line react/no-unused-prop-types
  geometry: PropTypes.objectOf(PropTypes.any),
  draggable: PropTypes.bool,
  zoomable: PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
  onFeatureDrag: PropTypes.func,
  boxZoom: PropTypes.bool
}

MiniMap.defaultProps = {
  center: undefined,
  geometry: {
    "type": "FeatureCollection",
    "features": []
  },
  draggable: false,
  zoomable: false,
  onFeatureDrag: null,
  boxZoom: false
}

export default MiniMap
