/* global FormData */
/* global Event */

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

const onReset = e => {
  const form = e.target.parentElement.form || e.target.form || e.target
  e.preventDefault()
  clearForm(form, ['q'])
  form.dispatchEvent(new Event('submit'))
}

const primaryFilters = [
  {
    name: "sterms#about.@type",
    type: "button",
    order: ['Organization', 'Service', 'Person', 'Action', 'Event', 'Article', 'Product', 'WebPage'],
    translate: true
  }
]

const subFilters = [
  {
    name: "sterms#feature.properties.location.address.addressCountry",
    type: "dropdown",
    icon: "globe",
    translate: true
  },
  {
    name: "sterms#feature.properties.location.address.addressRegion",
    type: "dropdown",
    icon: "globe",
    translate: true
  },
  {
    name: "sterms#about.keywords",
    type: "dropdown",
    icon: "tag"
  },
  {
    name: "sterms#about.award",
    translate: true,
    icon: "trophy"
  }
]

const secondaryFilters = [
  {
    name: "sterms#about.availableChannel.availableLanguage",
    translate: true
  },
  {
    name: "sterms#about.primarySector.@id",
    type: "concepts",
    scheme: require('../json/sectors.json'),
    translate: true
  },
  {
    name: "sterms#about.secondarySector.@id",
    type: "concepts",
    scheme: require('../json/sectors.json'),
    translate: true
  },
  {
    name: "sterms#about.audience.@id",
    type: "concepts",
    scheme: require('../json/isced-1997.json'),
    translate: true
  },
  {
    name: "sterms#about.about.@id",
    type: "concepts",
    scheme: require('../json/esc.json'),
    translate: true
  },
  {
    name: "sterms#about.license.@id",
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

    this.getFilter = this.getFilter.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({extended: Object.keys(nextProps.filters).some(
      v => secondaryFilters.map(f => f.name).includes(v)) || this.state.extended
    })
  }

  getFilter(filterDef) {
    const [, agg_field] = filterDef.name.split('#')
    const aggregation = this.props.aggregations[filterDef.name]
      && this.props.aggregations[filterDef.name].buckets.length
      ? this.props.aggregations[filterDef.name] : null
    const filter = this.props.filters[agg_field] || []
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
          filterName={`filter.${agg_field}`}
        />
      )
    case 'concepts':
      return (
        <ConceptFilter
          key={filterDef.name}
          concepts={filterDef.scheme.hasTopConcept}
          aggregation={aggregation}
          filter={filter}
          filterName={`filter.${agg_field}`}
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
          filterName={`filter.${agg_field}`}
          submit={onSubmit}
          translate={this.props.translate}
          translateItems={filterDef.translate ? this.props.translate : undefined}
        />
      )
    }
  }

  render() {
    const filter = this.props.filters && this.props.filters['about.@type'] || false

    let sortSize
    if (this.props.sort && this.props.sort.split(':').shift() === 'about.name.@value.sort') {
      sortSize = this.props.translate('ClientTemplates.filter.alphabetical').length
    } else if (this.props.sort) {
      sortSize = this.props.translate(`ClientTemplates.filter.${this.props.sort.split(':').shift()}`).length
    } else if (this.props.query) {
      sortSize = this.props.translate('ClientTemplates.filter.relevance').length
    } else {
      sortSize = this.props.translate('ClientTemplates.filter.dateCreated').length
    }

    return (
      <nav className="Filters">

        <form
          onSubmit={(evt) => onSubmit(evt, this.props.emitter)}
          onReset={(evt) => onReset(evt)}
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
                key={this.props.query}
                placeholder={`${this.props.translate('ResourceIndex.index.searchMap')}...`}
              />

              <Tooltip
                overlay={this.props.translate('Tip.showList')}
                placement="top"
                mouseEnterDelay={0.2}
                overlayClassName="tooltipDisableEvents"
              >
                <i
                  className="fa fa-th-list"
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
              {primaryFilters.map(filterDef => this.getFilter(filterDef))}
            </div>

            <div className="subFilters">
              {subFilters.map(filterDef => this.getFilter(filterDef))}
            </div>

            <div
              className={`filterType secondary${this.state.extended ? '' : ' collapsed'}`}
            >
              {secondaryFilters.map(filterDef => this.getFilter(filterDef))}
            </div>

            <div className="filtersControls">
              {secondaryFilters.map(f => f.name).some(
                v => this.props.aggregations[v] && this.props.aggregations[v].buckets.length
              ) &&
                <button
                  type="button"
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
                        style={{
                          width: sortSize * 1.4 + 'ex',
                          minWidth: '70px'
                        }}
                        onChange={(evt) => {
                          evt.target.style.width = (evt.target.options[evt.target.selectedIndex].text.length * 1.4) + 'ex'
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
                embedValue={this.props.embedValue}
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
  sort: PropTypes.string,
  embedValue: PropTypes.string
}

Filters.defaultProps = {
  view: null,
  sort: "",
  embedValue: null
}

export default withEmitter(withI18n(Filters))
