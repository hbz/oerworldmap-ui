/* global document */
import React from 'react'
import PropTypes from 'prop-types'
import Tooltip from 'rc-tooltip'

import {
  ReactiveBase,
  ReactiveList,
  ToggleButton,
  DataSearch,
  MultiList,
  SelectedFilters,
  ReactiveComponent,
} from '@appbaseio/reactivesearch'

import withI18n from './withI18n'
import withEmitter from './withEmitter'
import ResultList from './ResultList'
import TotalEntries from './TotalEntries'
import Icon from './Icon'
import TogglePoints from './TogglePoints'
import Link from './Link'


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

const ReactiveFilters = ({
  emitter, translate, elasticsearchConfig, children, iso3166, region, initPins,
}) => {
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

  if (!iso3166) {
    subFilters.push({
      componentId: 'filter.about.location.address.addressCountry',
      dataField: 'about.location.address.addressCountry',
      showSearch: false,
      title: 'country',
    })
  }

  if (!region) {
    subFilters.push({
      componentId: 'filter.about.location.address.addressRegion',
      dataField: 'about.location.address.addressRegion',
      showSearch: false,
      title: 'filter.feature.properties.location.address.addressRegion',
    })
  }

  const filterIDs = ['q', 'filter.about.@type'].concat(subFilters.map(filter => filter.componentId))
  subFilters = subFilters.map((filter) => {
    filter.react = {
      and: filterIDs.filter(id => id !== filter.componentId),
    }
    return filter
  })

  let searchPlaceholder = translate('search.entries')
  if (iso3166) {
    // (filters && Object.keys(filters).includes('about.@type'))
    //   ? searchPlaceholder = translate('search.entries.country.filter', {
    //     country: translate(region ? `${iso3166}.${region}` : iso3166),
    //     // filter: translate(filters['about.@type'][0]).toLowerCase(),
    //   })
    //   :
    searchPlaceholder = translate('search.entries.country', { country: translate(region ? `${iso3166}.${region}` : iso3166) })
  // } else if (filters && Object.keys(filters).includes('about.@type')) {
  //   if (filters['about.@type'][0] === 'Policy') {
  //     searchPlaceholder = translate('search.entries.filter.policy')
  //   } else {
  //     searchPlaceholder = translate('search.entries.filter', {
  //       filter: translate(filters['about.@type'][0]).toLowerCase(),
  //     })
  //   }
  }


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

            <TogglePoints initPins={initPins} />

          </div>

          <ToggleButton
            className="typeSearch"
            componentId="filter.about.@type"
            dataField="about.@type"
            URLParams
            multiSelect={false}
            react={{
              and: filterIDs.filter(id => id !== 'filter.about.@type'),
            }}
            data={toggleButtons}
          />

          <div className="controls">
            <TotalEntries />

            <div>
              <button
                type="button"
                className="btn"
                onClick={() => {
                  const el = document.querySelector('.mainContent')
                  el.classList.add('listView')
                  el.classList.remove('Map')
                }}
              >
                <i className="fa fa-list" />
                &nbsp;
                List
              </button>
              <button
                type="button"
                className="btn"
                onClick={() => {
                  const el = document.querySelector('.mainContent')
                  el.classList.add('Map')
                  el.classList.remove('listView')
                  emitter.emit('resize')
                }}
              >
                <i className="fa fa-map" />
                &nbsp;
                Map
              </button>
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
                      <h2>Filters</h2>
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
                        Clear All
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
              <MultiList
                key={filter.componentId}
                className="FilterBox"
                {...filter}
                title={filter.title ? translate(filter.title) : translate(filter.componentId)}
                renderItem={
                  (filter.translate !== false)
                    ? ((label, count) => (
                      <span>
                        <span>{translate(label)}</span>
                        <span>{count}</span>
                      </span>
                    ))
                    : null}
                URLParams
              />
            ))}

          </aside>

          <button
            className="toggleList"
            type="button"
            onClick={(e) => {
              console.log(e.target)
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
                size={20}
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
                  return <ResultList listItems={items} />
                }}
              />

              {children}
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
