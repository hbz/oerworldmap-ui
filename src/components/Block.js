import React from 'react'
import PropTypes from 'prop-types'

import withI18n from './withI18n'
import { triggerClick } from '../common'

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
        <div className={`head ${this.props.type}`}>
          <h3>
            {this.props.title}
          </h3>
          {(this.props.collapsible && this.props.collapsibleType === 'plus') &&
            <span
              role="button"
              tabIndex="0"
              onKeyDown={triggerClick}
              className="plus"
              onClick={() => this.setState({collapsed: !this.state.collapsed})}
            >
              <i aria-hidden="true" className={`fa fa-${this.state.collapsed ? 'plus' : 'minus'}`} />
            </span>
          }
        </div>
        <div className={`main ${this.props.type}`}>
          {this.props.children}
        </div>
        {(this.props.collapsible && this.props.collapsibleType === 'show-all') &&
          <div
            role="button"
            tabIndex="0"
            onKeyDown={triggerClick}
            className="show-all"
            onClick={() => this.setState({collapsed: !this.state.collapsed})}
          >
            {this.props.translate(this.state.collapsed ? 'Show all' : 'Show less')}
          </div>
        }
      </div>
    )
  }

}

Block.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  translate: PropTypes.func.isRequired,
  className: PropTypes.string,
  collapsible: PropTypes.bool,
  collapsibleType: PropTypes.string,
  collapsed: PropTypes.bool,
  type: PropTypes.string
}


Block.defaultProps = {
  className: '',
  collapsible: false,
  collapsibleType: 'plus',
  collapsed: true,
  type: ''
}

export default withI18n(Block)
