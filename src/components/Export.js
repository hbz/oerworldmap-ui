import React from 'react'
import PropTypes from 'prop-types'

import FullModal from './FullModal'
import withI18n from './withI18n'
import Link from './Link'

import '../styles/components/Export.pcss'

const Export = ({_links, translate}) => (
  <FullModal className="Export">
    <h2>{translate('Export this Resource')}</h2>
    <div className="exportContent">
      {_links.refs.map(link => (
        <Link key={link.uri} className="btn" href={link.uri}>{translate(link.type)}</Link>
      ))}
    </div>
  </FullModal>
)

Export.propTypes = {
  _links: PropTypes.objectOf(PropTypes.any).isRequired,
  translate: PropTypes.func.isRequired
}

export default withI18n(Export)
