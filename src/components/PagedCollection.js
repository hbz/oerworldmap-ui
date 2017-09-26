import React from 'react'
import PropTypes from 'prop-types'

import ItemList from './ItemList'
import translate from './translate'
import Pagination from './Pagination'
import DropdownButton from './DropdownButton'

import '../styles/PagedCollection.pcss'

const PagedCollection = ({ translate, member }) => (
  <section className="PagedCollection pages">
    {/* <h1>{translate('PagedCollection.totalItems', { smart_count: member.length })}</h1> */}
    <div className="PagedCollectionHeader">
      <div className="counter">
        {member.length} entries shown
      </div>
      <DropdownButton />
    </div>
    {/* Add read values */}
    <ItemList listItems={member} />
    <Pagination current={2} total={member.lenght || 10} /> 
  </section>
)

PagedCollection.propTypes = {
  translate: PropTypes.func.isRequired,
  member: PropTypes.arrayOf(PropTypes.any).isRequired
}

export default translate(PagedCollection)
