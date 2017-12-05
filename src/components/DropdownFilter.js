import React from 'react'
import PropTypes from 'prop-types'
import translate from './translate'
import withEmitter from './withEmitter'

import '../styles/DropdownFilter.pcss'

class DropdownFilter extends React.Component {

  constructor(props) {
    super(props)

    this.state ={
      showContent: false,
      search: '',
      initialList: this.props.aggregations.buckets,
      selectedElements: []
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
    const list = (this.state.initialList.filter(
      item => item.key.includes(this.state.search)
    ) || this.state.initialList).map((bucket, i) => (
      <li key={bucket.key}>
        <input
          type="checkbox"
          value={bucket.key}
          name={this.props.filterName}
          id={this.props.filterName+i}
          defaultChecked={this.props.filters.includes(bucket.key) || this.state.selectedElements.includes(bucket.key)}
          onChange={e => {
            const array = this.state.selectedElements
            const index = array.indexOf(e.target.value)
            if (index === -1) {
              array.push(e.target.value)
              this.setState({selectedElements: array})
            } else {
              array.splice(index, 1)
              this.setState({selectedElements: array})
            }
          }}
        />
        <label htmlFor={this.props.filterName+i}>{bucket.key}</label>
      </li>
    ))

    return (
      <div
        ref={DropdownFilter => {
          if (DropdownFilter) {
            this.props.emitter.on("click", this.handleClick)
          } else {
            this.props.emitter.off("click", this.handleClick)
          }
          this.DropdownFilter = DropdownFilter
        }}
        className="DropdownFilter"
      >
        <span
          className="btn expand"
        >
          <span className="btnText">
            {(this.state.selectedElements.join(', '))
            ||  (<i className={`fa fa-${this.props.icon}`} />)}
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
            {<input
              type="text"
              placeholder="..."
              value={this.state.search}
              onChange={e => this.setState({search: e.target.value})}
            />}
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
  icon: PropTypes.string.isRequired,
  submit: PropTypes.func.isRequired,
  filterName: PropTypes.string.isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired
}

export default withEmitter(translate(DropdownFilter))