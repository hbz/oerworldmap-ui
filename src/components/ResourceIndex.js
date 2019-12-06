/* global localStorage */

import React from 'react'
import PropTypes from 'prop-types'

import {
  ReactiveBase,
  DataSearch,
  // ReactiveList,
  ReactiveComponent,
} from '@appbaseio/reactivesearch'

// import Filters from './Filters'
import Columns from './Columns'
import Column from './Column'
// import ResultList from './ResultList'
// import Pagination from './Pagination'
// import Calendar from './Calendar'
// import MapSimple from './MapSimple'
import Map from './Map'
import ReactiveFilters from './ReactiveFilters'

import withEmitter from './withEmitter'

const ResourceIndex = ({
  mapboxConfig,
  elasticsearchConfig,
  emitter,
  // query,
  // filters,
  // aggregations,
  // member,
  // size,
  // totalItems,
  // nextPage,
  // previousPage,
  // from,
  iso3166,
  map,
  view,
  children,
  _self,
  _links,
  className,
  // sort,
  // embedValue,
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

          <ReactiveFilters elasticsearchConfig={elasticsearchConfig} />

        </Column>
      </Columns>

      <Map
        phrases={phrases}
        aggregations={[]}
        emitter={emitter}
        mapboxConfig={mapboxConfig}
        iso3166={iso3166}
        map={map}
        home={home}
        _links={_links}
        initPins={isEmbed || typeof localStorage !== 'undefined' && localStorage.getItem('showPins') === 'true'}
        region={region}
        data={[]}
        // data={features}
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
  nextPage: PropTypes.string,
  previousPage: PropTypes.string,
  from: PropTypes.string.isRequired,
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
