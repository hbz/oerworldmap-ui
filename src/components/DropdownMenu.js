import React from 'react'

import '../styles/DropdownMenu.pcss'

const DropdownMenu = () => (
  <ul className="DropdownMenu">
    <li><a href="#share">Share <i className="fa fa-share" /></a></li>
    <li><a href="#export">Export <i className="fa fa-arrow-circle-o-right" /></a></li>
    <li><a href="#print">Print <i className="fa fa-file-text-o" /></a></li>
  </ul>
)

export default DropdownMenu