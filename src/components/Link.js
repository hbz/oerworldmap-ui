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
    if (!this.props.target
      && !event.shiftKey
      && !event.which === 2
      && !event.ctrlKey) {
      event.preventDefault()
      this.props.emitter.emit('navigate', this.getRef())
    }
  }

  getRef() {
    return this.props.href.startsWith('urn:uuid') ?
      `/resource/${this.props.href}` : this.props.href
  }

  render() {
    return (
      <a
        title={this.props.title}
        className={this.props.className}
        href={this.getRef()}
        onClick={this.onClick}
        data-show={this.props.dataShow}
        target={this.props.target}
      >
        {this.props.children}
      </a>
    )
  }
}

Link.propTypes = {
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  dataShow: PropTypes.string,
  title: PropTypes.string,
  target: PropTypes.string
}

Link.defaultProps = {
  className: null,
  title: null,
  dataShow: null,
  target: null
}

export default withEmitter(Link)
