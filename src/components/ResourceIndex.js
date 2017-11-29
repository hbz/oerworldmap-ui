import React from 'react'
import PropTypes from 'prop-types'

import Map from './Map'
import Filters from './Filters'
import Columns from './Columns'
import Column from './Column'
import ItemList from './ItemList'
import Pagination from './Pagination'

import withEmitter from './withEmitter'

const ResourceIndex = ({
  mapboxConfig,
  emitter,
  query,
  filters,
  aggregations,
  member,
  size,
  selected,
  totalItems,
  currentPage,
  pages,
  nextPage,
  previousPage,
  from,
  features,
  iso3166
}) => (
  <div>
    <Columns>
      <Column>
        <Filters
          query={query}
          filters={filters}
          aggregations={aggregations}
          member={member}
          size={+size || 10}
        />
        <div className="ColumnList">
          <ItemList listItems={member} selected={selected} />
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
      </Column>
    </Columns>

    <Map
      aggregations={aggregations}
      emitter={emitter}
      mapboxConfig={mapboxConfig}
      features={features}
      iso3166={iso3166}
      route={{params: {map: '-44.67805,43.07440,2'}}}
    />
  </div>

)

ResourceIndex.propTypes = {
  mapboxConfig: PropTypes.objectOf(PropTypes.any).isRequired,
  query: PropTypes.string,
  filters: PropTypes.objectOf(PropTypes.any).isRequired,
  aggregations: PropTypes.objectOf(PropTypes.any).isRequired,
  member: PropTypes.arrayOf(PropTypes.any).isRequired,
  size: PropTypes.string.isRequired,
  selected: PropTypes.string,
  totalItems: PropTypes.string.isRequired,
  currentPage: PropTypes.string.isRequired,
  pages: PropTypes.arrayOf(PropTypes.string).isRequired,
  nextPage: PropTypes.string.isRequired,
  previousPage: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.any).isRequired,
  iso3166: PropTypes.string.isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
  query: PropTypes.string.isRequired,
}

ResourceIndex.defaultProps = {
  query: '',
  selected: ''
}

export default withEmitter(ResourceIndex)
