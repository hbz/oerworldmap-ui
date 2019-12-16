/* global document */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Tooltip from 'rc-tooltip'

import {
  ReactiveBase,
  ReactiveList,
  // ToggleButton,
  DataSearch,
  MultiDropdownList,
  SelectedFilters,
  ReactiveComponent,
  StateProvider,
} from '@appbaseio/reactivesearch'

import withI18n from './withI18n'
import withEmitter from './withEmitter'
import ResultList from './ResultList'
import TotalEntries from './TotalEntries'
import Icon from './Icon'
import TogglePoints from './TogglePoints'
import Link from './Link'
// import Calendar from './Calendar'

const sizes = [20, 50, 100, 200, 9999]

const ReactiveFilters = ({
  emitter, translate, elasticsearchConfig, children, iso3166, region, initPins,
}) => {
  const [currentSize, setCurrentSize] = useState(20)

  const toggleButtons = [
    { value: 'Organization' },
    { value: 'Service' },
    { value: 'Person' },
    { value: 'Action' },
    { value: 'Event' },
    { value: 'Article' },
    { value: 'WebPage' },
    { value: 'Product' },
    { value: 'Policy' },
  ].map((btn) => {
    btn.label = (
      <Tooltip
        key={btn.value}
        overlayStyle={{
          maxWidth: '110px',
        }}
        overlay={(
          <span>
            <b>{translate(btn.value)}</b>
          :&nbsp;
            {translate(`Tip.${btn.value}`)}
          </span>
        )}
        placement="top"
        align={{
          targetOffset: [0, 5],
        }}
        mouseEnterDelay={0.2}
        overlayClassName="tooltipDisableEvents"
      >
        <span>
          <Icon type={btn.value} />
          {' '}
          {translate(btn.value)}
        </span>
      </Tooltip>
    )
    return btn
  })

  let subFilters = [
    {
      componentId: 'filter.about.keyword',
      dataField: 'about.keywords',
      showMissing: true,
      showSearch: true,
      translate: false,
      size: 100,
    },
    {
      componentId: 'filter.about.availableChannel.availableLanguage',
      dataField: 'about.availableChannel.availableLanguage',
      showSearch: false,
    },
    {
      componentId: 'filter.about.additionalType.@id',
      dataField: 'about.additionalType.@id',
      showSearch: false,
    },
    {
      componentId: 'filter.about.audience.@id',
      dataField: 'about.audience.@id',
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
      componentId: 'filter.about.award',
      dataField: 'about.award',
      showSearch: false,
    },
    {
      componentId: 'filter.about.license.@id',
      dataField: 'about.license.@id',
      showSearch: false,
      title: 'License',
    },
    {
      componentId: 'filter.about.about.@id',
      dataField: 'about.about.@id',
      showSearch: false,
    },
    {
      componentId: 'filter.about.activityField.@id',
      dataField: 'about.activityField.@id',
      showSearch: false,
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
              render={({ searchState }) => {
                const filter = (searchState && searchState['filter.about.@type'] && searchState['filter.about.@type'].value) || false

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
                    dataField={['about.name.*', 'about.description.*']}
                    placeholder={searchPlaceholder}
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

          {/* <ToggleButton
            className="typeSearch"
            componentId="filter.about.@type"
            dataField="about.@type"
            URLParams
            multiSelect={false}
            // react={{
            //   and: filterIDs.filter(id => id !== 'filter.about.@type'),
            // }}
            data={toggleButtons}
          /> */}

          <StateProvider
            render={({ searchState }) => {
              const selectedType = (searchState && searchState['filter.about.@type'] && searchState['filter.about.@type'].value) || null
              return (
                <ReactiveComponent
                  className="typeSearch"
                  componentId="filter.about.@type"
                  defaultQuery={() => ({
                    query: {
                      term: {
                        'about.@type': selectedType,
                      },
                    },
                  })}
                  URLParams
                  // showFilter
                  render={({ setQuery }) => (
                    <div className="toggleButtons">
                      {toggleButtons.map(button => (
                        <button
                          type="button"
                          key={button.value}
                          className={`typeButton${(selectedType === button.value) ? ' active' : ''}`}
                          onClick={() => {
                            if (selectedType === button.value) {
                              setQuery({
                                query: null,
                                value: '',
                              })
                            } else {
                              setQuery({
                                query: {
                                  term: {
                                    'about.@type': button.value,
                                  },
                                },
                                value: button.value,
                              })
                            }
                          }}
                        >
                          {button.label}
                        </button>
                      ))}
                    </div>
                  )}
                />
              )
            }}
          />

          <div className="controls">
            <TotalEntries />

            <div>

              <select
                className="btn"
                onChange={(e) => {
                  setCurrentSize(e.target.value)
                }}
              >
                {sizes.map(size => (
                  <option
                    key={size}
                    selected={(size === currentSize) || null}
                    value={size}
                  >
                    {size === 9999 ? 'all' : size}
                    &nbsp;
                    {translate('entries / page')}
                  </option>
                ))}
              </select>

              <button
                type="button"
                className="btn"
                onClick={() => {
                  const el = document.querySelector('.mainContent')
                  el.classList.add('listView')
                  el.classList.remove('Map')
                  el.classList.remove('statisticsView')
                }}
              >
                <i className="fa fa-list" />
                &nbsp;
                {translate('main.list')}
              </button>
              <button
                type="button"
                className="btn"
                onClick={() => {
                  const el = document.querySelector('.mainContent')
                  el.classList.add('Map')
                  el.classList.remove('listView')
                  el.classList.remove('statisticsView')
                  emitter.emit('resize')
                }}
              >
                <i className="fa fa-map" />
                &nbsp;
                {translate('main.map')}
              </button>

              {iso3166 && (
                <button
                  type="button"
                  className="btn"
                  onClick={() => {
                    const el = document.querySelector('.mainContent')
                    el.classList.add('statisticsView')
                    el.classList.remove('Map')
                    el.classList.remove('listView')
                  }}
                >
                  <i className="fa fa-pie-chart" />
                  &nbsp;
                  {translate('ClientTemplates.app.statistics')}
                </button>
              )}
            </div>

          </div>
        </section>


        <div className="mainContent listView">

          <aside>

            {iso3166 && (
              <div className="FilterBox country">
                <img
                  className="countryFlag"
                  src={`https://lipis.github.io/flag-icon-css/flags/4x3/${iso3166.toLowerCase()}.svg`}
                  alt={`Flag for ${translate(iso3166)}`}
                />
                {region ? (
                  <>
                    <h2>{translate(`${iso3166}.${region}`)}</h2>
                    <Link href={`/country/${iso3166}`} className="closePage">
                    &times;
                    </Link>
                  </>
                ) : (
                  <>
                    <h2>{translate(iso3166)}</h2>
                    <Link href="/resource/" className="closePage">
                    &times;
                    </Link>
                  </>
                )}
              </div>
            )}

            <SelectedFilters
              render={(data) => {
                const applied = Object.keys(data.selectedValues)
                return (
                  (applied.length > 0 && (applied.map(filter => data.selectedValues[filter]).map(f => f.value).some(value => ((value !== null) && (value.length > 0))))) && (
                    <div className="selectedFilters">
                      <h2>{translate('Filters')}</h2>
                      <ul>
                        {applied.map(filter => (
                          (data.selectedValues[filter].value !== null) && (
                            <li
                              key={`${filter}`}
                              className="selectedFilter"
                            >
                              {(typeof data.selectedValues[filter].value === 'string') ? (
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
                                      data.setValue(filter, data.selectedValues[filter].value.filter(v => v !== value))
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
                        {translate('Clear All')}
                      </button>
                    </div>
                  )
                )
              }}
            />

            <ReactiveComponent
              componentId="myCountryPicker"
              defaultQuery={() => {
                const query = {
                  size: 99,
                  _source: 'feature.*',
                  query: {
                    bool: {
                      filter: [
                        {
                          exists: {
                            field: 'feature',
                          },
                        },
                      ],
                    },
                  },
                  aggs: {
                    color: {
                      terms: {
                        field: 'feature.properties.location.address.addressCountry',
                      },
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
              onData={({ aggregations, data }) => {
                if (aggregations !== null) {
                  const features = (data && data.map(item => item.feature).filter(el => typeof el !== 'undefined')) || []
                  const agg = (aggregations
                    && aggregations.color && aggregations.color.buckets || [])
                  emitter.emit('mapData', { features, aggregations: agg })
                  const total = features.length
                  emitter.emit('updateCount', total)
                  document.title = `${total} entries - OER World Map`
                }
              }}
              react={{
                and: filterIDs,
              }}
            />

            {subFilters.map(filter => (
              <MultiDropdownList
                key={filter.componentId}
                className="FilterBox"
                {...filter}
                title={filter.title ? translate(filter.title) : translate(filter.componentId)}
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
            ))}

          </aside>

          <button
            className="toggleList"
            type="button"
            onClick={(e) => {
              e.target.parentElement.classList.toggle('collapsed')
              const icon = e.target.querySelector('i')
              if (icon.classList.contains('fa-chevron-right')) {
                icon.classList.add('fa-chevron-left')
                icon.classList.remove('fa-chevron-right')
              } else {
                icon.classList.add('fa-chevron-right')
                icon.classList.remove('fa-chevron-left')
              }
            }}
          >
            <i className="fa fa-chevron-left" />
          </button>

          <div className="right">

            <div className="searchResults">
              <ReactiveList
                className="listResults"
                componentId="SearchResult"
                title="Results"
                defaultQuery={() => {
                  let query = {}

                  if (iso3166) {
                    query = {
                      query: {
                        bool: {
                          filter: [
                            {
                              term: {
                                'feature.properties.location.address.addressCountry': iso3166.toUpperCase(),
                              },
                            },
                          ],
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
                dataField="@type"
                showResultStats={false}
                from={0}
                size={currentSize}
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

                render={({ data }) => {
                  const items = data || []

                  return (
                    <StateProvider
                      render={({ searchState }) => {
                        const eventSelected = (searchState && searchState['filter.about.@type'] && searchState['filter.about.@type'].value === 'Event') || false
                        return (
                          eventSelected ? (
                            // <Calendar entries={items} />
                            <div>Calendar</div>
                          ) : (
                            <ResultList listItems={items} />
                          )
                        )
                      }}
                    />
                  )
                }}
              />

              {children}

              {iso3166 && (
                <div className="statisticsContent">
                  <iframe
                    title="countryStatistics"
                    src={
                      region
                        ? `https://oerworldmap.org/kibana/app/kibana#/dashboard/2f3f5ce0-7b07-11e9-a87c-776689b2b49d?embed=true&_g=()&_a=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'31e495b0-ad16-11e8-bc1a-bd36147d8400',key:feature.properties.location.address.addressCountry,negate:!f,params:(query:${iso3166},type:phrase),type:phrase,value:${iso3166}),query:(match:(feature.properties.location.address.addressCountry:(query:${iso3166},type:phrase)))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'31e495b0-ad16-11e8-bc1a-bd36147d8400',key:feature.properties.location.address.addressRegion,negate:!f,params:(query:${`${iso3166}.${region}`},type:phrase),type:phrase,value:${`${iso3166}.${region}`}),query:(match:(feature.properties.location.address.addressRegion:(query:${`${iso3166}.${region}`},type:phrase))))))`
                        : `https://oerworldmap.org/kibana/app/kibana#/dashboard/026c73e0-0444-11e9-b10a-2128e9354d61?embed=true&_g=()&_a=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'31e495b0-ad16-11e8-bc1a-bd36147d8400',key:feature.properties.location.address.addressCountry,negate:!f,params:(query:${iso3166},type:phrase),type:phrase,value:Germany),query:(match:(feature.properties.location.address.addressCountry:(query:${iso3166},type:phrase))))))`
                    }
                    height="800"
                    width="100%"
                  />
                </div>
              )}
            </div>

          </div>
        </div>


      </ReactiveBase>
    </div>

  )
}

ReactiveFilters.propTypes = {
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
  translate: PropTypes.func.isRequired,
  elasticsearchConfig: PropTypes.shape(
    {
      index: PropTypes.string,
      url: PropTypes.string,
    },
  ).isRequired,
  children: PropTypes.node.isRequired,
  initPins: PropTypes.bool.isRequired,
  iso3166: PropTypes.string,
  region: PropTypes.string,
}

ReactiveFilters.defaultProps = {
  iso3166: '',
  region: null,
}

export default withEmitter(withI18n(ReactiveFilters))
