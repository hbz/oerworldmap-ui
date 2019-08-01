/* global localStorage */

import React from 'react'
import PropTypes from 'prop-types'

import Map from './Map'
import Filters from './Filters'
import Columns from './Columns'
import Column from './Column'
import ResultList from './ResultList'
import Pagination from './Pagination'
import Calendar from './Calendar'

import withEmitter from './withEmitter'

const ResourceIndex = ({
  mapboxConfig,
  emitter,
  query,
  filters,
  aggregations,
  member,
  size,
  totalItems,
  currentPage,
  pages,
  nextPage,
  previousPage,
  from,
  features,
  iso3166,
  map,
  view,
  children,
  _self,
  _links,
  className,
  sort,
  embedValue,
  phrases,
  isEmbed,
  region,
}) => {
  const home = _self.endsWith('/resource/?features=true')

  return (
    <div className={`ResourceIndex ${className || ''}`}>
      {children}

      <Columns show={!home || view.length > 0} country={iso3166}>
        <Column>
          <Filters
            query={query}
            filters={filters}
            aggregations={aggregations}
            totalItems={totalItems}
            size={Number.isInteger(+size) ? +size : 20}
            sort={sort}
            _self={_self}
            _links={_links}
            view={view}
            embedValue={embedValue}
            country={iso3166}
            isEmbed={isEmbed}
            region={region}
            initPins={isEmbed || typeof localStorage !== 'undefined' && localStorage.getItem('showPins') === 'true'}
          />
          {filters['about.@type'] && filters['about.@type'].includes('Event') ? (
            <div className="wrapper-Calendar">
              <Calendar entries={aggregations['date_histogram#about.startDate.GTE'].buckets} />
            </div>
          ) : (
            <div className="wrapper-ItemList-Pagination">
              <ResultList
                listItems={member.map(member => member.about)}
              />

              <Pagination
                totalItems={totalItems}
                currentPage={currentPage}
                pages={pages}
                nextPage={nextPage}
                previousPage={previousPage}
                from={from}
                size={size}
              />
            </div>
          )}
        </Column>
      </Columns>

      <Map
        phrases={phrases}
        aggregations={aggregations}
        emitter={emitter}
        mapboxConfig={mapboxConfig}
        features={features}
        iso3166={iso3166}
        map={map}
        home={home}
        initPins={isEmbed || typeof localStorage !== 'undefined' && localStorage.getItem('showPins') === 'true'}
        region={region}
      />

    </div>
  )
}

ResourceIndex.propTypes = {
  mapboxConfig: PropTypes.objectOf(PropTypes.any).isRequired,
  filters: PropTypes.objectOf(PropTypes.any).isRequired,
  aggregations: PropTypes.objectOf(PropTypes.any).isRequired,
  member: PropTypes.arrayOf(PropTypes.any).isRequired,
  size: PropTypes.string.isRequired,
  totalItems: PropTypes.number.isRequired,
  currentPage: PropTypes.string.isRequired,
  pages: PropTypes.arrayOf(PropTypes.string).isRequired,
  nextPage: PropTypes.string,
  previousPage: PropTypes.string,
  from: PropTypes.string.isRequired,
  features: PropTypes.objectOf(PropTypes.any).isRequired,
  iso3166: PropTypes.string,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
  query: PropTypes.string,
  map: PropTypes.string,
  view: PropTypes.string,
  children: PropTypes.node,
  _self: PropTypes.string.isRequired,
  _links: PropTypes.objectOf(PropTypes.any).isRequired,
  className: PropTypes.string,
  sort: PropTypes.string,
  embedValue: PropTypes.string,
  phrases: PropTypes.objectOf(PropTypes.any).isRequired,
  isEmbed: PropTypes.bool.isRequired,
  region: PropTypes.string,
}

ResourceIndex.defaultProps = {
  query: '',
  map: null,
  nextPage: null,
  previousPage: null,
  iso3166: '',
  view: '',
  className: null,
  sort: '',
  embedValue: null,
  children: null,
  region: null,
}

export default withEmitter(ResourceIndex)
