/* global document */
/* global window */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import {
  ReactiveBase,
  ReactiveList,
  DataSearch,
  MultiDropdownList,
  SelectedFilters,
  ReactiveComponent,
  StateProvider,
  ToggleButton,
} from '@appbaseio/reactivesearch'

import { types, isNode } from '../common'
import withI18n from './withI18n'
import withEmitter from './withEmitter'
import withConfig from './withConfig'
import ResultList from './ResultList'
import TotalEntries from './TotalEntries'
import TogglePoints from './TogglePoints'
import ShareExport from './ShareExport'
import Country from './Country'
import Calendar from './Calendar'
import Tour from './Tour'

const timeout = async ms => new Promise(resolve => setTimeout(resolve, ms))

const ReactiveFilters = ({
  emitter,
  translate,
  config: { elasticsearchConfig },
  children,
  iso3166,
  region,
  initPins,
  _self,
  viewHash,
}) => {
  const sizes = [20, 50, 100, 200, 9999]
  const date = new Date().toJSON().split('T').shift()
  const sorts = [
    {
      label: translate('ClientTemplates.filter.dateCreated'),
      dataField: 'dateCreated',
      sortBy: 'desc',
    },
    {
      label: translate('ClientTemplates.filter.relevance'),
      dataField: '_score',
      sortBy: 'desc',
    },
    {
      label: translate('ClientTemplates.filter.alphabetical'),
      dataField: 'about.name.en.sort',
      sortBy: 'asc',
    },
    {
      label: translate('ClientTemplates.filter.lighthouseCount'),
      dataField: 'lighthouse_count',
      sortBy: 'desc',
    },
    {
      label: translate('ClientTemplates.filter.likeCount'),
      dataField: 'like_count',
      sortBy: 'desc',
    },
  ]

  const getUrlParams = () => {
    if (isNode()) {
      return {
        view: 'list',
        size: 20,
        sort: sorts[0].dataField,
      }
    }
    const url = new URL(window.location.href)

    const sort = url.searchParams.get('sort')
      ? url.searchParams.get('sort')
      : (url.searchParams.get('q') && sorts[1].dataField) || sorts[0].dataField
    console.log(sort)

    return {
      view: url.searchParams.get('view') || 'list',
      size: url.searchParams.get('size') || 20,
      sort,
    }
  }

  const setUrlParams = ({ view = 'list', size = 20, sort = sorts[0].dataField }) => {
    const url = new URL(window.location.href)
    url.searchParams.set('view', view)
    url.searchParams.set('size', size)
    url.searchParams.set('sort', sort)
    window.history.pushState(null, null, url.href)
    window.dispatchEvent(new window.PopStateEvent('popstate'))
  }
  const [params, setParams] = useState(getUrlParams())
  const handlePopState = () => {
    const p = getUrlParams()
    setParams(p)
  }

  const [collapsed, setCollapsed] = useState(true)
  const [showPastEvents, setShowPastEvents] = useState(false)
  const [showMobileFilters, setShowMobileFilters] = useState(false)
  const [showFeatures, setShowFeatures] = useState(initPins)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    emitter.on('showFeatures', setShowFeatures)
    window.addEventListener('popstate', handlePopState)

    return () => {
      emitter.off('showFeatures', setShowFeatures)
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  const renderLabel = filter => item => (Object.keys(item).length
    ? <div>{Object.keys(item).map(translate).join(', ')}</div>
    : translate('select', { name: translate(filter.title || filter.componentId) }))

  if (isClient) {
    let subFilters = [
      {
        componentId: 'filter.about.additionalType.@id',
        dataField: 'about.additionalType.@id',
        showSearch: false,
      },
      {
        componentId: 'filter.about.keywords',
        dataField: 'about.keywords',
        showMissing: true,
        showSearch: true,
        translate: false,
        size: 100,
      },
      {
        componentId: 'filter.about.award',
        dataField: 'about.award',
        showSearch: false,
      },
      {
        componentId: 'filter.about.availableChannel.availableLanguage',
        dataField: 'about.availableChannel.availableLanguage',
        showSearch: false,
      },
      {
        componentId: 'filter.about.primarySector.@id',
        dataField: 'about.primarySector.@id',
        showSearch: false,
      },
      {
        componentId: 'filter.about.secondarySector.@id',
        dataField: 'about.secondarySector.@id',
        showSearch: false,
      },
      {
        componentId: 'filter.about.audience.@id',
        dataField: 'about.audience.@id',
        showSearch: false,
      },
      {
        componentId: 'filter.about.about.@id',
        dataField: 'about.about.@id',
        showSearch: false,
      },
      {
        componentId: 'filter.about.license.@id',
        dataField: 'about.license.@id',
        showSearch: false,
      },
      {
        componentId: 'filter.about.activityField.@id',
        dataField: 'about.activityField.@id',
        showSearch: false,
      },
      {
        componentId: 'filter.about.scope.@id',
        dataField: 'about.scope.@id',
        showSearch: false,
      },
      {
        componentId: 'filter.about.focus.keyword',
        dataField: 'about.focus.keyword',
        showSearch: false,
      },
      {
        componentId: 'filter.about.status',
        dataField: 'about.status',
        showSearch: false,
      },
      {
        componentId: 'filter.about.spatialCoverage',
        dataField: 'about.spatialCoverage',
        showSearch: false,
      },
      {
        componentId: 'filter.about.inLanguage.keyword',
        dataField: 'about.inLanguage.keyword',
        showSearch: false,
        hidden: true,
      },
      {
        componentId: 'filter.about.objectIn.@type',
        dataField: 'about.objectIn.@type',
        showSearch: false,
        hidden: true,
      },
      {
        componentId: 'filter.author.keyword',
        dataField: 'author.keyword',
        showSearch: false,
        hidden: true,
      },
      {
        componentId: 'filter.about.objectIn.agent.@id',
        dataField: 'about.objectIn.agent.@id',
        showSearch: false,
        hidden: true,
      },
      {
        componentId: 'filter.about.attendee.@id',
        dataField: 'about.attendee.@id',
        showSearch: false,
        hidden: true,
      },
    ]

    if (!iso3166 && !subFilters.find(filter => filter.componentId === 'filter.about.location.address.addressCountry')) {
      subFilters.push({
        componentId: 'filter.about.location.address.addressCountry',
        dataField: 'about.location.address.addressCountry',
        showSearch: false,
        title: 'country',
      })
    }

    if (!region && !subFilters.find(filter => filter.componentId === 'filter.about.location.address.addressRegion')) {
      subFilters.push({
        componentId: 'filter.about.location.address.addressRegion',
        dataField: 'about.location.address.addressRegion',
        showSearch: false,
        title: 'filter.feature.properties.location.address.addressRegion',
      })
    }

    const filterIDs = ['q', 'size', 'filter.about.@type'].concat(subFilters.map(filter => filter.componentId))
    subFilters = subFilters.map((filter) => {
      filter.react = {
        and: filterIDs.filter(id => id !== filter.componentId),
      }
      return filter
    })

    const links = Object.entries({
      geojson: 'application/geo+json',
      ics: 'text/calendar',
      json: 'application/json',
      csv: 'text/csv',
    }).map(([ext, type]) => {
      const uri = new URL(_self.split('#')[0])
      uri.searchParams.set('ext', ext)
      uri.searchParams.set('size', -1)
      uri.searchParams.delete('view')
      return { uri, type }
    })

    return (
      <div
        className="ReactiveFilters"
      >
        <ReactiveBase
          app={elasticsearchConfig.index}
          url={elasticsearchConfig.url}
          className="reactiveBase"
        >

          <section className="filtersHeader">

            <div className="basicFilters">

              <StateProvider
                componentIds={['filter.about.@type']}
                render={({ searchState }) => {
                  const filter = (searchState && searchState['filter.about.@type']
                    && searchState['filter.about.@type'].value && !Array.isArray(searchState['filter.about.@type'].value)
                    && searchState['filter.about.@type'].value) || false

                  let searchPlaceholder = translate('search.entries')
                  if (iso3166) {
                    (filter)
                      ? searchPlaceholder = translate('search.entries.country.filter', {
                        country: translate(region ? `${iso3166}.${region}` : iso3166),
                        filter: translate(filter).toLowerCase(),
                      })
                      : searchPlaceholder = translate('search.entries.country', { country: translate(region ? `${iso3166}.${region}` : iso3166) })
                  } else if (filter) {
                    if (filter === 'Policy') {
                      searchPlaceholder = translate('search.entries.filter.policy')
                    } else {
                      searchPlaceholder = translate('search.entries.filter', {
                        filter: translate(filter),
                      })
                    }
                  }

                  return (
                    <DataSearch
                      className="nameSearch"
                      componentId="q"
                      queryFormat="and"
                      debounce={200}
                      dataField={['about.name.*', 'about.description.*', 'about.*.name.*', 'about.alternateName.*']}
                      placeholder={searchPlaceholder}
                      onValueSelected={(value) => {
                        const url = new URL(window.location.href)

                        const p = getUrlParams()
                        const sort = url.searchParams.get('sort')
                          ? url.searchParams.get('sort')
                          : (value && sorts[1].dataField) || sorts[0].dataField

                        setParams({ ...p, sort })
                      }}
                      URLParams
                      react={{
                        and: filterIDs.filter(id => id !== 'q'),
                      }}
                    />
                  )
                }}
              />

              <TogglePoints initPins={initPins} />

            </div>

            <ToggleButton
              componentId="filter.about.@type"
              URLParams
              className="typeButtons"
              dataField="about.@type"
              multiSelect={false}
              data={types.map(type => ({
                label: translate(type),
                value: type,
              }))}
            />

            <div className="controls">
              <TotalEntries className="hidden-mobile" />

              <div className="rightButtons">

                {params.view === 'list' && (
                  <>
                    <select
                      value={params.size}
                      className="btn hidden-mobile"
                      onChange={(e) => {
                        setUrlParams({ ...getUrlParams(), size: e.target.value })
                      }}
                    >
                      {sizes.map(size => (
                        <option
                          key={size}
                          value={size}
                        >
                          {size === 9999 ? 'all' : size}
                          &nbsp;
                          {translate('filters.entriesPage')}
                        </option>
                      ))}
                    </select>

                    <select
                      value={params.sort}
                      className="btn hidden-mobile"
                      onChange={(e) => {
                        setUrlParams({ ...getUrlParams(), sort: e.target.value })
                      }}
                    >
                      {sorts.map(sort => (
                        <option
                          key={sort.dataField}
                          value={sort.dataField}
                        >
                          {sort.label}
                        </option>
                      ))}
                    </select>
                  </>
                )}

                <button
                  type="button"
                  className={`btn hidden-desktop${showMobileFilters ? ' active' : ''}`}
                  onClick={() => {
                    setShowMobileFilters(!showMobileFilters)
                  }}
                >
                  <i className="fa fa-filter" />
                </button>

                <button
                  disabled={params.view === 'list'}
                  type="button"
                  className="btn"
                  onClick={() => setUrlParams({ ...getUrlParams(), view: 'list' })}
                >
                  <i className="fa fa-list" />
                  &nbsp;
                  {translate('main.list')}
                </button>
                <button
                  disabled={params.view === 'map'}
                  type="button"
                  className="btn mapBtn"
                  onClick={async () => {
                    setUrlParams({ ...getUrlParams(), view: 'map' })
                    await timeout(100)
                    emitter.emit('resize')
                  }}
                >
                  <i className="fa fa-map" />
                  &nbsp;
                  {translate('main.map')}
                </button>

                <button
                  disabled={params.view === 'statistics'}
                  type="button"
                  className="btn"
                  onClick={() => {
                    setUrlParams({ ...getUrlParams(), view: 'statistics' })
                  }}
                >
                  <i className="fa fa-pie-chart" />
                  &nbsp;
                  {translate('ClientTemplates.app.statistics')}
                </button>
                <ShareExport
                  _self={_self}
                  _links={{ refs: links }}
                  view={viewHash}
                />
              </div>
            </div>
          </section>


          <div className={`mainContent ${params.view}View${collapsed ? ' collapsed' : ''}`}>

            <aside className={showMobileFilters ? 'show' : ''}>

              {iso3166 && (
                <Country iso3166={iso3166} region={region} />
              )}

              <SelectedFilters
                render={(data) => {
                  const applied = Object.keys(data.selectedValues)
                  return (
                    (applied.length > 0
                    && (applied.map(filter => data.selectedValues[filter])
                      .map(f => f.value)
                      .some(value => ((value !== null) && (value.length > 0))))) && (
                      <div className="selectedFilters">
                        <h2>{translate('filters.title')}</h2>
                        <ul>
                          {applied.filter(f => f !== 'size').map(filter => (
                            (data.selectedValues[filter].value !== null) && (
                              <li
                                key={`${filter}`}
                                className="selectedFilter"
                              >
                                {(!Array.isArray(data.selectedValues[filter].value)) ? (
                                  <button
                                    type="button"
                                    onClick={() => data.setValue(filter, null)}
                                  >
                                    <b>{translate(filter)}</b>
                                    :
                                    &nbsp;
                                    {translate(data.selectedValues[filter].value)}
                                  </button>
                                ) : (
                                  data.selectedValues[filter].value.map(value => (
                                    <button
                                      type="button"
                                      key={`${filter}-${value}`}
                                      onClick={() => {
                                        data.setValue(filter, data.selectedValues[filter].value
                                          .filter(v => v !== value))
                                      }}
                                    >
                                      <b>{translate(filter)}</b>
                                      :
                                      &nbsp;
                                      {translate(value)}
                                    </button>
                                  )))}
                              </li>
                            )
                          ))}
                        </ul>
                        <button
                          type="button"
                          className="clearAll"
                          onClick={data.clearValues}
                        >
                          {translate('filters.clearAll')}
                        </button>
                      </div>
                    )
                  )
                }}
              />

              {/* Query for live events */}
              <ReactiveComponent
                componentId="liveEvents"
                defaultQuery={() => {
                  const query = {
                    _source: 'feature.*',
                    size: showFeatures ? 100 : 0,
                    query: {
                      bool: {
                        must: {
                          exists: {
                            field: 'feature',
                          },
                        },
                        filter: [
                          {
                            query_string: {
                              query: `about.startDate:<=${date} AND about.endDate:>=${date} AND _exists_:about.hashtag`,
                            },
                          },
                          {
                            term: {
                              'about.@type': 'Event',
                            },
                          },
                        ],
                      },
                    },
                  }
                  return query
                }}
                onData={({ data }) => {
                  if (data !== null) {
                    const features = data.map(item => item.feature)
                    emitter.emit('liveEventsData', { features })
                  }
                }}
                react={{
                  and: filterIDs,
                }}
              />

              <ReactiveComponent
                componentId="myCountryPicker"
                defaultQuery={() => {
                  const query = {
                    size: showFeatures ? 9999 : 0,
                    _source: 'feature.*',
                    query: {
                      bool: {
                        filter: [
                          {
                            terms: {
                              'about.@type': types,
                            },
                          },
                          {
                            exists: {
                              field: 'about.name',
                            },
                          },
                          {
                            exists: {
                              field: 'feature',
                            },
                          },
                        ],
                      },
                    },
                    aggs: {
                      'global#champions': {
                        global: {},
                        aggs: {
                          'sterms#about.regionalChampionFor.keyword': {
                            terms: {
                              field: 'about.regionalChampionFor.keyword',
                              size: 9999,
                            },
                          },
                          'sterms#about.countryChampionFor.keyword': {
                            terms: {
                              field: 'about.countryChampionFor.keyword',
                              size: 9999,
                            },
                          },
                        },
                      },
                    },
                  }

                  if (iso3166) {
                    query.aggs['sterms#feature.properties.location.address.addressRegion'] = {
                      terms: {
                        field: 'feature.properties.location.address.addressRegion',
                        size: 9999,
                      },
                      aggs: {
                        'sterms#by_type': {
                          terms: {
                            field: 'about.@type',
                          },
                        },
                      },
                    }
                    query.query.bool.filter.push({
                      term: {
                        'feature.properties.location.address.addressCountry': iso3166.toUpperCase(),
                      },
                    })
                  } else {
                    query.aggs['sterms#feature.properties.location.address.addressCountry'] = {
                      terms: {
                        field: 'feature.properties.location.address.addressCountry',
                        size: 9999,
                      },
                      aggs: {
                        'sterms#by_type': {
                          terms: {
                            field: 'about.@type',
                          },
                        },
                      },
                    }
                  }

                  if (region) {
                    query.query.bool.filter.push({
                      term: {
                        'feature.properties.location.address.addressRegion': `${iso3166.toUpperCase()}.${region.toUpperCase()}`,
                      },
                    })
                  }
                  return query
                }}
                onData={({ aggregations, data = [], resultStats: { numberOfResults } }) => {
                  if (aggregations !== null && data !== null) {
                    const features = data.map(item => item.feature)
                    emitter.emit('mapData', { features, aggregations })
                    emitter.emit('updateCount', numberOfResults)
                    document.title = `${numberOfResults} entries - OER World Map`
                  }
                }}
                react={{
                  and: filterIDs,
                }}
              />

              {subFilters.map(filter => (
                <div
                  hidden={filter.hidden}
                  key={filter.dataField}
                >
                  <MultiDropdownList
                    className="FilterBox"
                    {...filter}
                    title={filter.title ? translate(filter.title) : translate(filter.componentId)}
                    renderLabel={filter.translate !== false ? renderLabel(filter) : undefined}
                    placeholder={translate('select', { name: filter.title ? translate(filter.title) : translate(filter.componentId) })}
                    renderItem={(label, count) => (
                      <span>
                        <span>{(filter.translate !== false) ? translate(label) : label}</span>
                        &nbsp;
                        <span
                          className="count"
                        >
                          (
                          {count}
                          )
                        </span>
                      </span>
                    )}
                    URLParams
                  />
                </div>
              ))}

            </aside>

            <button
              className="toggleList"
              type="button"
              onClick={() => {
                setCollapsed(!collapsed)
              }}
            >
              <i className={`fa fa-chevron-${collapsed ? 'right' : 'left'}`} />
            </button>

            <div className="right">

              <div
                className="searchResults"
              >
                {(params.view === 'list') && (
                  <StateProvider
                    componentIds={['filter.about.@type', 'q']}
                    strict={false}
                    render={({ searchState }) => {
                      const eventSelected = (searchState && searchState['filter.about.@type'] && searchState['filter.about.@type'].value === 'Event') || false

                      if (eventSelected) {
                        return (
                          <ReactiveComponent
                            componentId="filter.about.startDate"
                            defaultQuery={() => {
                              if (eventSelected) {
                                const query = {
                                  size: 0,
                                  aggs: {
                                    Calendar: {
                                      date_histogram: {
                                        min_doc_count: 1,
                                        field: 'about.startDate',
                                        interval: 'month',
                                      },
                                      aggs: {
                                        'top_hits#about.@id': {
                                          top_hits: {
                                            size: 100,
                                            _source: ['about.@id', 'about.@type', 'about.name', 'about.startDate', 'about.endDate', 'about.location'],
                                          },
                                        },
                                      },
                                    },
                                  },
                                }

                                if (eventSelected && !showPastEvents) {
                                  query.query = {
                                    range: {
                                      'about.startDate': {
                                        gte: 'now/d',
                                      },
                                    },
                                  }
                                }

                                return query
                              }
                            }}
                            react={{
                              and: filterIDs,
                            }}
                            render={({ aggregations }) => {
                              if (aggregations !== null) {
                                const entries = (aggregations
                                  && aggregations.Calendar
                                  && aggregations.Calendar.buckets) || []
                                return (
                                  <>
                                    {eventSelected && (
                                      <div>
                                        <label>
                                          <input
                                            type="checkbox"
                                            value={showPastEvents}
                                            onClick={() => setShowPastEvents(!showPastEvents)}
                                            style={{ position: 'relative', top: '2px', marginRight: '10px' }}
                                          />
                                          {translate('calendar.show.past')}
                                        </label>
                                      </div>
                                    )}
                                    <Calendar entries={entries} />
                                  </>
                                )
                              }

                              return <div>Loading...</div>
                            }}
                          />
                        )
                      }

                      return (
                        <ReactiveList
                          className={`listResults${showMobileFilters ? ' hidden-mobile' : ''}`}
                          componentId="SearchResult"
                          title="Results"
                          defaultQuery={() => {
                            const query = {
                              query: {
                                bool: {
                                  filter: [
                                    {
                                      terms: {
                                        'about.@type': types,
                                      },
                                    },
                                    {
                                      exists: {
                                        field: 'about.name',
                                      },
                                    },
                                  ],
                                },
                              },
                            }

                            if (iso3166) {
                              query.query.bool.filter.push({
                                term: {
                                  'feature.properties.location.address.addressCountry': iso3166.toUpperCase(),
                                },
                              })
                            }

                            if (region) {
                              query.query.bool.filter.push({
                                term: {
                                  'feature.properties.location.address.addressRegion': `${iso3166.toUpperCase()}.${region.toUpperCase()}`,
                                },
                              })
                            }

                            return query
                          }}
                          // FIXME: sorting by relevance when a search term is entered
                          // is currently not reflected in the UI
                          dataField={params.sort}
                          sortBy={sorts.find(s => s.dataField === params.sort).sortBy}
                          showResultStats={false}
                          from={0}
                          size={+params.size}
                          pagination
                          loader={(
                            <div className="Loading">
                              <div className="loadingCircle" />
                            </div>
                          )}
                          showLoader
                          react={{
                            and: filterIDs,
                          }}
                          render={({ data, resultStats: { numberOfResults } }) => {
                            const items = data || []
                            emitter.emit('updateCount', numberOfResults)
                            if (typeof document !== 'undefined' && numberOfResults) {
                              document.title = `${numberOfResults} entries - OER World Map`
                            }
                            return <ResultList listItems={items} />
                          }}
                        />
                      )
                    }}
                  />
                )}

                {children}

                {params.view === 'statistics' && (
                  <div className={showMobileFilters ? 'hidden-mobile' : ''}>
                    <StateProvider render={({ searchState }) => {
                      const filters = Object.entries(searchState)
                        .filter(([field, { value }]) => field.startsWith('filter.') && value && value.length)
                        .map(([field, { value }]) => `${field}=${encodeURIComponent(JSON.stringify(value))}`)
                        .join('&')
                      return (
                        <div>
                          {subFilters.map(({ dataField, title, componentId }) => (
                            <div
                              key={dataField}
                              className="graphContainer"
                            >
                              <h2>{title ? translate(title) : translate(componentId)}</h2>
                              <object
                                loading="lazy"
                                type="image/svg+xml"
                                data={`/stats?field=${dataField}`
                                  .concat(searchState.q && searchState.q.value ? `&q=${searchState.q.value}` : '')
                                  .concat(filters ? `&${filters}` : '')
                                  .concat(iso3166 ? `&filter.about.location.address.addressCountry=["${iso3166}"]` : '')
                                  .concat(region ? `&filter.about.location.address.addressRegion=["${iso3166}.${region}"]` : '')
                                  .concat(iso3166 ? (region ? `&basePath=/country/${iso3166}/${region}` : `&basePath=/country/${iso3166}`) : '')
                                }
                              >
                                {translate('graphs.noData')}
                              </object>
                              <div className="graphControls">
                                <button
                                  type="button"
                                  className="btn"
                                  onClick={async () => {
                                    const el = document.createElement('textarea')
                                    el.value = `${elasticsearchConfig.url}stats?field=${dataField}`
                                      .concat(searchState.q && searchState.q.value ? `&q=${searchState.q.value}` : '')
                                      .concat(filters ? `&${filters}` : '')
                                      .concat(iso3166 ? `&filter.about.location.address.addressCountry=["${iso3166}"]` : '')
                                      .concat(region ? `&filter.about.location.address.addressRegion=["${iso3166}.${region}"]` : '')
                                      .concat(iso3166 ? (region ? `&basePath=/country/${iso3166}/${region}` : `&basePath=/country/${iso3166}`) : '')
                                    el.setAttribute('readonly', '')
                                    el.style = { position: 'absolute', left: '-9999px' }
                                    document.body.appendChild(el)
                                    el.select()
                                    document.execCommand('copy')
                                    document.body.removeChild(el)
                                  }}
                                  title={translate('graphs.copyToClipboard')}
                                >
                                  <i aria-hidden="true" className="fa fa-clipboard" />
                                </button>
                                <a
                                  title={translate('graphs.downloadSVG')}
                                  className="btn"
                                  href={`/stats?field=${dataField}`
                                    .concat(searchState.q && searchState.q.value ? `&q=${searchState.q.value}` : '')
                                    .concat(filters ? `&${filters}` : '')
                                    .concat(iso3166 ? `&filter.about.location.address.addressCountry=["${iso3166}"]` : '')
                                    .concat(region ? `&filter.about.location.address.addressRegion=["${iso3166}.${region}"]` : '')
                                    .concat(iso3166 ? (region ? `&basePath=/country/${iso3166}/${region}` : `&basePath=/country/${iso3166}`) : '')
                                    .concat(`&download=true&filename=${title ? translate(title) : translate(componentId)}`)}
                                >
                                  <i aria-hidden="true" className="fa fa-download" />
                                </a>
                              </div>
                            </div>
                          ))}
                        </div>
                      )
                    }}
                    />
                  </div>

                )}

              </div>

            </div>
          </div>
        </ReactiveBase>

        <Tour setUrlParams={setUrlParams} getUrlParams={getUrlParams} />
      </div>
    )
  }
  return null
}

ReactiveFilters.propTypes = {
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
  translate: PropTypes.func.isRequired,
  config: PropTypes.objectOf(PropTypes.any).isRequired,
  children: PropTypes.node.isRequired,
  initPins: PropTypes.bool.isRequired,
  iso3166: PropTypes.string,
  region: PropTypes.string,
  _self: PropTypes.string.isRequired,
  viewHash: PropTypes.string,
}

ReactiveFilters.defaultProps = {
  iso3166: '',
  region: null,
  viewHash: null,
}

export default withConfig(withEmitter(withI18n(ReactiveFilters)))
