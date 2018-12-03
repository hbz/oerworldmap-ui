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
    const { target, emitter } = this.props

    if (!target
      && !event.shiftKey
      && !(event.button === 1)
      && !event.ctrlKey
      && !event.metaKey) {
      event.preventDefault()
      emitter.emit('navigate', this.getRef())
    }
  }

  getRef() {
    const { href } = this.props

    return href.startsWith('urn:uuid') ?
      `/resource/${href}` : href
  }

  render() {

    const { rel, title, className, dataShow, target, children } = this.props

    return (
      <a
        rel={rel}
        title={title}
        className={className}
        href={this.getRef()}
        onClick={this.onClick}
        data-show={dataShow}
        target={target}
      >
        {children}
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
  href: PropTypes.string,
  className: PropTypes.string,
  dataShow: PropTypes.string,
  title: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string
}

Link.defaultProps = {
  className: null,
  title: null,
  dataShow: null,
  target: null,
  href: '',
  rel: null
}

export default withEmitter(Link)
