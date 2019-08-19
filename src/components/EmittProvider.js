import React from 'react'
import PropTypes from 'prop-types'

class EmittProvider extends React.Component {
  getChildContext() {
    const { emitter } = this.props
    return { emitter }
  }

  render() {
    const { children } = this.props
    return React.Children.only(children)
  }
}

EmittProvider.childContextTypes = {
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
}

EmittProvider.propTypes = {
  children: PropTypes.node.isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default EmittProvider
