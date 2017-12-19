import React from 'react'
import PropTypes from 'prop-types'
import translate from './translate'

import '../styles/components/DropdownMenu.pcss'

const DropdownMenu = ( {translate} ) => (
  <ul className="DropdownMenu">
    <li><a href="#share">{translate('DropdownMenu.share')} <i className="fa fa-share" /></a></li>
    <li><a href="#export">{translate('DropdownMenu.export')} <i className="fa fa-arrow-circle-o-right" /></a></li>
    <li><a href="#print">{translate('DropdownMenu.print')} <i className="fa fa-file-text-o" /></a></li>
  </ul>
)

DropdownMenu.propTypes = {
  translate: PropTypes.func.isRequired
}

export default translate(DropdownMenu)