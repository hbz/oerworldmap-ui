// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/prop-types */
/* global window */
import React, { Component, memo } from 'react'
import PropTypes from 'prop-types'

// import mapboxgl from 'mapbox-gl'
// import mapboxgl from 'mapbox-gl/dist/mapbox-gl'

const pointsLayers = ['points', 'points-hover', 'points-select']

class MapSimple extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lng: 5,
      lat: 34,
      zoom: 2,
    }
    this.updatePoints = this.updatePoints.bind(this)
  }

  componentDidMount() {
    const mapboxgl = require('mapbox-gl')
    const { mapboxConfig } = this.props
    const { lng, lat, zoom } = this.state

    mapboxgl.accessToken = mapboxConfig.token

    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: `mapbox://styles/${mapboxConfig.style}`,
      center: [lng, lat],
      zoom,
    })

    this.map.once('load', () => {
      console.log('%c Load Map', 'background: green; color: white; display: block;')

      this.initialRadius = window.innerWidth <= 700 ? 10 : 5

      this.map.addSource('pointsSource', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [],
        },
      })

      const allLayers = this.map.getStyle().layers
      pointsLayers.forEach((layer) => {
        const pointsLayer = allLayers.find(l => l.id === layer)
        delete pointsLayer['source-layer']
        this.map.removeLayer(layer)
        pointsLayer.source = 'pointsSource'
        pointsLayer.paint['circle-opacity'] = 1
        pointsLayer.paint['circle-stroke-opacity'] = 1
        pointsLayer.paint['circle-radius'] = this.initialRadius

        this.map.addLayer(pointsLayer)
        this.map.setLayoutProperty(layer, 'visibility', 'visible')
      })

      // eslint-disable-next-line react/destructuring-assignment
      this.updatePoints(this.props.data)
    })
  }

  componentWillReceiveProps(nextProps) {
    console.log('Should update')
    this.updatePoints(nextProps.data)
  }

  updatePoints(data) {
    console.log('updatePoints', data.length)

    const pointsCollection = {
      type: 'FeatureCollection',
      features: data,
    }

    const source = this.map.getSource('pointsSource')

    if (source) {
      source.setData(pointsCollection)
    }
  }

  render() {
    console.log('Render map')
    return (
      <div>
        <div
          style={
            {
              position: 'absolute',
              width: '101%',
              height: '100%',
              top: 0,
              left: 0,
            }}
          ref={el => this.mapContainer = el}
          className="mapContainer"
        />
      </div>
    )
  }
}

MapSimple.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default memo(MapSimple)
