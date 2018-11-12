/* global document */
import React from 'react'
import PropTypes from 'prop-types'
import withI18n from './withI18n'
import withEmitter from './withEmitter'
import { triggerClick } from '../common'

import '../styles/components/DropdownFilter.pcss'

const filterConcepts = (concepts, include) => {
  const res = []
  concepts.forEach(node => {
    if (include.indexOf(node['@id']) !== -1) {
      if (node['narrower']) {
        node['narrower'] = filterConcepts(node['narrower'], include)
      }
      res.push(node)
    }
  })
  return res
}

class ConceptFilter extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      showContent: false,
      search: ''
    }

    this.handleClick = this.handleClick.bind(this)
    this.buildTree = this.buildTree.bind(this)
  }

  handleClick(e) {
    if (e.target !== this.ConceptFilter && !this.ConceptFilter.contains(e.target)) {
      this.setState({showContent: false})
    } else {
      if (!this.dropdownContent.contains(e.target)) {
        this.setState({showContent: !this.state.showContent})
      }
    }
  }

  show(concept) {
    return (!this.state.search) || concept.name.some(name =>
      name['@value'].toLowerCase().search(this.state.search.trim().toLowerCase()) !== -1
    )
  }

  buildTree(concepts) {
    return (
      <ul>
        {concepts.map(concept => (
          <li key={concept['@id']}>
            {!this.props.filter.includes(concept['@id']) ? (
              <React.Fragment>
                <input
                  type="checkbox"
                  value={concept['@id']}
                  name={this.props.filterName}
                  id={this.props.filterName + concept['@id']}
                />
                <label
                  htmlFor={this.props.filterName + concept['@id']}
                  onKeyDown={e => {
                    if (e.keyCode === 13) {
                      e.target.click()
                    }
                  }}
                  tabIndex="0"
                  role="button"
                  className={this.show(concept) ? null: 'hidden'}
                >
                  {`${this.props.translate(concept.name)} (${this.props.aggregation.buckets.find(
                    bucket => bucket.key === concept['@id']).doc_count})`
                  }
                </label>
              </React.Fragment>
            ) : (
              <span>
                {`${this.props.translate(concept.name)} (${this.props.aggregation.buckets.find(
                  bucket => bucket.key === concept['@id']).doc_count})`
                }
              </span>
            )}
            {concept.narrower && this.buildTree(concept.narrower)}
          </li>
        ))}
      </ul>
    )
  }

  render() {
    return (
      <div
        ref={ConceptFilter => {
          if (ConceptFilter) {
            document.addEventListener("click", this.handleClick)
          } else {
            document.removeEventListener("click", this.handleClick)
          }
          this.ConceptFilter = ConceptFilter
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
              <i aria-hidden="true" className={`fa fa-${this.props.icon}`} />
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
          {this.buildTree(filterConcepts(this.props.concepts, this.props.aggregation.buckets.map(bucket => bucket.key)))}
        </div>
      </div>
    )
  }
}

ConceptFilter.propTypes = {
  translate: PropTypes.func.isRequired,
  aggregation: PropTypes.objectOf(PropTypes.any).isRequired,
  filter: PropTypes.arrayOf(PropTypes.any).isRequired,
  concepts: PropTypes.arrayOf(PropTypes.any).isRequired,
  icon: PropTypes.string,
  submit: PropTypes.func.isRequired,
  filterName: PropTypes.string.isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired
}

ConceptFilter.defaultProps = {
  icon: null,
}

export default withEmitter(withI18n(ConceptFilter))
