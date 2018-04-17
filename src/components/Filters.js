/* global FormData */

import React from 'react'
import PropTypes from 'prop-types'
import Tooltip from 'rc-tooltip'
import '../styles/components/Filters.pcss'

import withEmitter from './withEmitter'
import withI18n from './withI18n'
import DropdownFilter from './DropdownFilter'
import ButtonFilter from './ButtonFilter'
import ConceptFilter from './ConceptFilter'
import ShareExport from './ShareExport'

import { triggerClick, clearForm } from '../common'

const onSubmit = (e, emitter) => {
  emitter.emit('hideOverlay')
  e.preventDefault()
  const form = e.target.parentElement.form || e.target.form || e.target
  const formData = new FormData(form)
  const parameters = [...formData.entries()]
    .filter(p => !!p[1])
    .map(p => encodeURIComponent(p[0]) + "=" + encodeURIComponent(p[1])).join("&")
  emitter.emit('navigate', '?' + parameters)
}

const onReset = (e, emitter) => {
  e.preventDefault()
  clearForm(e.target.parentElement.form || e.target.form || e.target)
  emitter.emit('navigate', '/resource/')
}

const primaryFilters = [
  {
    name: "about.@type",
    type: "button",
    order: ['Organization', 'Service', 'Person', 'Action', 'Event', 'Article'],
    translate: true
  },
  {
    name: "about.location.address.addressCountry",
    type: "dropdown",
    icon: "globe",
    translate: true
  },
  {
    name: "about.location.address.addressRegion",
    type: "dropdown",
    icon: "globe",
    translate: true
  },
  {
    name: "about.keywords",
    type: "dropdown",
    icon: "tag"
  }
]

const secondaryFilters = [
  {
    name: "about.availableChannel.availableLanguage",
    translate: true
  },
  {
    name: "about.primarySector.@id",
    type: "concepts",
    scheme: require('../json/sectors.json'),
    translate: true
  },
  {
    name: "about.secondarySector.@id",
    type: "concepts",
    scheme: require('../json/sectors.json'),
    translate: true
  },
  {
    name: "about.audience.@id",
    type: "concepts",
    scheme: require('../json/isced-1997.json'),
    translate: true
  },
  {
    name: "about.about.@id",
    type: "concepts",
    scheme: require('../json/esc.json'),
    translate: true
  },
  {
    name: "about.award",
    translate: true
  },
  {
    name: "about.license.@id",
    type: "concepts",
    scheme: require('../json/licenses.json'),
    translate: true
  },
]

