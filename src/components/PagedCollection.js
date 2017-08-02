import React from 'react'
import PropTypes from 'prop-types'

import ItemList from './ItemList'
import translate from './translate'

const PagedCollection = ({ translate, member, totalItems }) => (
  <div>
    <h1>{translate('PagedCollection.totalItems', { smart_count: totalItems })}</h1>
    <ItemList listItems={member} />
  </div>
)

PagedCollection.propTypes = {
  translate: PropTypes.func.isRequired,
  member: PropTypes.objectOf(PropTypes.any).isRequired,
  totalItems: PropTypes.number.isRequired
}

export default translate(PagedCollection)
