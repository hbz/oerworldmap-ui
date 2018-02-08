/* global window */
import React from 'react'
import PropTypes from 'prop-types'
import withI18n from './withI18n'

import '../styles/components/DropdownMenu.pcss'

const DropdownMenu = ( {translate} ) => (
  <ul className="DropdownMenu">
    <li><a href="#share">{translate('share')} <i className="fa fa-share" /></a></li>
    <li><a href="#export">{translate('export')} <i className="fa fa-arrow-circle-o-right" /></a></li>
    <li>
      <button onClick={() => {
        window.print()
      }}
      >
        {translate('print')} <i className="fa fa-file-text-o" />
      </button>
    </li>
  </ul>
)

DropdownMenu.propTypes = {
  translate: PropTypes.func.isRequired
}

export default withI18n(DropdownMenu)
