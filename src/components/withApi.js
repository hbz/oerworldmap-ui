import React from 'react'
import PropTypes from 'prop-types'

const withApi = (BaseComponent) => {

  const ApiComponent = (props, context) => {
    const { api } = context
    return (
      <BaseComponent
        api={api}
        {...props}
      />
    )
  }

  ApiComponent.contextTypes = {
    api: PropTypes.objectOf(PropTypes.any).isRequired
  }

  return ApiComponent

}

export default withApi
