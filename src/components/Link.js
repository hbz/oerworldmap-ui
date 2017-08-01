import React from 'react'

class Link extends React.Component {
  constructor (props) {
    super(props)
    this.href = props.to.startsWith('urn:uuid')
      ? `/resource/${props.to}`
      : props.to
    this.onClick = this.onClick.bind(this)
  }

  onClick (event) {
    if (!this.props.to.startsWith('#')) {
      event.preventDefault()
      window.history.pushState(null, null, this.href)
      window.dispatchEvent(new window.PopStateEvent('popstate'))
    }
  }

  render () {
    return <a href={this.href} onClick={this.onClick}>{this.props.children}</a>
  }
}

export default Link
