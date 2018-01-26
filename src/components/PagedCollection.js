import React from 'react'
import PropTypes from 'prop-types'

import withI18n from './withI18n'
import DropdownButton from './DropdownButton'

import '../styles/components/PagedCollection.pcss'

const PagedCollection = ({ translate, member, children }) => (
  member &&
  <section className="PagedCollection pages">
    <div className="PagedCollectionHeader">
      <div className="counter">
        {translate('PagedCollection.totalItems', { smart_count: member.length })},&nbsp;
        {translate('PagedCollection.orderBy')}
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

export default withI18n(PagedCollection)
