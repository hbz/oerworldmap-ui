/* global mapboxConfig */

import React from 'react'
import PropTypes from 'prop-types'

class MapboxProvider extends React.Component {
  getChildContext() {
    console.log(mapboxConfig)
    return {
      mapboxConfig
    }
  }

  render() {
    const { children } = this.props
    return React.Children.only(children)
  }
}

MapboxProvider.childContextTypes = {
  mapboxConfig: PropTypes.objectOf(PropTypes.any).isRequired,
}

MapboxProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MapboxProvider
