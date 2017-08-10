import React from 'react'
import PropTypes from 'prop-types'

import ItemList from './ItemList'
import translate from './translate'

const FeatureCollection = ({ translate, features, emitter }) => (
  <div>
    <h1>{translate('FeatureCollection.totalItems', { smart_count: features.length })}</h1>
    <ItemList listItems={features} emitter={emitter} />
  </div>
)

FeatureCollection.propTypes = {
  translate: PropTypes.func.isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
  features: PropTypes.arrayOf(PropTypes.any).isRequired
}

export default translate(FeatureCollection)
