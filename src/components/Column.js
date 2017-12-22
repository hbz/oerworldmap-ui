import React from 'react'
import PropTypes from 'prop-types'

const Column = ({ children, className }) => (
  <div className={`column ${className}`}>

    <div className="columnContent">
      {children}
    </div>

  </div>
)

Column.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

Column.defaultProps = {
  className: null,
}

export default Column
