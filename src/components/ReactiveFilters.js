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

const ReactiveFilters = ({ emitter, translate, elasticsearchConfig }) => {
  const isReady = false

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
      renderItem: (label, count, isSelected) => (
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
      renderItem: (label, count, isSelected) => (
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
      renderItem: (label, count, isSelected) => (
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
      renderItem: (label, count, isSelected) => (
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
      renderItem: (label, count, isSelected) => (
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
      renderItem: (label, count, isSelected) => (
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
      renderItem: (label, count, isSelected) => (
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
      renderItem: (label, count, isSelected) => (
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
      renderItem: (label, count, isSelected) => (
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
      renderItem: (label, count, isSelected) => (
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
  ]

  // const sendData = (data) => {
  //   if (this.isReady) {
  //     emitter.emit('mapData', { features, aggregations: agg })
  //   } else {
  //     setTimeout(() => {
  //       sendData(data)
  //     }, 100)
  //   }
  // }

  return (
    <div
      className="ReactiveFilters"
      style={{ overflow: 'auto', paddingRight: '10px' }}
    >
      <ReactiveBase
        app={elasticsearchConfig.index}
        url={elasticsearchConfig.url}
      >

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

        <SelectedFilters />

        <ReactiveComponent
          componentId="myCountryPicker"
          defaultQuery={() => ({
            size: 9999,
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
          })}
          onData={({ aggregations, data }) => {
            const features = (data && data.map(item => item.feature).filter(el => typeof el !== 'undefined')) || []
            const agg = (aggregations && aggregations.color && aggregations.color.buckets || [])
            emitter.emit('mapData', { features, aggregations: agg })
            // sendData({ features, aggregations: agg })
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

        {/* <ReactiveList
        className="SearchResult"
        componentId="SearchResult"
        title="Results"
        dataField="@type"
        showResultStats={false}
        from={0}
        size={20}
        pagination
        loader={(
          <div className="loading">
            <h1>Loading Results...</h1>
            <div className="loader" />
          </div>
        )}
        showLoader
        react={{
          and: filterIDs,
        }}

        render={({ data, resultStats }) => (
          <>
            <h4>
              {resultStats.numberOfResults}
              {' '}
              Found
            </h4>
            <SelectedFilters />
            <br />
            <div className="columns">
              <aside
                style={{
                  display: resource ? 'none' : '',
                }}
              >
                {subFilters.map(filter => (
                  <MultiList
                    key={filter.componentId}
                    className="FilterBox"
                    {...filter}
                    URLParams
                  />
                ))}

              </aside>
              <main
                style={{
                  display: resource ? 'none' : '',
                }}
              >
                <ResultList
                  items={data}
                  onClickItem={(item) => {
                    setState({ resource: item })
                  }}
                />
              </main>
            </div>

            {resource
              && (
                <ResourceView
                  resource={resource}
                  onClose={() => {
                    setState({ resource: null })
                  }}
                />
              )
            }
          </>
        )
        }
      /> */}

      </ReactiveBase>
    </div>

  )
}

ReactiveFilters.propTypes = {

}

export default withEmitter(withI18n(ReactiveFilters))