class Filters extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      extended: Object.keys(this.props.filters).some(
        v => secondaryFilters.map(f => f.name).includes(v)
      )
    }

    this.sizes = [20,50,100,200]

    if (!this.sizes.includes(this.props.size) && this.props.size > -1) {
      this.sizes.push(this.props.size)
      this.sizes = this.sizes.sort((a, b) => a - b)
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({extended: Object.keys(nextProps.filters).some(
      v => secondaryFilters.map(f => f.name).includes(v)) || this.state.extended
    })
  }

  render() {

    const filter = this.props.filters && this.props.filters['about.@type'] || false
    return (
      <nav className="Filters">

        <form
          action=""
          onSubmit={(evt) => onSubmit(evt, this.props.emitter)}
          onReset={(evt) => onReset(evt, this.props.emitter)}
        >
          <div className="FiltersControls">
            <div className="filterSearch">

              <button type="submit">
                <i
                  className="fa fa-search"
                  title="Search"
                />
              </button>

              <input
                type="search"
                name="q"
                defaultValue={this.props.query}
                placeholder={`${this.props.translate('ResourceIndex.index.searchMap')}...`}
              />

              <Tooltip
                overlay="Show List"
                placement="top"
                mouseEnterDelay={0.2}
                overlayClassName="tooltipDisableEvents"
              >
                <i
                  className="fa fa-th-list"
                  title="Show List"
                  tabIndex="0"
                  role="button"
                  onClick={() => {this.props.emitter.emit('toggleColumns')}}
                  onKeyDown={triggerClick}
                />
              </Tooltip>

              <noscript>
                <div className="search-bar">
                  <input type="submit" className="btn" />
                </div>
              </noscript>
            </div>

            <div className="filterType primary">
              {primaryFilters.map((filterDef) => {
                const aggregation = this.props.aggregations[filterDef.name]
                  && this.props.aggregations[filterDef.name].buckets.length
                  ? this.props.aggregations[filterDef.name] : null
                const filter = this.props.filters[filterDef.name] || []
                if (!aggregation) {
                  return
                }
                switch(filterDef.type) {
                case 'button':
                  return (
                    <ButtonFilter
                      key={filterDef.name}
                      aggregation={aggregation}
                      filter={filter}
                      submit={onSubmit}
                      order={filterDef.order}
                    />
                  )
                case 'concepts':
                  return (
                    <ConceptFilter
                      key={filterDef.name}
                      concepts={filterDef.scheme.hasTopConcept}
                      aggregation={aggregation}
                      filter={filter}
                      submit={onSubmit}
                    />
                  )
                case 'dropdown':
                default:
                  return (
                    <DropdownFilter
                      key={filterDef.name}
                      icon={filterDef.icon}
                      aggregation={aggregation}
                      filter={filter}
                      filterName={`filter.${filterDef.name}`}
                      submit={onSubmit}
                      translate={this.props.translate}
                      translateItems={filterDef.translate ? this.props.translate : undefined}
                    />
                  )
                }
              })}

            </div>

            <div
              className={`filterType secondary${this.state.extended ? '' : ' collapsed'}`}
            >
              {secondaryFilters.map((filterDef) => {
                const aggregation = this.props.aggregations[filterDef.name]
                  && this.props.aggregations[filterDef.name].buckets.length
                  ? this.props.aggregations[filterDef.name] : null
                const filter = this.props.filters[filterDef.name] || []
                if (!aggregation) {
                  return
                }
                switch(filterDef.type) {
                case 'button':
                  return (
                    <ButtonFilter
                      key={filterDef.name}
                      aggregation={aggregation}
                      filter={filter}
                      submit={onSubmit}
                      order={filterDef.order}
                    />
                  )
                case 'concepts':
                  return (
                    <ConceptFilter
                      key={filterDef.name}
                      concepts={filterDef.scheme.hasTopConcept}
                      aggregation={aggregation}
                      filter={filter}
                      filterName={`filter.${filterDef.name}`}
                      submit={onSubmit}
                    />
                  )
                case 'dropdown':
                default:
                  return (
                    <DropdownFilter
                      key={filterDef.name}
                      icon={filterDef.icon}
                      aggregation={aggregation}
                      filter={filter}
                      filterName={`filter.${filterDef.name}`}
                      submit={onSubmit}
                      translate={this.props.translate}
                      translateItems={filterDef.translate ? this.props.translate : undefined}
                    />
                  )
                }
              })}

            </div>

            <div className="filtersControls">
              {secondaryFilters.map(f => f.name).some(
                v => this.props.aggregations[v] && this.props.aggregations[v].buckets.length
              ) &&
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    this.setState({ extended: !this.state.extended })
                  }}
                >
                  {this.state.extended
                    ? this.props.translate('ClientTemplates.filter.hide')
                    : this.props.translate('ClientTemplates.filter.show')
                  }
                </button>
              }
              <div className="clearFilter">
                <button type="reset">
                  {this.props.translate('ClientTemplates.filter.clear')}
                </button>
              </div>

            </div>

          </div>

          <hr />

          <div className="sortContainer">
            <section className="listOptions">
              <div>
                {(filter === false || !filter.includes('Event')) &&
                <span>
                  <span className="arrowWrapper">
                    <select onChange={e => onSubmit(e, this.props.emitter)} className="styledSelect totalSelect" name="size" value={this.props.size}>
                      {this.sizes.map(number => (
                        number >= 0 &&
                        <option key={number} value={number}>{number}</option>
                      ))}
                      <option value="-1">{this.props.translate('Pagination.all')}</option>
                    </select>
                  </span>
                  {this.props.translate('Pagination.of')}&nbsp;
                </span>
                }
                <span className="counter">
                  <span>{this.props.totalItems}</span>
                  &nbsp;{this.props.translate('ResourceIndex.index.results')}
                </span>
                {!(this.props.filters['about.@type'] && this.props.filters['about.@type'].includes('Event')) &&
                  <span>
                    ,&nbsp;{this.props.translate('ResourceIndex.index.orderedBy')}
                    <span className="arrowWrapper">
                      <select
                        name="sort"
                        value={this.props.sort}
                        className="styledSelect"
                        style={{width: (this.props.translate('ClientTemplates.filter.dateCreated').length * 8) + 15 + 'px'}}
                        onChange={(evt) => {
                          evt.target.style.width = (evt.target.options[evt.target.selectedIndex].text.length * 8) + 15 + 'px'
                          onSubmit(evt, this.props.emitter)
                        }}
                      >
                        {this.props.query ? (
                          <option value="">{this.props.translate('ClientTemplates.filter.relevance')}</option>
                        ) : (
                          <option value="">{this.props.translate('ClientTemplates.filter.dateCreated')}</option>
                        )}
                        {this.props.query &&
                          <option value="dateCreated:DESC">{this.props.translate('ClientTemplates.filter.dateCreated')}</option>
                        }
                        <option value="about.name.@value.sort:ASC">{this.props.translate('ClientTemplates.filter.alphabetical')}</option>
                      </select>
                    </span>
                  </span>
                }
              </div>
              <ShareExport
                _self={this.props._self}
                _links={this.props._links}
                view={this.props.view}
              />
            </section>
          </div>

        </form>

      </nav>
    )
  }
}

Filters.propTypes = {
  query: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  filters: PropTypes.objectOf(PropTypes.any).isRequired,
  aggregations: PropTypes.objectOf(PropTypes.any).isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
  translate: PropTypes.func.isRequired,
  totalItems: PropTypes.number.isRequired,
  view: PropTypes.string,
  _self: PropTypes.string.isRequired,
  _links: PropTypes.objectOf(PropTypes.any).isRequired,
  sort: PropTypes.string
}

Filters.defaultProps = {
  view: null,
  sort: ""
}

export default withEmitter(withI18n(Filters))
