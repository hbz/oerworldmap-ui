import React from 'react'
import PropTypes from 'prop-types'

class EmittProvider extends React.Component {

  getChildContext() {
    return { emitter: this.props.emitter }
  }

  render() {
    return React.Children.only(this.props.children)
  }

}

EmittProvider.childContextTypes = {
  emitter: PropTypes.objectOf(PropTypes.any).isRequired
}

EmittProvider.propTypes = {
  children: PropTypes.node.isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired
}

export default EmittProvider
