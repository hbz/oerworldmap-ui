/* global localStorage */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import withI18n from './withI18n'
import withEmitter from './withEmitter'

import '../styles/components/TogglePoints.pcss'

const TogglePoints = ({ translate, emitter, initPins }) => {
  const [showPins, setShowPins] = useState(initPins)

  return (
    <button
      type="button"
      className={`TogglePoints${showPins ? ' checked' : ''}`}
      title={translate(showPins ? 'Hide pins' : 'Show pins')}
      onClick={() => {
        localStorage.setItem('showPins', !showPins)
        emitter.emit('showFeatures', !showPins)
        setShowPins(!showPins)
      }}
    >
      <i aria-hidden="true" className="fa fa-map-marker" />
    </button>
  )
}

TogglePoints.propTypes = {
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
  translate: PropTypes.func.isRequired,
  initPins: PropTypes.bool.isRequired,
}

export default withEmitter(withI18n(TogglePoints))
