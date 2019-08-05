/* global document */
import React from 'react'
import PropTypes from 'prop-types'
import withI18n from './withI18n'
import withEmitter from './withEmitter'
import { triggerClick } from '../common'

import '../styles/components/DropdownFilter.pcss'

const filterConcepts = (concepts, include) => {
  const res = []
  concepts.forEach((node) => {
    if (include.indexOf(node['@id']) !== -1) {
      if (node.narrower) {
        node.narrower = filterConcepts(node.narrower, include)
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
      search: '',
    }

    this.handleClick = this.handleClick.bind(this)
    this.buildTree = this.buildTree.bind(this)
  }

  handleClick(e) {
    const { showContent } = this.state

    if (e.target !== this.ConceptFilter && !this.ConceptFilter.contains(e.target)) {
      this.setState({ showContent: false })
    } else if (!this.dropdownContent.contains(e.target)) {
      this.setState({ showContent: !showContent })
    }
  }

  show(concept) {
    const { search } = this.state

    return (!search) || concept.name.some(name => name['@value'].toLowerCase().search(search.trim().toLowerCase()) !== -1)
  }

  buildTree(concepts) {
    const {
      filter, translate, aggregation, filterName,
    } = this.props

    return (
      <ul>
        {concepts.map(concept => (
          <li key={concept['@id']}>
            {!filter.includes(concept['@id']) ? (
              <React.Fragment>
                <input
                  type="checkbox"
                  value={concept['@id']}
                  name={filterName}
                  id={filterName + concept['@id']}
                />
                <label
                  htmlFor={filterName + concept['@id']}
                  onKeyDown={(e) => {
                    if (e.keyCode === 13) {
                      e.target.click()
                    }
                  }}
                  tabIndex="0"
                  role="button"
                  className={this.show(concept) ? null : 'hidden'}
                >
                  {`${translate(concept.name)} (${aggregation.buckets.find(
                    bucket => bucket.key === concept['@id'],
                  ).doc_count})`
                  }
                </label>
              </React.Fragment>
            ) : (
              <span>
                {`${translate(concept.name)} (${aggregation.buckets.find(
                  bucket => bucket.key === concept['@id'],
                ).doc_count})`
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
    const {
      filter, icon, filterName, translate, emitter, submit, concepts, aggregation,
    } = this.props
    const { showContent, search } = this.state

    return (
      <div
        ref={(ConceptFilter) => {
          if (ConceptFilter) {
            document.addEventListener('click', this.handleClick)
          } else {
            document.removeEventListener('click', this.handleClick)
          }
          this.ConceptFilter = ConceptFilter
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
              <i aria-hidden="true" className={`fa fa-${icon}`} />
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
          {showContent && (
            this.buildTree(filterConcepts(concepts, aggregation.buckets.map(bucket => bucket.key)))
          )}
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
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
}

ConceptFilter.defaultProps = {
  icon: null,
}

export default withEmitter(withI18n(ConceptFilter))
