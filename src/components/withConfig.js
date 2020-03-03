import React from 'react'
import PropTypes from 'prop-types'

const withConfig = (BaseComponent) => {
  const ConfigComponent = (props, context) => {
    const { config } = context
    return (
      <BaseComponent
        config={config}
        {...props}
      />
    )
  }

  ConfigComponent.contextTypes = {
    config: PropTypes.objectOf(PropTypes.any),
  }

  return ConfigComponent
}

export default withConfig
