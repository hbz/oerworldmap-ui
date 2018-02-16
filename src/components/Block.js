import React from 'react'
import PropTypes from 'prop-types'

import '../styles/components/Block.pcss'

class Block extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      collapsed: props.collapsible ? props.collapsed : false,
    }
  }

  render() {
    return (
      <div className={`Block ${this.props.className} ${this.props.collapsible ? 'collapsible' : ''} ${this.props.collapsibleType} ${this.state.collapsed ? 'collapsed' : ''}`}>
        <div className="head">
          <h3>
            {this.props.title}
          </h3>
          {(this.props.collapsible && this.props.collapsibleType == 'plus') &&
            <span
              role="button"
              className="plus"
              onClick={() => this.setState({collapsed: !this.state.collapsed})}
            >
              <i className={`fa fa-${this.state.collapsed ? 'plus' : 'minus'}`} />
            </span>
          }
        </div>
        <div className="main">
          {this.props.children}
        </div>
        {(this.props.collapsible && this.props.collapsibleType == 'show-all') &&
          <div
            role="button"
            className="show-all"
            onClick={() => this.setState({collapsed: !this.state.collapsed})}
          >
            {this.state.collapsed ? 'Show all' : 'Show less'}
          </div>
        }
      </div>
    )
  }

}

Block.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  collapsible: PropTypes.bool,
  collapsibleType: PropTypes.string,
  collapsed: PropTypes.bool
}


Block.defaultProps = {
  className: '',
  collapsible: false,
  collapsibleType: 'plus',
  collapsed: true
}

export default Block
