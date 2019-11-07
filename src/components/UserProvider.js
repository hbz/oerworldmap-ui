/* global window */

import React from 'react'
import PropTypes from 'prop-types'

import { isNode } from '../common'

class UserProvider extends React.Component {
  getChildContext() {
    return { user: isNode ? undefined : window.__APP_USER__ }
  }

  render() {
    const { children } = this.props
    return React.Children.only(children)
  }
}

UserProvider.childContextTypes = {
  user: PropTypes.objectOf(PropTypes.any),
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default UserProvider
