/* global window */
import React from 'react'
import PropTypes from 'prop-types'
import withEmitter from './withEmitter'
import Link from './Link'

import '../styles/FullModal.pcss'

class FullModal extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: true
    }

    this.closeModal = this.closeModal.bind(this)
  }

  closeModal(e) {
    if (e.target.classList.contains('FullModal')) {
      this.setState({visible: false})
      window.history.state &&
      window.history.state.hasOwnProperty('load')
        ? window.history.back()
        : this.props.emitter.emit('navigate', '/resource/')
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
            onClick={this.closeModal}
            onKeyDown={(e) => {
              if (e.keyCode === 27) {
                e.target.click()
              }
            }}
          >
            <div className="modalDialog">
              {this.props.children}

              <Link
                href='/resource/'
                className="closeModal"
              >
                <i className="fa fa-close" />
              </Link>

            </div>
          </div>
        ) : null
        }
      </div>
    )
  }
}

FullModal.propTypes = {
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
  children: PropTypes.node.isRequired
}

export default withEmitter(FullModal)
