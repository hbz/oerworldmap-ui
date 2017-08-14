import React from 'react'
import PropTypes from 'prop-types'

import ItemList from './ItemList'
import translate from './translate'

const PagedCollection = ({ translate, member, emitter }) => (
  <div>
    <h1>{translate('PagedCollection.totalItems', { smart_count: member.length })}</h1>
    <ItemList listItems={member} emitter={emitter} />
  </div>
)

PagedCollection.propTypes = {
  translate: PropTypes.func.isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
  member: PropTypes.arrayOf(PropTypes.any).isRequired
}

export default translate(PagedCollection)
