import React from 'react'
import PropTypes from 'prop-types'

import FullModal from './FullModal'
import withI18n from './withI18n'

import '../styles/components/Export.pcss'

const Export = ({_self, _links, translate}) => (
  <FullModal className="Export" closeLink={_self}>
    <h2>{translate('export.export')}</h2>
    <div className="exportContent">
      {_links.refs.map(link => (
        <a key={link.uri} className="btn" href={link.uri}>{translate(link.type)}</a>
      ))}
    </div>
  </FullModal>
)

Export.propTypes = {
  _self: PropTypes.string.isRequired,
  _links: PropTypes.objectOf(PropTypes.any).isRequired,
  translate: PropTypes.func.isRequired
}

export default withI18n(Export)
