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
      search: '',
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    const { showContent } = this.state

    if (e.target !== this.DropdownFilter && !this.DropdownFilter.contains(e.target)) {
      this.setState({ showContent: false })
    } else if (!this.dropdownContent.contains(e.target)) {
      this.setState({ showContent: !showContent })
    }
  }

  render() {
    const {
      buckets, filter, filterName, translateItems, icon, translate, submit, emitter,
    } = this.props
    const { search, showContent } = this.state

    const list = buckets.map((bucket, i) => (
      <li key={bucket.key}>
        {!filter.includes(bucket.key) ? (
          <React.Fragment>
            <input
              type="checkbox"
              value={bucket.key}
              name={filterName}
              id={filterName + i}
              defaultChecked={filter.includes(bucket.key)}
            />
            <label
              style={{
                display: (search.length === 0)
                  || (
                    translateItems(bucket.label
                      || bucket.key).toLowerCase().includes(search.toLowerCase())
                    || bucket.key.toLowerCase() === search.toLowerCase()
                  )
                  ? 'block' : 'none',
              }}
              htmlFor={filterName + i}
              onKeyDown={(e) => {
                if (e.keyCode === 13) {
                  e.target.click()
                }
              }}
              tabIndex="0"
              role="button"
            >
              {`${translateItems(bucket.label || bucket.key)} (${bucket.doc_count})`}
            </label>
          </React.Fragment>
        ) : (
          <span>
            {`${translateItems(bucket.label || bucket.key)} (${bucket.doc_count})`}
          </span>
        )}

      </li>
    ))

    return (
      <div
        ref={(DropdownFilter) => {
          if (DropdownFilter) {
            document.addEventListener('click', this.handleClick)
          } else {
            document.removeEventListener('click', this.handleClick)
          }
          this.DropdownFilter = DropdownFilter
        }}
        className="DropdownFilter"
      >
        <span
          tabIndex="0"
          role="button"
          onKeyDown={triggerClick}
          className={`btn expand${filter.length ? ' inUse' : ''}`}
        >
          <span className="btnText">
            {icon ? (
              <span>
                <i aria-hidden="true" className={`fa fa-${icon}`} />
                &nbsp;
                {translate(filterName)}
              </span>
            ) : (
              translate(filterName)
            )}
          </span>
        </span>

        <div
          className={`dropdownContent${showContent ? '' : ' hidden'}`}
          ref={dropdownContent => this.dropdownContent = dropdownContent}
        >
          <div className="searchContainer">
            <input
              type="submit"
              value={translate('ClientTemplates.filter-dropdown.applyFilter')}
              onClick={(evt) => {
                evt.preventDefault()
                this.setState({ search: '' })
                submit(evt, emitter)
                this.setState({ showContent: false })
              }}
            />
            <input
              type="text"
              placeholder="..."
              value={search}
              onChange={e => this.setState({ search: e.target.value })}
            />
          </div>
          <ul>
            {list.length
              ? list
              : (
                <li>
                  <label>
                    {translate('ClientTemplates.filter-dropdown.noResults')}
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
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
}

DropdownFilter.defaultProps = {
  icon: null,
  translate: key => key,
  translateItems: key => key,
}

export default withEmitter(DropdownFilter)
