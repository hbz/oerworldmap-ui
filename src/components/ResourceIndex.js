import React from 'react'
import PropTypes from 'prop-types'

import Map from './Map'
import Filters from './Filters'
import Columns from './Columns'
import Column from './Column'
import ItemList from './ItemList'
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
  embedValue
}) => {
  const countProp = ('about.objectIn.@type' in filters)
    ? filters['about.objectIn.@type'][0]
    : undefined

  const home = _self.endsWith('/resource/?features=true')

  return (
    <div className={`ResourceIndex ${className ? className:''}`}>
      {children}

      <Columns show={!home || view.length > 0} >
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
          />
          {filters['about.@type'] && filters['about.@type'].includes('Event') ? (
            <div className="wrapper-Calendar">
              <Calendar entries={aggregations['date_histogram#about.startDate.GTE'].buckets} />
            </div>
          ) : (
            <div className="wrapper-ItemList-Pagination">
              <ItemList
                listItems={member.map(member => member.about)}
                count={countProp
                  ? entry => entry.objectIn.filter(objectIn => objectIn['@type'] === countProp).length
                  : undefined
                }
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
        aggregations={aggregations}
        emitter={emitter}
        mapboxConfig={mapboxConfig}
        features={features}
        iso3166={iso3166}
        map={map}
        home={home}
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
  children: PropTypes.node.isRequired,
  _self: PropTypes.string.isRequired,
  _links: PropTypes.objectOf(PropTypes.any).isRequired,
  className: PropTypes.string,
  sort: PropTypes.string,
  embedValue: PropTypes.string
}

ResourceIndex.defaultProps = {
  query: '',
  map: null,
  nextPage: null,
  previousPage: null,
  iso3166: '',
  view: '',
  className: null,
  sort: "",
  embedValue: null
}




export default withEmitter(ResourceIndex)
