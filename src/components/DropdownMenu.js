/* global window */
import React from 'react'
import PropTypes from 'prop-types'
import withi18n from './withi18n'

import '../styles/components/DropdownMenu.pcss'

const DropdownMenu = ( {translate} ) => (
  <ul className="DropdownMenu">
    <li><a href="#share">{translate('DropdownMenu.share')} <i className="fa fa-share" /></a></li>
    <li><a href="#export">{translate('DropdownMenu.export')} <i className="fa fa-arrow-circle-o-right" /></a></li>
    <li>
      <button onClick={() => {
        window.print()
      }}
      >
        {translate('DropdownMenu.print')} <i className="fa fa-file-text-o" />
      </button>
    </li>
  </ul>
)

DropdownMenu.propTypes = {
  translate: PropTypes.func.isRequired
}

export default withi18n(DropdownMenu)