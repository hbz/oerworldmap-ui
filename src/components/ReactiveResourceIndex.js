/* global localStorage */

import React from 'react'
import PropTypes from 'prop-types'

import ReactiveMap from './ReactiveMap'
import ReactiveFilters from './ReactiveFilters'

import withEmitter from './withEmitter'

import '../styles/components/ResourceIndex.pcss'

const ResourceIndex = ({
  mapboxConfig,
  elasticsearchConfig,
  emitter,
  iso3166,
  map,
  _self,
  _links,
  phrases,
  isEmbed,
  region,
}) => {
  const home = _self.endsWith('/resource/?features=true')
  const initPins = isEmbed || (typeof localStorage !== 'undefined' && localStorage.getItem('showPins') === 'true')

  return (
    <ReactiveFilters
      iso3166={iso3166}
      region={region}
      elasticsearchConfig={elasticsearchConfig}
      initPins={initPins}
    >

      <ReactiveMap
        phrases={phrases}
        aggregations={[]}
        emitter={emitter}
        mapboxConfig={mapboxConfig}
        iso3166={iso3166}
        map={map}
        home={home}
        _links={_links}
        initPins={initPins}
        region={region}
        data={[]}
      />
    </ReactiveFilters>
  )
}

ResourceIndex.propTypes = {
  mapboxConfig: PropTypes.objectOf(PropTypes.any).isRequired,
  iso3166: PropTypes.string,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
  map: PropTypes.string,
  _self: PropTypes.string.isRequired,
  _links: PropTypes.objectOf(PropTypes.any).isRequired,
  phrases: PropTypes.objectOf(PropTypes.any).isRequired,
  isEmbed: PropTypes.bool.isRequired,
  region: PropTypes.string,
  elasticsearchConfig: PropTypes.shape(
    {
      index: PropTypes.string,
      url: PropTypes.string,
    },
  ).isRequired,
}

ResourceIndex.defaultProps = {
  map: null,
  iso3166: '',
  region: null,
}

export default withEmitter(ResourceIndex)
