import React from 'react'
import PropTypes from 'prop-types'
import withEmitter from './withEmitter'

import '../styles/components/FullModal.pcss'

const closeModal = (e, emitter) => {
  e.stopPropagation()
  if (e.target.classList.contains('FullModal') ||
    e.target.classList.contains('closeModal')) {
    emitter.emit('navigate', '__back__')
  }
}

const FullModal = ({className, emitter, children}) => (
  <div
    className={`FullModal ${className || ''}`}
    role="button"
    tabIndex="-1"
    onClick={(e) => closeModal(e, emitter)}
    onKeyDown={(e) => {
      if (e.keyCode === 27) {
        e.target.click()
      }
    }}
  >
    <div className="modalDialog">
      {children}
      <span
        className="closeModal"
        onClick={(e) => closeModal(e, emitter)}
        onKeyDown={(e) => {
          if (e.keyCode === 27) {
            e.target.click()
          }
        }}
        role="button"
        tabIndex="0"
      >
        <i className="fa fa-close" />
      </span>
    </div>
  </div>
)

FullModal.propTypes = {
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

FullModal.defaultProps = {
  className: null,
}

export default withEmitter(FullModal)
