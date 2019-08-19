/* global document */
/* global window */
import React from 'react'
import PropTypes from 'prop-types'

import Export from './Export'
import Share from './Share'
import withI18n from './withI18n'
import FullModal from './FullModal'

import '../styles/components/ShareExport.pcss'

import { triggerClick } from '../common'

class ShareExport extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showing: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClick)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick)
  }

  handleClick(e) {
    if (e.target !== this.dropdownButton) {
      this.setState({ showing: false })
    }
  }

  render() {
    const {
      translate, view, embedValue, _self, _links,
    } = this.props
    const { showing } = this.state

    return (
      <div className="ShareExport dropdownParent">
        <i
          aria-hidden="true"
          role="button"
          tabIndex="0"
          className="fa fa-gear"
          onClick={() => { this.setState({ showing: !showing }) }}
          onKeyDown={triggerClick}
          ref={el => this.dropdownButton = el}
        />
        { showing && (
          <ul className="dropdownMenu">
            <li>
              <a href="#share">
                {translate('share')}
                &nbsp;
                <i aria-hidden="true" className="fa fa-share-alt" />
              </a>
            </li>
            <li>
              <a href="#export">
                {translate('export')}
                &nbsp;
                <i aria-hidden="true" className="fa fa-share" />
              </a>
            </li>
            <li>
              <button
                type="button"
                onClick={() => {
                  window.print()
                }}
              >
                {translate('print')}
                &nbsp;
                <i aria-hidden="true" className="fa fa-print" />
              </button>
            </li>
          </ul>
        )}
        {view === 'share' && (
          <FullModal closeLink={_self}>
            <Share embedValue={embedValue} _self={_self} />
          </FullModal>
        )}
        {view === 'export' && (
          <FullModal closeLink={_self}>
            <Export _self={_self} _links={_links} />
          </FullModal>
        )}
      </div>
    )
  }
}

ShareExport.propTypes = {
  view: PropTypes.string,
  _self: PropTypes.string.isRequired,
  _links: PropTypes.objectOf(PropTypes.any).isRequired,
  translate: PropTypes.func.isRequired,
  embedValue: PropTypes.string,
}

ShareExport.defaultProps = {
  view: null,
  embedValue: null,
}

export default withI18n(ShareExport)
