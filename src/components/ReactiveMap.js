/* global document */
/* global window */
/* global navigator */
/* global requestAnimationFrame */
/* global cancelAnimationFrame */

import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

import { scaleLog, quantile, interpolateHcl } from 'd3'

import 'mapbox-gl/dist/mapbox-gl.css'
import centroids from '../json/centroids.json'

import Icon from './Icon'
import Link from './Link'
import withI18n from './withI18n'
import withEmitter from './withEmitter'
import withConfig from './withConfig'
import EmittProvider from './EmittProvider'
import bounds from '../json/bounds.json'
import ResourcePreview from './ResourcePreview'
import I18nProvider from './I18nProvider'
import i18n from '../i18n'
import MapLeyend from './MapLeyend'

import '../styles/components/ReactiveMap.pcss'

const timeout = async ms => new Promise(resolve => setTimeout(resolve, ms))

let resizeTimer
const pointsLayers = ['points', 'points-hover', 'points-select']

const calculateTypes = (features) => {
  const types = []
  features.forEach((feature) => {
    if (types[feature.properties['@type']]) {
      types[feature.properties['@type']] += 1
    } else {
      types[feature.properties['@type']] = 1
    }
  })
  return Object.keys(types).map(key => (
    <span className="item" key={key}>
      <Icon type={key} />
      &nbsp;
      {types[key]}
    </span>
  ))
}

const renderTypes = types => (
  types.map(type => (
    <div key={type.key}>
      <Icon type={type.key} />
      <span>{type.doc_count}</span>
    </div>
  ))
)


