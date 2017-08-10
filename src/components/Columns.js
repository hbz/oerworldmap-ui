import React from 'react'
import PropTypes from 'prop-types'

import '../styles/Columns.pcss'

const Columns = ({ children }) => (
  <aside className="Columns">
    {children}
  </aside>
)

Columns.propTypes = {
  children: PropTypes.node.isRequired
}

export default Columns
