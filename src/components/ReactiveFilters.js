/* global document */
import React from 'react'
import PropTypes from 'prop-types'

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

const toggleButtons = [
  { label: 'Organizaion', value: 'Organization' },
  { label: 'Service', value: 'Service' },
  { label: 'Person', value: 'Person' },
  { label: 'Project', value: 'Action' },
  { label: 'Event', value: 'Event' },
  { label: 'Story', value: 'Article' },
  { label: 'Publication', value: 'WebPage' },
  { label: 'Tool', value: 'Product' },
  { label: 'Policy', value: 'Policy' },
].map((btn) => {
  btn.label = (
    <span>
      <Icon type={btn.value} />
      {' '}
      {btn.label}
    </span>
  )
  return btn
})

const ReactiveFilters = ({
  emitter, translate, elasticsearchConfig, children, iso3166, region,
}) => {
  let subFilters = [
    {
      componentId: 'filter.about.keyword',
      dataField: 'about.keywords',
      showMissing: true,
      showSearch: true,
      title: 'Tag',
    },
    {
      componentId: 'filter.about.location.address.addressCountry',
      dataField: 'about.location.address.addressCountry',
      showSearch: false,
      title: 'Country',
      renderItem: (label, count) => (
        <span>
          <span>{translate(label)}</span>
          <span>{count}</span>
        </span>
      ),
    },
    {
      componentId: 'filter.about.location.address.addressRegion',
      dataField: 'about.location.address.addressRegion',
      showSearch: false,
      title: 'Region',
      renderItem: (label, count) => (
        <span>
          <span>{translate(label)}</span>
          <span>{count}</span>
        </span>
      ),
    },
    {
      componentId: 'filter.about.availableChannel.availableLanguage',
      dataField: 'about.availableChannel.availableLanguage',
      showSearch: false,
      title: 'Language',
      renderItem: (label, count) => (
        <span>
          <span>{translate(label)}</span>
          <span>{count}</span>
        </span>
      ),
    },
    {
      componentId: 'filter.about.additionalType.@id',
      dataField: 'about.additionalType.@id',
      showSearch: false,
      title: 'Sub-Categories',
      renderItem: (label, count) => (
        <span>
          <span>{label.split('#').slice(-1).pop()}</span>
          <span>{count}</span>
        </span>
      ),
    },
    {
      componentId: 'filter.about.audience.@id',
      dataField: 'about.audience.@id',
      showSearch: false,
      title: 'Audience',
      renderItem: (label, count) => (
        <span>
          <span>{label.split('/').slice(-1).pop()}</span>
          <span>{count}</span>
        </span>
      ),
    },
    {
      componentId: 'filter.about.primarySector.@id',
      dataField: 'about.primarySector.@id',
      showSearch: false,
      title: 'Primary Sector',
      renderItem: (label, count) => (
        <span>
          <span>{label.split('#').slice(-1).pop()}</span>
          <span>{count}</span>
        </span>
      ),
    },
    {
      componentId: 'filter.about.secondarySector.@id',
      dataField: 'about.secondarySector.@id',
      showSearch: false,
      title: 'Secondary Sector',
      renderItem: (label, count) => (
        <span>
          <span>{label.split('#').slice(-1).pop()}</span>
          <span>{count}</span>
        </span>
      ),
    },
    {
      componentId: 'filter.about.award',
      dataField: 'about.award',
      showSearch: false,
      title: 'Award',
      renderItem: (label, count) => (
        <span>
          <span>
            {label.split('/').slice(-1).pop().replace('.png', '')
              .replace('.jpg', '')}

          </span>
          <span>{count}</span>
        </span>
      ),
    },
    {
      componentId: 'filter.about.license.@id',
      dataField: 'about.license.@id',
      showSearch: false,
      title: 'License',
      renderItem: (label, count) => (
        <span>
          <span>{label.split('#').slice(-1).pop()}</span>
          <span>{count}</span>
        </span>
      ),
    },
    {
      componentId: 'filter.about.about.@id',
      dataField: 'about.about.@id',
      showSearch: false,
      title: 'Subject',
      renderItem: (label, count) => (
        <span>
          <span>{label.split('/').slice(-1).pop()}</span>
          <span>{count}</span>
        </span>
      ),
    },
    {
      componentId: 'filter.about.activityField.@id',
      dataField: 'about.activityField.@id',
      showSearch: false,
      title: 'Field of Activity',
    },
  ]

  const filterIDs = ['q', 'filter.about.@type'].concat(subFilters.map(filter => filter.componentId))
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
          <DataSearch
            className="nameSearch"
            componentId="q"
            dataField={['about.name.*', 'about.description.*']}
            placeholder="Search the OER"
            // URLParams
            react={{
              and: filterIDs.filter(id => id !== 'q'),
            }}
          />

          <ToggleButton
            className="typeSearch"
            componentId="filter.about.@type"
            dataField="about.@type"
            // URLParams
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
                  size: 99, // CHANGE TO 9999
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
                // URLParams
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
                  let query = null

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
}

export default withEmitter(withI18n(ReactiveFilters))
