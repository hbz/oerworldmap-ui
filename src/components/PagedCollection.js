import React from 'react'
import ItemList from './ItemList'

import translate from './translate'

const PagedCollection = ({translate, member, totalItems}) => (
  <div>
    <h1>{translate('PagedCollection.totalItems', {smart_count: 6})}</h1>
    <ItemList listItems={member} />
  </div>
)

export default translate(PagedCollection)
