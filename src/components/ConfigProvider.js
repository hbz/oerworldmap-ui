import React from 'react'
import PropTypes from 'prop-types'

class ConfigProvider extends React.Component {
  getChildContext() {
    const { config } = this.props
    return { config }
  }

  render() {
    const { children } = this.props
    return React.Children.only(children)
  }
}

ConfigProvider.childContextTypes = {
  config: PropTypes.objectOf(PropTypes.any),
}

ConfigProvider.propTypes = {
  children: PropTypes.node.isRequired,
  config: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default ConfigProvider
