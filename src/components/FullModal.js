import React from 'react'
import PropTypes from 'prop-types'

import Link from './Link'

import '../styles/components/FullModal.pcss'

const FullModal = ({className, children}) => (
  <div className={`FullModal ${className || ''}`}>
    <div className="modalDialog">
      {children}
      <Link href={Link.home} className="closeModal">
        <i className="fa fa-close" />
      </Link>
    </div>
  </div>
)

FullModal.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

FullModal.defaultProps = {
  className: null,
}

export default FullModal
