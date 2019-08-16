import React from 'react'
import PropTypes from 'prop-types'

import Api from '../api'

class ApiProvider extends React.Component {
  getChildContext() {
    const { config } = this.props
    return { api: new Api(config) }
  }

  render() {
    const { children } = this.props
    return React.Children.only(children)
  }
}

ApiProvider.childContextTypes = {
  api: PropTypes.objectOf(PropTypes.any).isRequired,
}

ApiProvider.propTypes = {
  children: PropTypes.node.isRequired,
  config: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default ApiProvider
