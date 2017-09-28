import React from 'react'
import PropTypes from 'prop-types'

import translate from './translate'
import DropdownButton from './DropdownButton'

import '../styles/PagedCollection.pcss'

const PagedCollection = ({ translate, member, children }) => (
  member &&
  <section className="PagedCollection pages">
    <div className="PagedCollectionHeader">
      <div className="counter">
        {translate('PagedCollection.totalItems', { smart_count: member.length })} shown,
        {children}
      </div>
      <DropdownButton />
    </div>
  </section>
)

PagedCollection.propTypes = {
  translate: PropTypes.func.isRequired,
  member: PropTypes.arrayOf(PropTypes.any).isRequired
}

export default translate(PagedCollection)
