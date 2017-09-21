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
    // const link = document.createElement('a')
    // link.href = this.href

    // const hash = link.hash.substr(1)
    // document.querySelectorAll('.target').forEach(e => {
    //   e.classList.remove('target')
    // })
    // document.getElementById(hash).classList.add('target')

    if (!this.props.to.startsWith('#')) {
      event.preventDefault()
      this.props.emitter.emit('navigate', this.href)
    } else {
      console.log("Link default behavior")
    }
  }

  render() {
    return <a className={this.props.className} href={this.href} onClick={this.onClick}>{this.props.children}</a>
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
