import React from 'react'
import PropTypes from 'prop-types'

import Link from './Link'

import '../styles/components/FullModal.pcss'

const FullModal = ({className, children, href}) => (
  <div className={`FullModal ${className || ''}`}>
    <div className="modalDialog">
      {children}
      <Link href={href || Link.home} className="closeModal">
        <i className="fa fa-close" />
      </Link>
    </div>
  </div>
)

FullModal.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  href: PropTypes.string
}

FullModal.defaultProps = {
  className: null,
  href: null
}

export default FullModal
