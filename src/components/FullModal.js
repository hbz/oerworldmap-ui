/* global document */
import React from 'react'
import PropTypes from 'prop-types'

import Link from './Link'
import withEmitter from './withEmitter'

import '../styles/components/FullModal.pcss'

const FullModal = ({
  className, children, closeLink, emitter,
}) => (
  <div
    className={`FullModal ${className || ''}`}
    role="presentation"
    onClick={(e) => {
      const modalDialog = document.querySelector('.modalDialog')
      if (!modalDialog.contains(e.target)) {
        emitter.emit('navigate', closeLink || Link.home)
      }
    }}
  >
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
  closeLink: PropTypes.string,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
}

FullModal.defaultProps = {
  className: null,
  closeLink: null,
}

export default withEmitter(FullModal)
