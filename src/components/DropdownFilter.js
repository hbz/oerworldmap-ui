/* global document */
import React from 'react'
import PropTypes from 'prop-types'
import withEmitter from './withEmitter'
import { triggerClick } from '../common'

import '../styles/components/DropdownFilter.pcss'

class DropdownFilter extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      showContent: false,
      search: ''
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    if (e.target !== this.DropdownFilter && !this.DropdownFilter.contains(e.target)) {
      this.setState({showContent: false})
    } else {
      if (!this.dropdownContent.contains(e.target)) {
        this.setState({showContent: !this.state.showContent})
      }
    }
  }

  render() {
    const list = this.props.buckets.map((bucket, i) => (
      <li key={bucket.key}>
        {!this.props.filter.includes(bucket.key) ? (
          <React.Fragment>
            <input
              type="checkbox"
              value={bucket.key}
              name={this.props.filterName}
              id={this.props.filterName+i}
              defaultChecked={this.props.filter.includes(bucket.key)}
            />
            <label
              style={{
                display: (this.state.search.length === 0) ||
                  (
                    this.props.translateItems(bucket.label || bucket.key).toLowerCase().includes(this.state.search.toLowerCase())
                    || bucket.key.toLowerCase() === this.state.search.toLowerCase()
                  )
                  ? 'block' : 'none'}}
              htmlFor={this.props.filterName+i}
              onKeyDown={e => {
                if (e.keyCode === 13) {
                  e.target.click()
                }
              }}
              tabIndex="0"
              role="button"
            >
              {`${this.props.translateItems(bucket.label || bucket.key)} (${bucket.doc_count})`}
            </label>
          </React.Fragment>
        ) : (
          <span>
            {`${this.props.translateItems(bucket.label || bucket.key)} (${bucket.doc_count})`}
          </span>
        )}

      </li>
    ))

    return (
      <div
        ref={DropdownFilter => {
          if (DropdownFilter) {
            document.addEventListener("click", this.handleClick)
          } else {
            document.removeEventListener("click", this.handleClick)
          }
          this.DropdownFilter = DropdownFilter
        }}
        className="DropdownFilter"
      >
        <span
          tabIndex="0"
          role="button"
          onKeyDown={triggerClick}
          className={`btn expand${this.props.filter.length ? ' inUse' : ''}`}
        >
          <span className="btnText">
            {this.props.icon ? (
              <span>
                <i className={`fa fa-${this.props.icon}`} /> {this.props.translate(this.props.filterName)}
              </span>
            ) : (
              this.props.translate(this.props.filterName)
            )}
          </span>
        </span>

        <div
          className={`dropdownContent${this.state.showContent ? '' : ' hidden'}`}
          ref={dropdownContent => this.dropdownContent = dropdownContent}
        >
          <div className="searchContainer">
            <input
              type="submit"
              value={this.props.translate('ClientTemplates.filter-dropdown.applyFilter')}
              onClick={evt => {
                evt.preventDefault()
                this.setState({search: ''})
                this.props.submit(evt, this.props.emitter)
                this.setState({showContent: false})
              }}
            />
            <input
              type="text"
              placeholder="..."
              value={this.state.search}
              onChange={e => this.setState({search: e.target.value})}
            />
          </div>
          <ul>
            {list.length
              ? list
              : (
                <li>
                  <label>
                    {this.props.translate('ClientTemplates.filter-dropdown.noResults')}
                  </label>
                </li>
              )}
          </ul>
        </div>
      </div>
    )
  }
}

DropdownFilter.propTypes = {
  translate: PropTypes.func,
  translateItems: PropTypes.func,
  buckets: PropTypes.arrayOf(PropTypes.any).isRequired,
  filter: PropTypes.arrayOf(PropTypes.any).isRequired,
  icon: PropTypes.string,
  submit: PropTypes.func.isRequired,
  filterName: PropTypes.string.isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired
}

DropdownFilter.defaultProps = {
  icon: null,
  translate: key => key,
  translateItems: key => key,
}

export default withEmitter(DropdownFilter)
