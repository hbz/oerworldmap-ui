import React from 'react'
import PropTypes from 'prop-types'

import Link from './Link'

import '../styles/components/FullModal.pcss'

const FullModal = ({className, children, closeLink}) => (
  <div className={`FullModal ${className || ''}`}>
    <div className="modalDialog">
      {children}
      <Link href={closeLink || Link.home} className="closeModal">
        &times;
      </Link>
    </div>
  </div>
)

FullModal.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  closeLink: PropTypes.string
}

FullModal.defaultProps = {
  className: null,
  closeLink: null
}

export default FullModal
