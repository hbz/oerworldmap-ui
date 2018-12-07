import React from 'react'
import PropTypes from 'prop-types'

const withEmitter = (BaseComponent) => {

  const EmitterComponent = (props, context) => {
    const { emitter } = context
    return (
      <BaseComponent
        emitter={emitter}
        {...props}
      />
    )
  }

  EmitterComponent.contextTypes = {
    emitter: PropTypes.objectOf(PropTypes.any).isRequired
  }

  return EmitterComponent

}

export default withEmitter
