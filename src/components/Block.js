import React from 'react'
import PropTypes from 'prop-types'

const Block = ({ title, children, className }) => (
  <div className={`Block ${className}`}>
    <h3>{title}</h3>
    {children}
  </div>
)

Block.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}


Block.defaultProps = {
  className: ''
}

export default Block
