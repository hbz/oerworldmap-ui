/* global localStorage */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Tooltip from 'rc-tooltip'
import withI18n from './withI18n'
import withEmitter from './withEmitter'

import '../styles/components/TogglePoints.pcss'

const TogglePoints = ({ translate, emitter, initPins }) => {
  const [showPins, setShowPins] = useState(initPins)

  return (
    <Tooltip
      overlay={(
        showPins ? translate('Hide pins') : translate('Show pins')
      )}
      placement="top"
      mouseEnterDelay={0.2}
    >
      <button
        type="button"
        className={`TogglePoints${showPins ? ' checked' : ''}`}
        onClick={() => {
          localStorage.setItem('showPins', !showPins)
          emitter.emit('showFeatures', !showPins)
          setShowPins(!showPins)
        }}
        title={translate(showPins ? 'Hide pins' : 'Show pins')}
      >
        <i aria-hidden="true" className="fa fa-map-marker" />
      </button>
    </Tooltip>
  )
}

TogglePoints.propTypes = {
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
  translate: PropTypes.func.isRequired,
  initPins: PropTypes.bool.isRequired,
}

export default withEmitter(withI18n(TogglePoints))
