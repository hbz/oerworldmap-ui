import React from 'react'
import PropTypes from 'prop-types'
import { Composer } from 'json-pointer-form'

import Map from './Map'
import Filters from './Filters'
import Columns from './Columns'
import Column from './Column'
import ItemList from './ItemList'
import Pagination from './Pagination'
import FullModal from './FullModal'
import schema from '../json/schema.json'
import translate from './translate'
import Icon from './Icon'
import Export from './Export'
import Share from './Share'

import withEmitter from './withEmitter'

const getLabel = (translate, value) => {
  if (!value) return ''
  if (typeof value === "object") {
    return (
      <span>
        <Icon type={value["@type"]} />
        &nbsp;{value["name"] ? translate(value["name"]) : value["@id"]}
      </span>
    )
  } else {
    return translate(`properties.${value}`)
  }
}

const ResourceIndex = ({
  mapboxConfig,
  emitter,
  translate,
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
  className
}) => (
  <div className={`ResourceIndex ${className ? className:''}`}>
    {children}

    <Columns show={!!query || Object.keys(filters).length > 0} >
      <Column>
        <Filters
          query={query}
          filters={filters}
          aggregations={aggregations}
          member={member}
          size={Number.isInteger(+size) ? +size : 10}
        />
        <div className="wrapper-ItemList-Pagination">
          <ItemList listItems={member} />
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

    {view === 'addOrganization' &&
      <FullModal>
        <h2>Add Organization</h2>
        <Composer
          value={{'@type': 'Organization'}}
          schema={schema}
          submit={data => emitter.emit('submit', {url: '/resource/', data})}
          getOptions={(term, schema, callback) => emitter.emit('getOptions', {term, schema, callback})}
          getLabel={value => getLabel(translate, value)}
          submitLabel={translate('properties.submitLabel')}
        />
      </FullModal>
    }

    {view === 'addService' &&
      <FullModal>
        <h2>Add Service</h2>
        <Composer
          value={{'@type': 'Service'}}
          schema={schema}
          submit={data => emitter.emit('submit', {url: '/resource/', data})}
          getOptions={(term, schema, callback) => emitter.emit('getOptions', {term, schema, callback})}
          getLabel={value => getLabel(translate, value)}
          submitLabel={translate('properties.submitLabel')}
        />
      </FullModal>
    }

    {view === 'addProject' &&
      <FullModal>
        <h2>Add Project</h2>
        <Composer
          value={{'@type': 'Action'}}
          schema={schema}
          submit={data => emitter.emit('submit', {url: '/resource/', data})}
          getOptions={(term, schema, callback) => emitter.emit('getOptions', {term, schema, callback})}
          getLabel={value => getLabel(translate, value)}
          submitLabel={translate('properties.submitLabel')}
        />
      </FullModal>
    }

    {view === 'addStory' &&
      <FullModal>
        <h2>Add Story</h2>
        <Composer
          value={{'@type': 'Article'}}
          schema={schema}
          submit={data => emitter.emit('submit', {url: '/resource/', data})}
          getOptions={(term, schema, callback) => emitter.emit('getOptions', {term, schema, callback})}
          getLabel={value => getLabel(translate, value)}
          submitLabel={translate('properties.submitLabel')}
        />
      </FullModal>
    }

    {view === 'addEvent' &&
      <FullModal>
        <h2>Add Event</h2>
        <Composer
          value={{'@type': 'Event'}}
          schema={schema}
          submit={data => emitter.emit('submit', {url: '/resource/', data})}
          getOptions={(term, schema, callback) => emitter.emit('getOptions', {term, schema, callback})}
          getLabel={value => getLabel(translate, value)}
          submitLabel={translate('properties.submitLabel')}
        />
      </FullModal>
    }

    {view === 'addPublication' &&
      <FullModal>
        <h2>Add Publication</h2>
        <Composer
          value={{'@type': 'WebPage'}}
          schema={schema}
          submit={data => emitter.emit('submit', {url: '/resource/', data})}
          getOptions={(term, schema, callback) => emitter.emit('getOptions', {term, schema, callback})}
          getLabel={value => getLabel(translate, value)}
          submitLabel={translate('properties.submitLabel')}
        />
      </FullModal>
    }

    {view === 'addTool' &&
      <FullModal>
        <h2>Add Tool</h2>
        <Composer
          value={{'@type': 'Product'}}
          schema={schema}
          submit={data => emitter.emit('submit', {url: '/resource/', data})}
          getOptions={(term, schema, callback) => emitter.emit('getOptions', {term, schema, callback})}
          getLabel={value => getLabel(translate, value)}
          submitLabel={translate('properties.submitLabel')}
        />
      </FullModal>
    }

    {view === 'share' &&
      <Share _self={_self} />
    }

    {view === 'export' &&
      <Export _links={_links} />
    }

  </div>

)

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
  translate: PropTypes.func.isRequired,
  _self: PropTypes.string.isRequired,
  _links: PropTypes.objectOf(PropTypes.any).isRequired,
  className: PropTypes.string,
}

ResourceIndex.defaultProps = {
  query: '',
  map: null,
  nextPage: null,
  previousPage: null,
  iso3166: '',
  view: '',
  className: null,
}




export default withEmitter(translate(ResourceIndex))
