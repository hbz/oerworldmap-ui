import React from 'react'
import PropTypes from 'prop-types'

const Column = ({ children }) => (
  <div className='column'>

    <div className='columnContent'>
      {children}
    </div>

    <div className='toggleColumn'>
      <i className='fa fa-fw fa-chevron-right' />
    </div>

  </div>
)

Column.PropTypes = {
  children: PropTypes.node.isRequired
}

export default Column
