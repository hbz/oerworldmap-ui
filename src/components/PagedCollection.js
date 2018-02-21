import React from 'react'
import PropTypes from 'prop-types'

import withI18n from './withI18n'
import ShareExport from './ShareExport'

import '../styles/components/PagedCollection.pcss'

const PagedCollection = ({ translate, member, children, _self, _links, view }) => (
  member &&
  <section className="PagedCollection pages">
    <div className="PagedCollectionHeader">
      <div className="counter">
        {translate('ResourceIndex.index.results', { smart_count: member.length })},&nbsp;
        {translate('ResourceIndex.index.orderedBy')}
        {children}
      </div>
      <ShareExport _self={_self} _links={_links} view={view} />
    </div>
  </section>
)

PagedCollection.propTypes = {
  translate: PropTypes.func.isRequired,
  member: PropTypes.arrayOf(PropTypes.any).isRequired
}

export default withI18n(PagedCollection)
