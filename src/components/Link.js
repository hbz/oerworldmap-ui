import React from 'react'
import PropTypes from 'prop-types'

import withEmitter from './withEmitter'

class Link extends React.Component {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
    this.getRef = this.getRef.bind(this)
  }


  onClick(event) {

    if (!this.props.to.startsWith('#')) {
      event.preventDefault()
      this.props.emitter.emit('navigate', this.getRef())
    } else {
      console.log("Link default behavior")
    }
  }

  getRef() {
    return this.props.to.startsWith('urn:uuid') ?
      `/resource/${this.props.to}` : this.props.to
  }

  render() {
    return <a className={this.props.className} href={this.getRef()} onClick={this.onClick}>{this.props.children}</a>
  }
}

Link.propTypes = {
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  to: PropTypes.string.isRequired,
  className: PropTypes.string
}

Link.defaultProps = {
  className: null
}

export default withEmitter(Link)
