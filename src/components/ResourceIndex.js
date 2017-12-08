import React from 'react'
import PropTypes from 'prop-types'

import Map from './Map'
import Filters from './Filters'
import Columns from './Columns'
import Column from './Column'
import ItemList from './ItemList'
import Pagination from './Pagination'
import FullModal from './FullModal'
import { Composer } from 'json-pointer-form'
import schema from '../json/schema.json'

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
  iso3166,
  map,
  view,
  children
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
      map={map}
    />

    {children}

    {view === 'addOrganization' &&
      <FullModal>
        <h2>Add Organization</h2>
      </FullModal>
    }

    {view === 'addService' &&
      <FullModal>
        <h2>Add Service</h2>
      </FullModal>
    }

    {view === 'addProject' &&
      <FullModal>
        <h2>Add Project</h2>
      </FullModal>
    }

    {view === 'addStory' &&
      <FullModal>
        <h2>Add Story</h2>
      </FullModal>
    }

    {view === 'addEvent' &&
      <FullModal>
        <h2>Add Event</h2>
      </FullModal>
    }

    {view === 'addPublication' &&
      <FullModal>
        <h2>Add Publication</h2>
      </FullModal>
    }

    {view === 'addTool' &&
      <FullModal>
        <h2>Add Tool</h2>
      </FullModal>
    }

  </div>

)

ResourceIndex.propTypes = {
  mapboxConfig: PropTypes.objectOf(PropTypes.any).isRequired,
  filters: PropTypes.objectOf(PropTypes.any).isRequired,
  aggregations: PropTypes.objectOf(PropTypes.any).isRequired,
  member: PropTypes.arrayOf(PropTypes.any).isRequired,
  size: PropTypes.string.isRequired,
  selected: PropTypes.string,
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
  view: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

ResourceIndex.defaultProps = {
  query: '',
  selected: '',
  map: null,
  nextPage: null,
  previousPage: null,
  iso3166: ''
}

export default withEmitter(ResourceIndex)
