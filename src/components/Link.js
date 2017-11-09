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
    event.preventDefault()
    this.props.emitter.emit('navigate', this.getRef())
  }

  getRef() {
    return this.props.to.startsWith('urn:uuid') ?
      `/resource/${this.props.to}` : this.props.to
  }

  render() {
    return (
      <a
        title={this.props.title}
        className={this.props.className}
        href={this.getRef()}
        onClick={this.onClick}
        data-show={this.props.dataShow}
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
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
  dataShow: PropTypes.string,
  title: PropTypes.string
}

Link.defaultProps = {
  className: null,
  title: null,
  dataShow: null
}

export default withEmitter(Link)
