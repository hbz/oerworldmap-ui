/* global window */

import React from 'react'
import PropTypes from 'prop-types'

import '../styles/FullModal.pcss'

class FullModal extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: true
    }

    this.hideModal = this.hideModal.bind(this)
  }

  hideModal(e) {
    if (e.target.classList.contains('FullModal')) {
      this.setState({visible: false})
    }
  }

  render() {
    return (
      <div>
        {this.state.visible === true ? (
          <div
            className="FullModal"
            role="button"
            tabIndex="-1"
            onClick={this.hideModal}
          >
            <div className="modalDialog Forms">
              {this.props.children}
            </div>
          </div>
        ) : null
        }
      </div>
    )
  }
}

FullModal.propTypes = {
  children: PropTypes.node.isRequired
}

export default FullModal
