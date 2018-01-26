/* global document */
import React from 'react'
import PropTypes from 'prop-types'
import withI18n from './withI18n'
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
    const list = (this.props.aggregations.buckets.filter(
      item => item.key.includes(this.state.search)
    ) || this.props.aggregations.buckets).map((bucket, i) => (
      <li key={bucket.key}>
        <input
          type="checkbox"
          value={bucket.key}
          name={this.props.filterName}
          id={this.props.filterName+i}
          defaultChecked={this.props.filters.includes(bucket.key)}
        />
        <label
          htmlFor={this.props.filterName+i}
          onKeyDown={e => {
            if (e.keyCode === 13) {
              e.target.click()
            }
          }}
          tabIndex="0"
          role="button"
        >
          {`${this.props.translate(bucket.key)} (${bucket.doc_count})`}
        </label>
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
          className={`btn expand${this.props.filters.length ? ' inUse' : ''}`}
        >
          <span className="btnText">
            {this.props.icon ? (
              <i className={`fa fa-${this.props.icon}`} />
            ) : (
              this.props.filters.join(', ')
              || this.props.translate(`Dropdown${this.props.filterName}`)
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
              value={this.props.translate('Apply Filter')}
              onClick={evt => {
                evt.preventDefault()
                this.setState({search: ''})
                this.props.submit(evt, this.props.emitter)
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
                    {this.props.translate('Nothing Found')}
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
  translate: PropTypes.func.isRequired,
  aggregations: PropTypes.objectOf(PropTypes.any).isRequired,
  filters: PropTypes.arrayOf(PropTypes.any).isRequired,
  icon: PropTypes.string,
  submit: PropTypes.func.isRequired,
  filterName: PropTypes.string.isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired
}

DropdownFilter.defaultProps = {
  icon: null,
}

export default withEmitter(withI18n(DropdownFilter))
