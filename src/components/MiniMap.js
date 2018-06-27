/* global window */
/* global Event */
import React from 'react'
import PropTypes from 'prop-types'
import turf from 'turf'

import 'mapbox-gl/dist/mapbox-gl.css'
import centroids from '../json/centroids.json'

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
    const mapboxgl = require('mapbox-gl')
    mapboxgl.accessToken = this.props.mapboxConfig.token

    this.MiniMap = new mapboxgl.Map({
      container: this.MiniMapContainer,
      center: [0, 0],
      zoom: 1,
      boxZoom: this.props.boxZoom,
      style: `mapbox://styles/${this.props.mapboxConfig.miniMapStyle}`
    })

    this.canvas = this.MiniMap.getCanvasContainer()
    this.isDragging = false

    this.MiniMap.on('load', () => {

      this.MiniMap.dragRotate.disable()
      this.MiniMap.touchZoomRotate.disableRotation()

      if (this.props.draggable) {
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
        "data": this.props.features
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

  mouseUp(e) {
    this.selected = null
    if (!this.isDragging) return
    const coords = e.lngLat

    this.canvas.style.cursor = ''
    this.isDragging = false
    this.MiniMap.dragPan.enable()

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

    const { features, draggable, zoomable, center, zoom, country } = props

    if (features && this.MiniMap.getSource('points')) {
      this.MiniMap.getSource('points').setData(features)
    } else {
      this.MiniMap.getSource('points').setData({
        "type": "FeatureCollection",
        "features": []
      })
    }

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
    if (center && zoom) {
      setTimeout(() => {
        this.MiniMap.fitBounds(turf.bbox(
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": center
            }
          }
        ), {
          padding: 20,
          maxZoom: zoom
        })
      }, 0)
    } else if (features
      && features.features
      && features.features.length) {
      setTimeout(() => {
        this.MiniMap.fitBounds(turf.bbox(features), {
          padding: 20,
          maxZoom: 3
        })
      }, 0)
    } else if (country) {
      setTimeout(() => {
        this.MiniMap.fitBounds(turf.bbox(
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": centroids[country]
            }
          }
        ), {
          padding: 20,
          maxZoom: 3
        })
      }, 0)
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
  center: PropTypes.arrayOf(PropTypes.any), // eslint-disable-line react/no-unused-prop-types
  zoom: PropTypes.number, // eslint-disable-line react/no-unused-prop-types
  features: PropTypes.objectOf(PropTypes.any),
  draggable: PropTypes.bool,
  zoomable: PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
  onFeatureDrag: PropTypes.func,
  country: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
  boxZoom: PropTypes.bool
}

MiniMap.defaultProps = {
  center: undefined,
  zoom: undefined,
  features: {
    "type": "FeatureCollection",
    "features": []
  },
  draggable: false,
  zoomable: false,
  onFeatureDrag: null,
  country: undefined,
  boxZoom: false
}

export default MiniMap
