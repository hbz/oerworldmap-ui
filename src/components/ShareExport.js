/* global document */
/* global window */
import React from 'react'
import PropTypes from 'prop-types'

import Export from './Export'
import Share from './Share'
import withI18n from './withI18n'

import '../styles/components/ShareExport.pcss'

import { triggerClick } from '../common'

class ShareExport extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      showing : false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    document.addEventListener("click", this.handleClick)
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClick)
  }

  handleClick(e) {
    if (e.target !== this.dropdownButton)
      this.setState({showing:false})
  }

  render() {
    return (
      <div className="ShareExport dropdownParent">
        <i
          role="button"
          tabIndex="0"
          className="fa fa-gear"
          onClick={() => {this.setState({showing:!this.state.showing})}}
          onKeyDown={triggerClick}
          ref={el => this.dropdownButton = el}
        />
        { this.state.showing &&
          <ul className="dropdownMenu">
            <li><a href="#share">{this.props.translate('share')} <i className="fa fa-share-alt" /></a></li>
            <li><a href="#export">{this.props.translate('export')} <i className="fa fa-share" /></a></li>
            <li>
              <button onClick={() => {
                window.print()
              }}
              >
                {this.props.translate('print')} <i className="fa fa-print" />
              </button>
            </li>
          </ul>
        }
        {this.props.view === 'share' &&
          <Share _self={this.props._self} />
        }
        {this.props.view === 'export' &&
          <Export _self={this.props._self} _links={this.props._links} />
        }
      </div>
    )
  }
}

ShareExport.propTypes = {
  view: PropTypes.string,
  _self: PropTypes.string.isRequired,
  _links: PropTypes.objectOf(PropTypes.any).isRequired,
  translate: PropTypes.func.isRequired,
}

ShareExport.defaultProps = {
  view: null
}

export default withI18n(ShareExport)
