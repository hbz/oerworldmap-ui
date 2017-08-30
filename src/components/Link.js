import React from 'react'
import PropTypes from 'prop-types'

import withEmitter from './withEmitter'

class Link extends React.Component {
  constructor(props) {
    super(props)
    this.href = props.to.startsWith('urn:uuid') ?
      `/resource/${props.to}` : props.to
    this.onClick = this.onClick.bind(this)
  }

  onClick(event) {
    if (!this.props.to.startsWith('#')) {
      event.preventDefault()
      this.props.emitter.emit('load', this.href)
    }
  }

  render() {
    return <a href={this.href} onClick={this.onClick}>{this.props.children}</a>
  }
}

Link.propTypes = {
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  to: PropTypes.string.isRequired
}

export default withEmitter(Link)
