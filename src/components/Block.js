import React from 'react'
import PropTypes from 'prop-types'

class Block extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      collapsed: props.collapsible ? props.collapsed : false,
    }
  }

  render() {
    return (
      <div className={`Block ${this.props.className}`}>
        <h3>
          {this.props.title}
          {this.props.collapsible &&
            <button
              className="btn"
              onClick={() => this.setState({collapsed: !this.state.collapsed})}
            >
              {this.state.collapsed ? '+' : '-'}
            </button>
          }
        </h3>
        <div className={this.state.collapsed ? 'hidden' : ''}>
          {this.props.children}
        </div>
      </div>
    )
  }

}

Block.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  collapsible: PropTypes.bool,
  collapsed: PropTypes.bool
}


Block.defaultProps = {
  className: '',
  collapsible: false,
  collapsed: false
}

export default Block
