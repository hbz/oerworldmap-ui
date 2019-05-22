import React from 'react'
import PropTypes from 'prop-types'

import withI18n from './withI18n'

import '../styles/components/Export.pcss'

const Export = ({_links, translate}) => (
  <div className="Export">
    <h2>{translate('export.export')}</h2>
    <div className="exportContent">
      {_links.refs.map(link => (
        <a key={link.uri} className="btn" href={link.uri}>{translate(link.type)}</a>
      ))}
    </div>
  </div>
)

Export.propTypes = {
  _self: PropTypes.string.isRequired,
  _links: PropTypes.objectOf(PropTypes.any).isRequired,
  translate: PropTypes.func.isRequired
}

export default withI18n(Export)