class Map extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      aggregations: {},
    }


    this.updatePoints = this.updatePoints.bind(this)
    this.updateLiveEventsPoints = this.updateLiveEventsPoints.bind(this)
    this.updateZoom = this.updateZoom.bind(this)
    this.updateActiveCountry = this.updateActiveCountry.bind(this)
    this.mouseMovePoints = this.mouseMovePoints.bind(this)
    this.mouseMove = this.mouseMove.bind(this)
    // this.moveEnd = this.moveEnd.bind(this)
    this.mouseLeave = this.mouseLeave.bind(this)
    this.clickPoints = this.clickPoints.bind(this)
    this.clickCountries = this.clickCountries.bind(this)
    this.clickRegions = this.clickRegions.bind(this)
    this.choroplethStopsFromBuckets = this.choroplethStopsFromBuckets.bind(this)
    this.zoom = this.zoom.bind(this)
    this.setPinSize = this.setPinSize.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.animateCircleLayer = this.animateCircleLayer.bind(this)
    this.animateMarker = this.animateMarker.bind(this)
    this.setMapData = this.setMapData.bind(this)
    this.setLiveEventsData = this.setLiveEventsData.bind(this)
    this.resize = this.resize.bind(this)
    this.isReady = false
    this.data = {}

    props.emitter.on('resize', this.resize)

    this.layersOrder = [
      {
        name: 'Events',
        handler: this.clickPoints,
      },
      {
        name: 'points',
        handler: this.clickPoints,
      },
      {
        name: 'regions',
        handler: this.clickRegions,
      },
      {
        name: 'regions-inactive',
        handler: this.clickRegions,
      },
      {
        name: 'countries',
        handler: this.clickCountries,
      },
    ]
  }

  componentDidMount() {
    const {
      config: { mapboxConfig }, map, locales, iso3166, emitter, region,
    } = this.props

    emitter.on('mapData', this.setMapData)
    emitter.on('liveEventsData', this.setLiveEventsData)

    const bounds = [[Number.NEGATIVE_INFINITY, -60], [Number.POSITIVE_INFINITY, 84]]
    const {
      LngLatBounds, Map, NavigationControl, FullscreenControl, Popup,
    } = require('mapbox-gl')
    this.mapboxTools = { LngLatBounds, Popup }

    const mapParameters = map
      && map.split(',')

    const center = {}
    if (mapParameters) {
      center.lng = (mapParameters[0] && !Number.isNaN(mapParameters[0])) ? mapParameters[0] : null
      center.lat = (mapParameters[1] && !Number.isNaN(mapParameters[1])) ? mapParameters[1] : null
      center.zoom = (mapParameters[2] && !Number.isNaN(mapParameters[2])) ? mapParameters[2] : null
    }

    this.map = new Map({
      container: 'Map',
      style: `mapbox://styles/${mapboxConfig.style}`,
      center: (center.lng && center.lat) ? [center.lng, center.lat] : [0, 42],
      zoom: center.zoom || 1,
      maxBounds: bounds,
      accessToken: mapboxConfig.token,
      preserveDrawingBuffer: navigator.userAgent.toLowerCase().indexOf('firefox') > -1,
    })

    this.map.once('load', async () => {
      // Set circle layers properties
      this.initialRadius = window.innerWidth <= 700 ? 10 : 5
      this.radius = this.initialRadius
      this.framesPerSecond = 15
      this.initialOpacity = 0.9
      this.opacity = this.initialOpacity
      this.maxRadius = this.initialRadius * 20
      this.animatingMarkers = null
      this.start = null

      this.map.dragRotate.disable()
      this.map.touchZoomRotate.disableRotation()

      this.map.on('zoom', this.zoom)

      this.map.setLayoutProperty('country-label', 'text-field', `{name_${locales[0]}}`)
      this.map.setLayoutProperty('road-label-simple', 'text-field', `{name_${locales[0]}}`)
      this.map.setLayoutProperty('settlement-minor-label', 'text-field', `{name_${locales[0]}}`)
      this.map.setLayoutProperty('settlement-major-label', 'text-field', `{name_${locales[0]}}`)
      //this.map.setLayoutProperty('place-labels', 'text-field', `{name_${locales[0]}}`)

      this.Map.addEventListener('mouseleave', () => {
        this.hoverPopup.remove()
      })

      // Set data sources as empty for points layers
      this.map.addSource('pointsSource', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [],
        },
      })

      this.map.addSource('eventsSource', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [],
        },
      })

      // Hack to use Mapbox studio styles with local data (source)
      const allLayers = this.map.getStyle().layers
      pointsLayers.forEach((layer) => {
        let pointsLayer = allLayers.find(l => l.id === layer)
        if (pointsLayer) {
          delete pointsLayer['source-layer']
          this.map.removeLayer(layer)
        }

        this.map.addLayer({
          id: layer,
          source: 'pointsSource',
          type: 'circle',
          paint: {
            'circle-opacity': 1,
            'circle-stroke-opacity': 1,
            'circle-radius': this.initialRadius,
          },
        })
        this.map.setLayoutProperty(layer, 'visibility', 'visible')
      })

      this.map.addLayer({
        id: 'EventsGlow',
        source: 'eventsSource',
        type: 'circle',
        paint: {
          'circle-radius': this.initialRadius,
          'circle-radius-transition': { duration: 0 },
          'circle-opacity-transition': { duration: 0 },
          'circle-color': '#f93',
        },
      })

      this.map.addLayer({
        id: 'Events',
        source: 'eventsSource',
        type: 'circle',
        paint: {
          'circle-radius': this.initialRadius,
          'circle-stroke-color': 'hsl(0, 0%, 100%)',
          'circle-stroke-width': 1,
          'circle-color': '#f93',
        },
      })

      const Admin0Layer = this.map.getStyle().layers.find(l => l.id === 'admin-0-boundary')
      const CountriesLayer = Admin0Layer
      const CountriesInactiveLayer = Admin0Layer
      CountriesLayer.id = 'countries'
      CountriesInactiveLayer.id = 'countries-inactive'
      CountriesLayer.paint = Admin0Layer.paint
      //CountriesLayer.paint['fill-color'] = 'hsl(205, 80%, 90%)'
      CountriesInactiveLayer.paint = Admin0Layer.paint
      //CountriesInactiveLayer.paint['fill-color'] = 'hsl(205, 80%, 90%)'
      if (!this.map.getStyle().layers.find(l => l.id === 'countries-inactive')) {
        // TODO: Can this be changed to a fill layer?
        this.map.addLayer(CountriesInactiveLayer, 'admin-0-boundary')
        //this.map.setPaintProperty('countries-inactive', 'fill-color', 'hsl(205, 80%, 90%)')
        //this.map.addLayer(CountriesLayer)
      }

      // Clone Regions layer and set the style of countries-inactive
      const Admin1Layer = this.map.getStyle().layers.find(l => l.id === 'admin-1-boundary')
      //RegionsLayer.paint['fill-color'] = 'hsl(205, 80%, 90%)'
      //RegionsInactiveLayer.paint['fill-color'] = 'hsl(205, 80%, 90%)'
      if (!this.map.getStyle().layers.find(l => l.id === 'regions')) {
        const RegionsLayer = Admin1Layer
        RegionsLayer.id = 'regions'
        this.map.addLayer(RegionsLayer)
      }
      if (!this.map.getStyle().layers.find(l => l.id === 'regions-inactive')) {
        const RegionsInactiveLayer = Admin1Layer
        RegionsInactiveLayer.id = 'regions-inactive'
        this.map.addLayer(RegionsInactiveLayer, 'admin-1-boundary')
      }

      // Initialize choropleth layers
      this.updateZoom(iso3166, map, map)
      this.updateActiveCountry(iso3166, region)

      window.addEventListener('resize', () => {
        clearTimeout(resizeTimer)
        resizeTimer = setTimeout(this.setPinSize, 250)
      })

      // Update URL values
      // this.map.on('moveend', this.moveEnd)

      // Get features currently under the mouse
      this.map.on('mousemove', this.mouseMove)

      // When the user moves their mouse over the points layer, we'll update the filter in
      // the points hover layer to only show the matching point, thus making a hover effect.
      this.map.on('mousemove', 'points', this.mouseMovePoints)

      // Reset the point hover layer's filter when the mouse leaves the layer.
      this.map.on('mouseleave', 'points', this.mouseLeave)

      this.map.on('click', this.handleClick)

      // Add mapbox controls
      const nav = new NavigationControl({ showCompass: false })
      this.map.addControl(nav, 'bottom-right')
      this.map.addControl(new FullscreenControl(), 'bottom-right')
      this.isReady = true
    })

    // Create popup for hover
    this.popupOffsets = {
      top: [0, 20],
      bottom: [0, -20],
      left: [20, 0],
      right: [-20, 0],
      'top-left': [0, 20],
      'top-right': [0, 20],
      'bottom-left': [0, -20],
      'bottom-right': [0, -20],
    }
    this.hoverPopup = new Popup(
      {
        closeButton: false,
        offset: this.popupOffsets,
      },
    )
  }

  componentDidUpdate(nextProps) {
    const {
      iso3166, map, region, home,
    } = this.props

    if (iso3166 !== nextProps.iso3166) {
      this.updateZoom(iso3166, map, home)
    }

    if ((iso3166 !== nextProps.iso3166) || (region !== nextProps.region)) {
      this.updateActiveCountry(iso3166, region)
    }
  }

  componentWillUnmount() {
    const { emitter } = this.props
    this.map.off('zoom', this.zoom)
    this.map.off('mousemove', 'points', this.mouseMovePoints)
    this.map.off('mousemove', this.mouseMove)
    // this.map.off('moveend', this.moveEnd)
    this.map.off('mouseleave', 'points', this.mouseLeave)
    this.map.off('click', this.handleClick)
    emitter.off('mapData', this.setMapData)
    emitter.off('liveEventsData', this.setLiveEventsData)
    emitter.off('resize', this.resize)
  }

  async setMapData(data) {
    if (this.isReady) {
      this.updateChoropleth(data.aggregations)
      this.updatePoints(data.features)
      this.setState(data)
    } else {
      await timeout(10)
      this.setMapData(data)
    }
  }

  async setLiveEventsData(data) {
    if (this.isReady) {
      this.updateLiveEventsPoints(data.features)
    } else {
      await timeout(10)
      this.setLiveEventsData(data)
    }
  }

  getBucket(location, aggregation) {
    const { aggregations } = this.state

    return (aggregations && aggregations[aggregation]
      && aggregations[aggregation].buckets.find(agg => agg.key === location))
      || null
  }

  setPinSize() {
    this.initialRadius = window.innerWidth <= 700 ? 10 : 5
    this.maxRadius = this.initialRadius * 20
    pointsLayers.forEach((layer) => {
      this.map.setPaintProperty(layer, 'circle-radius', this.initialRadius)
    })
    this.map.setPaintProperty('Events', 'circle-radius', this.initialRadius)
  }

  resize() {
    const { iso3166, map, home } = this.props
    if (this.map) {
      this.map.resize()
      if (iso3166) {
        this.updateZoom(iso3166, map, home)
      }
    } else {
      window.setTimeout(() => {
        this.resize()
      }, 500)
    }
  }

  animateMarker(timestamp) {
    if (!this.start) this.start = timestamp
    const progress = timestamp - this.start

    if (progress > 1000 / this.framesPerSecond) {
      this.radius += (this.maxRadius - this.radius) / (1000 / this.framesPerSecond)
      this.opacity -= (0.9 / this.framesPerSecond)

      this.map.setPaintProperty('EventsGlow', 'circle-radius', this.radius)
      this.map.setPaintProperty('EventsGlow', 'circle-opacity', this.opacity)

      if (this.opacity <= 0.1) {
        this.radius = this.initialRadius
        this.opacity = this.initialOpacity
      }
      this.start = null
    }

    this.animatingMarkers = requestAnimationFrame(this.animateMarker)
  }

  zoom(e) {
    const { iso3166 } = this.props

    const zoom = e.target.getZoom()

    if (zoom >= 7) {
      e.target.setPaintProperty('water', 'background-opacity', 0)
    } else {
      e.target.setPaintProperty('water', 'background-opacity', 1)
    }

    if (zoom < 2 && iso3166) {
      iso3166 && this.map.setPaintProperty('countries', 'fill-opacity', 1)
    } else if (iso3166) {
      iso3166 && this.map.setPaintProperty('countries', 'fill-opacity', 0)
    }
  }

  mouseMovePoints(e) {
    const ids = e.features.map(feat => feat.properties['@id'])
    this.map.setFilter('points-hover', ['in', '@id'].concat(ids))
    if (ids.length) {
      this.map.getCanvas().style.cursor = 'pointer'
    }
  }

  mouseMove(e) {
    const { overlayList } = this.state

    if (!overlayList) {
      const {
        translate, iso3166, phrases, locales, emitter, region,
      } = this.props
      const { aggregations } = this.state
      const hoveredEvents = this.map.queryRenderedFeatures(e.point, { layers: ['Events'] })
      const hoveredPoints = this.map.queryRenderedFeatures(e.point, { layers: ['points'] })
      const hoveredCountries = this.map.queryRenderedFeatures(e.point, { layers: ['countries'] })
      const hoveredRegions = this.map.queryRenderedFeatures(e.point, { layers: ['regions'] })
      const hoveredRegionsInactive = this.map.queryRenderedFeatures(e.point, { layers: ['regions-inactive'] })

      const currentCountry = (hoveredCountries.length
        && hoveredCountries[0].properties.iso_3166_1) || null
      const currentRegion = (hoveredRegions.length
        && hoveredRegions[0].properties.code_hasc) || null
      const currentRegionInactive = (hoveredRegionsInactive.length
        && hoveredRegionsInactive[0].properties.code_hasc) || null

//console.log("hover", hoveredCountries, hoveredRegions, hoveredRegionsInactive)
      if (!currentCountry && !hoveredPoints.length) {
        // Water since there is no country
        this.hoverPopup.remove()
        this.map.getCanvas().style.cursor = ''
      } else {
//console.log("have currentCountry", currentCountry)
        this.hoverPopup.setLngLat(e.lngLat)
        this.map.getCanvas().style.cursor = 'pointer'

        let popupContent

        if (hoveredEvents.length) {
          popupContent = (
            <ul className="list">
              <li>
                <I18nProvider i18n={i18n(locales, phrases)}>
                  <EmittProvider emitter={emitter}>
                    <ResourcePreview
                      about={Object.assign(hoveredEvents[0].properties, {
                        name: JSON.parse(hoveredEvents[0].properties.name),
                        location: [JSON.parse(hoveredEvents[0].properties.location)],
                        additionalType: hoveredEvents[0].properties.additionalType
                          && JSON.parse(hoveredEvents[0].properties.additionalType)
                          || undefined,
                        alternateName: hoveredEvents[0].properties.alternateName
                          && JSON.parse(hoveredEvents[0].properties.alternateName)
                          || undefined,
                      })}
                    />
                  </EmittProvider>
                </I18nProvider>
              </li>
            </ul>
          )
        } else if (hoveredPoints.length) {
          if (hoveredPoints.length > 6) {
            popupContent = (
              <ul>
                <li style={{ display: 'flex', justifyContent: 'space-evenly', fontSize: 'var(--font-size-xs)' }}>
                  {calculateTypes(hoveredPoints)}
                </li>
              </ul>
            )
            // More than 6 points
          } else if (hoveredPoints.length > 1 && hoveredPoints.length <= 6) {
          // More than 1 point, less than 6
            popupContent = (
              <ul className="list">
                {hoveredPoints.map(point => (
                  <li key={point.properties['@id']}>
                    <Icon type={point.properties['@type']} />
                    {translate(JSON.parse(point.properties.name))}
                  </li>
                ))}
              </ul>
            )
          } else {
            // Single point
            popupContent = (
              <ul className="list">
                <li>
                  <I18nProvider i18n={i18n(locales, phrases)}>
                    <EmittProvider emitter={emitter}>
                      <ResourcePreview
                        about={Object.assign(hoveredPoints[0].properties, {
                          name: JSON.parse(hoveredPoints[0].properties.name),
                          location: [JSON.parse(hoveredPoints[0].properties.location)],
                          additionalType: hoveredPoints[0].properties.additionalType
                            && JSON.parse(hoveredPoints[0].properties.additionalType)
                            || undefined,
                          alternateName: hoveredPoints[0].properties.alternateName
                            && JSON.parse(hoveredPoints[0].properties.alternateName)
                            || undefined,
                        })}
                      />
                    </EmittProvider>
                  </I18nProvider>
                </li>
              </ul>
            )
          }
        } else if (currentRegion) {
          // Hove a region
          const bucket = this.getBucket(currentRegion, 'sterms#feature.properties.location.address.addressRegion')
          popupContent = (
            <ul>
              <li>
                <b>
                  <span className="tooltipTitle">
                    {translate(currentRegion)}
                    &nbsp;(
                    {translate(currentCountry)}
                    )
                  </span>
                </b>
                {(region && currentRegion !== `${currentCountry}.${region}`) && (
                  <>
                    <br />
                    <span className="tip">
                      {translate('Map.clickRegion')}
                    </span>
                  </>
                )
                }
                {(bucket && !region) && (
                  <>
                    <br />
                    <div className="buckets">{renderTypes(bucket['sterms#by_type'].buckets)}</div>
                  </>
                )}
              </li>
              {bucket && aggregations['global#champions']['sterms#about.regionalChampionFor.keyword']
                .buckets.some(b => b.key === bucket.key) ? (
                  <li className="separator"><span>{translate('Map.countryChampionAvailable')}</span></li>
                ) : (
                  <li className="separator"><span>{translate('Map.noCountryChampionYet')}</span></li>
                )
              }
            </ul>
          )
        } else if (currentRegionInactive) {
          popupContent = (
            <ul>
              <li>
                <b>
                  <span className="tooltipTitle">
                    {translate(currentRegionInactive)}
                    &nbsp;(
                    {translate(currentCountry)}
                    )
                  </span>
                </b>
                <br />
                <span className="tip">
                  {translate('Map.clickRegion')}
                </span>
              </li>
            </ul>
          )
        } else if (iso3166 && currentCountry !== iso3166) {
          // Not the country that is selected
          popupContent = (
            <ul>
              <li>
                <b>
                  <span className="tooltipTitle">
                    {translate(currentCountry)}
                  </span>
                </b>
                <br />
                <span className="tip">
                  {translate('Map.clickCountry')}
                </span>
              </li>
            </ul>
          )
        } else {
          // Hover a country
          const bucket = this.getBucket(currentCountry, 'sterms#feature.properties.location.address.addressCountry')
          popupContent = (
            <ul>
              <li>
                <b>
                  <span className="tooltipTitle">
                    {translate(currentCountry)}
                  </span>
                  <br />
                </b>
                <span className="tip">
                  {translate('Map.clickCountry')}
                </span>
                {bucket && (
                  <>
                    <br />
                    <div className="buckets">{renderTypes(bucket['sterms#by_type'].buckets)}</div>
                  </>
                )}
              </li>
              {bucket && aggregations['global#champions']['sterms#about.countryChampionFor.keyword']
                .buckets.some(b => b.key === bucket.key) ? (
                  <li className="separator"><span>{translate('Map.countryChampionAvailable')}</span></li>
                ) : (
                  <li className="separator"><span>{translate('Map.noCountryChampionYet')}</span></li>
                )
              }
            </ul>
          )
        }

        this.hoverPopup.setDOMContent(ReactDOM.render(
          <div
            className="tooltip noEvents"
            style={
              {
                zIndex: 9,
                pointerEvents: 'none',
              }}
          >
            {popupContent}
          </div>,
          document.createElement('div'),
        )).addTo(this.map)
      }
    }
  }

  moveEnd(e) {
    const { iso3166 } = this.props

    if (!iso3166) {
      const { lng, lat } = e.target.getCenter()
      const zoom = e.target.getZoom()

      const url = new URL(window.location.href)
      url.searchParams.set('map', `${lng.toFixed(5)},${lat.toFixed(5)},${Math.floor(zoom)}`)
      window.history.replaceState(null, null, url.href)
    }
  }

  updateActiveCountry(iso3166, region) {
//console.log("updateActiveCountry", iso3166, region)
    if (region) {
      this.map.setFilter('regions-inactive', ['==', 'iso_3166_1', iso3166])
      this.map.setFilter('countries-inactive', ['!=', 'iso_3166_1', iso3166])
      this.map.setFilter('regions', ['==', 'code_hasc', `${iso3166}.${region}`])
      this.map.once('moveend', () => {
        this.map.setPaintProperty('countries', 'fill-opacity', 0)
      })
    } else if (iso3166) {
      this.map.setFilter('countries-inactive', ['!=', 'iso_3166_1', iso3166])
      this.map.setFilter('regions', ['==', 'iso_3166_1', iso3166])
      this.map.setFilter('regions-inactive', ['==', 'code_hasc', 'null'])
      this.map.once('moveend', () => {
        this.map.setPaintProperty('countries', 'fill-opacity', 0)
      })
    } else {
      this.map.setFilter('countries-inactive', ['!has', 'iso_3166_1'])
      this.map.setFilter('regions', ['!has', 'iso_3166_1'])
      this.map.setFilter('regions-inactive', ['==', 'code_hasc', 'null'])
      this.map.setPaintProperty('countries', 'fill-opacity', 1)
    }
  }

  fly(center, zoom) {
    const { map } = this

    map.flyTo({
      center,
      zoom,
      speed: 1.6,
      curve: 1,
      easing(t) {
        return t
      },
      essential: true,
    })
  }

  updateZoom(iso3166, map, home) {
    // Zoom if a country is selected
    if (iso3166) {
      if (this.map.isStyleLoaded()) {
        this.map.resize()
        if (iso3166 in bounds) {
          const bound = bounds[iso3166]
          this.fly(bound, bound[2])
        } else {
          const countryFeatures = this.map.queryRenderedFeatures({
            layers: ['countries'],
            filter: ['in', 'iso_3166_1', iso3166],
          })
          if (countryFeatures.length) {
            const sumCoords = []

            countryFeatures.forEach((feature) => {
              feature.geometry.coordinates.forEach((land) => {
                // eslint-disable-next-line prefer-spread
                sumCoords.push.apply(sumCoords, feature.geometry.type === 'MultiPolygon' ? land[0] : land)
              })
            })

            const bounds = sumCoords
              .reduce((bounds, coord) => bounds
                .extend(coord), new this.mapboxTools.LngLatBounds(sumCoords[0], sumCoords[0]))

            this.map.fitBounds(bounds, {
              padding: 40,
              maxZoom: 6.9,
              offset: [30, 0],
              speed: 1.6,
              curve: 1,
              easing(t) {
                return t
              },
              essential: true,
            })
          } else {
            const center = centroids[iso3166]
            this.fly(center, 6.9)
          }
        }
      } else {
        window.setTimeout(() => {
          this.updateZoom(iso3166, map, home)
        }, 500)
      }
    } else if (map) {
      const center = {}
      const mapParameters = map.split(',')

      center.lng = (mapParameters[0] && !Number.isNaN(mapParameters[0])) ? mapParameters[0] : null
      center.lat = (mapParameters[1] && !Number.isNaN(mapParameters[1])) ? mapParameters[1] : null
      center.zoom = (mapParameters[2] && !Number.isNaN(mapParameters[2])) ? mapParameters[2] : null
      this.fly(
        (center.lng && center.lat) ? [center.lng, center.lat] : [0, 0],
        center.zoom || 1,
      )
    } else if (home) {
      this.map.setCenter([0, 0])
      this.map.setZoom(1)
    }
  }

  choroplethStopsFromBuckets(buckets) {
    const counts = buckets.map(bucket => bucket.doc_count)
    const range = this.map.getStyle().layers
      .filter(layer => layer.id.startsWith('choropleth'))
      .map((layer) => {
        this.map.setLayoutProperty(layer.id, 'visibility', 'none')
        return this.map.getPaintProperty(layer.id, 'fill-color')
      })

    const getColor = scaleLog()
      .range([range[range.length - 1], range[0]])
      .interpolate(interpolateHcl)
      .domain([quantile(counts, 0.01), quantile(counts, 0.99)])

    return buckets.length
      ? buckets.map(bucket => [bucket.key, getColor(bucket.doc_count)])
      : [['', 'rgb(255, 255, 255)']]
  }

  updateChoropleth(aggregations) {
    const { emitter } = this.props
    if (aggregations) {
      const aggregation = aggregations['sterms#feature.properties.location.address.addressRegion']
        || aggregations['sterms#feature.properties.location.address.addressCountry']
      const stops = this.choroplethStopsFromBuckets(aggregation.buckets)
      const colors = stops
        .map(stop => stop[1])
        .filter((value, index, self) => self.indexOf(value) === index)
        .concat('rgba(255, 255, 255)')
        .reverse()
      const property = aggregations['sterms#feature.properties.location.address.addressRegion']
        ? 'code_hasc' : 'iso_3166_1'
      const layer = aggregations['sterms#feature.properties.location.address.addressRegion']
        ? 'regions' : 'countries'

      this.map.setPaintProperty(layer, 'fill-color', {
        property,
        stops,
        type: 'categorical',
        default: 'rgb(255, 255, 255)',
      })

      const max = (aggregation.buckets.length && aggregation.buckets[0].doc_count) || 0

      emitter.emit('updateColors', { colors, max })
    }
  }

  mouseLeave() {
    this.map.setFilter('points-hover', ['==', 'display', 'hidden'])
    this.map.getCanvas().style.cursor = ''
  }

  clickPoints(e, features) {
    const { translate, emitter } = this.props
    if (features.length > 6 && this.map.getZoom() !== this.map.getMaxZoom()) {
      this.fly(e.lngLat, this.map.getZoom() + 5)
    } else if (features.length > 1) {
      const list = features.map(feature => (
        <li key={feature.properties['@id']}>
          <Link href={feature.properties['@id']}>
            <Icon type={feature.properties['@type']} />
            {translate(JSON.parse(feature.properties.name))}
          </Link>
        </li>
      ))

      // Show overlay
      const popupDOM = document.createElement('div')
      ReactDOM.render(
        <EmittProvider emitter={emitter}>
          <div
            className="tooltip"
            style={
              {
                zIndex: 9,
                pointerEvents: 'all',
              }}
          >
            <ul className="list">{list}</ul>
          </div>
        </EmittProvider>,
        popupDOM,
      )

      if (this.popup && this.popup.isOpen()) {
        this.popup.remove()
      } else {
        this.popup = new this.mapboxTools.Popup(
          {
            closeButton: false,
            offset: this.popupOffsets,
          },
        )
          .setLngLat(this.hoverPopup ? this.hoverPopup._lngLat : features[0].geometry.coordinates)
          .setDOMContent(popupDOM)
          .addTo(this.map)

        this.popup.on('close', () => {
          this.setState({ overlayList: false })
        })

        this.setState({
          overlayList: true,
        })
      }
    } else {
      // Click on a single resource
      const url = `/resource/${features[0].properties['@id']}`
      emitter.emit('navigate', url)
    }
  }

  clickCountries(e, features) {
    if (this.popup && this.popup.isOpen()) return

    const { emitter } = this.props

    if (features[0].properties.iso_3166_1 !== '-99') {
      emitter.emit('navigate', `/country/${features[0].properties.iso_3166_1.toLowerCase()}${window.location.search}`)
    }
  }

  clickRegions(e, features) {
    if (this.popup && this.popup.isOpen()) return

    const { emitter } = this.props
    const [country, region] = features[0].properties.code_hasc.toLowerCase().split('.')
    if (features[0].properties.iso_3166_1 !== '-99') {
      emitter.emit('navigate', `/country/${country}/${region}${window.location.search}`)
    }
  }

  updatePoints(features) {
    const pointsCollection = {
      type: 'FeatureCollection',
      features,
    }
    this.popup && this.popup.remove()
//console.log("updatePoints", pointsCollection)
    this.map.getSource('pointsSource').setData(pointsCollection)
  }

  updateLiveEventsPoints(features) {
    cancelAnimationFrame(this.animatingMarkers)
    const eventsCollection = {
      type: 'FeatureCollection',
      features,
    }
    this.map.getSource('eventsSource').setData(eventsCollection)
    this.animatingMarkers = requestAnimationFrame(this.animateMarker)
  }

  animateCircleLayer(layerName, show) {
    if (show) {
      this.map.setPaintProperty(layerName, 'circle-radius', this.initialRadius)
      this.map.setPaintProperty(layerName, 'circle-opacity', 1)
      this.map.setPaintProperty(layerName, 'circle-stroke-opacity', 1)
    } else {
      this.map.setPaintProperty(layerName, 'circle-radius', 0)
      this.map.setPaintProperty(layerName, 'circle-opacity', 0)
      this.map.setPaintProperty(layerName, 'circle-stroke-opacity', 0)
    }
  }

  handleClick(e) {
    // eslint-disable-next-line no-restricted-syntax
    for (const layer of this.layersOrder) {
      const features = this.map.queryRenderedFeatures(e.point, { layers: [layer.name] })
      if (features.length) {
        layer.handler(e, features)
        return
      }
    }
  }

  render() {
    const {
      iso3166, emitter, translate,
    } = this.props
    const { overlayList } = this.state

    return (
      <div
        ref={(map) => { this.Map = map }}
        id="Map"
        style={
          {
            position: 'absolute',
            width: '100%',
            height: '75vh',
            top: 0,
            left: 0,
          }}
        onKeyDown={(e) => {
          if (e.keyCode === 27 && iso3166) {
            emitter.emit('navigate', '/resource/')
          }
        }}
        role="presentation"
      >
        {overlayList && <div className="overlayList" />}

        <MapLeyend
          iso3166={iso3166}
        />

        <a className="imprintLink" href="/imprint">{translate('main.imprintPrivacy')}</a>

      </div>
    )
  }
}

Map.propTypes = {
  config: PropTypes.objectOf(PropTypes.any).isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
  locales: PropTypes.arrayOf(PropTypes.any).isRequired,
  iso3166: PropTypes.string,
  translate: PropTypes.func.isRequired,
  map: PropTypes.string,
  home: PropTypes.bool.isRequired,
  phrases: PropTypes.objectOf(PropTypes.any).isRequired,
  region: PropTypes.string,
}

Map.defaultProps = {
  iso3166: null,
  map: null,
  region: null,
}

export default withConfig(withEmitter(withI18n(Map)))
