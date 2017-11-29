import React from 'react'
import PropTypes from 'prop-types'

import Map from './Map'
import Filters from './Filters'
import Columns from './Columns'
import Column from './Column'
import ItemList from './ItemList'
import Pagination from './Pagination'

import withEmitter from './withEmitter'

const defaultAggregations = {
  'about.@type': {
    'buckets': [
      {key: 'Product'},
      {key: 'Organization'},
      {key: 'CustomerRelationship'},
      {key: 'ContactPoint'}
    ]
  }
}

const ResourceIndex = (props) => (
  <pre>{JSON.stringify(props, null, 2)}</pre>
  /*
  <Columns>
    <Column>
      <Filters
        query={data['query'] || ''}
        filters={data['filters'] || {'about.@type': [data.about['@type']]}}
        aggregations={data['aggregations'] || defaultAggregations}
        extended={data['@type'] === 'PagedCollection'}
        member={data.member || null}
        size={parseInt(data.size) || 10}
      />
      {data['@type'] === 'PagedCollection' &&
      <div className="ColumnList">
        <ItemList listItems={data.member} selected={route.hash} />
        <Pagination
          totalItems={data.totalItems}
          currentPage={data.currentPage}
          pages={data.pages}
          nextPage={data.nextPage}
          previousPage={data.previousPage}
          from={data.from}
          size={data.size}
        />
      </div>
      }
    </Column>
  </Columns>

  <Map
    aggregations={data.aggregations}
    emitter={emitter}
    mapboxConfig={mapboxConfig}
    features={features}
    iso3166={data.iso3166}
    route={route}
  />
  */
)

export default withEmitter(ResourceIndex)
