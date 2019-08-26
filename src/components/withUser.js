import React from 'react'
import PropTypes from 'prop-types'

const withUser = (BaseComponent) => {
  const UserComponent = (props, context) => {
    const { user } = context
    return (
      <BaseComponent
        user={user}
        {...props}
      />
    )
  }

  UserComponent.contextTypes = {
    user: PropTypes.objectOf(PropTypes.any),
  }

  return UserComponent
}

export default withUser
