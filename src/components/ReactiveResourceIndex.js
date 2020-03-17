/* global localStorage */

import React from 'react'
import PropTypes from 'prop-types'

import ReactiveMap from './ReactiveMap'
import ReactiveFilters from './ReactiveFilters'

import withEmitter from './withEmitter'
import { urlParser } from '../common'

import '../styles/components/ResourceIndex.pcss'

const ReactiveResourceIndex = ({
  emitter,
  iso3166,
  map,
  _self,
  phrases,
  region,
  view,
}) => {
  const url = urlParser(_self)
  const home = url.pathname.endsWith('/resource/')
  const initPins = (typeof localStorage !== 'undefined' && localStorage.getItem('showPins') === 'true')

  return (
    <ReactiveFilters
      iso3166={iso3166}
      region={region}
      _self={_self}
      initPins={initPins}
      viewHash={view}
    >

      <ReactiveMap
        phrases={phrases}
        emitter={emitter}
        iso3166={iso3166}
        map={map}
        home={home}
        initPins={initPins}
        region={region}
      />
    </ReactiveFilters>
  )
}

ReactiveResourceIndex.propTypes = {
  iso3166: PropTypes.string,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
  map: PropTypes.string,
  _self: PropTypes.string.isRequired,
  phrases: PropTypes.objectOf(PropTypes.any).isRequired,
  region: PropTypes.string,
  view: PropTypes.string,
}

ReactiveResourceIndex.defaultProps = {
  map: null,
  iso3166: '',
  region: null,
  view: null,
}

export default withEmitter(ReactiveResourceIndex)
