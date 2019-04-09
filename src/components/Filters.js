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
  const current = e.target.htmlFor
  e.preventDefault()
  const form = e.target.parentElement.form || e.target.form || e.target
  const formData = new FormData(form)
  const parameters = [...formData.entries()]
    .filter(p => !!p[1])
    .filter(p => !p.includes(current && current.split(':')[1]))
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
    filter: "filter#about.@type",
    type: "button",
    order: ['Organization', 'Service', 'Person', 'Action', 'Event', 'Article', 'Product', 'WebPage', 'Policy'],
    translate: true
  }
]

const subFilters = [
  {
    name: "sterms#feature.properties.location.address.addressCountry",
    filter: "filter#feature.properties.location.address.addressCountry",
    type: "dropdown",
    icon: "globe",
    translate: true,
    order: (array, translate) => array.sort((a, b) => translate(a.key).localeCompare(translate(b.key)))
  },
  {
    name: "sterms#feature.properties.location.address.addressRegion",
    filter: "filter#feature.properties.location.address.addressRegion",
    type: "dropdown",
    icon: "globe",
    translate: true
  },
  {
    name: "sterms#about.keywords",
    filter: "filter#about.keywords",
    type: "dropdown",
    icon: "tag"
  },
  {
    name: "sterms#about.award",
    filter: "filter#about.award",
    translate: true,
    icon: "trophy",
    order: (array, translate) => array.sort((a, b) => translate(a.key).localeCompare(translate(b.key)))
  }
]

const secondaryFilters = [
  {
    name: "sterms#about.availableChannel.availableLanguage",
    filter: "filter#about.availableChannel.availableLanguage",
    translate: true
  },
  {
    name: "sterms#about.primarySector.@id",
    filter: "filter#about.primarySector.@id",
    type: "concepts",
    scheme: require('../json/sectors.json'),
    translate: true
  },
  {
    name: "sterms#about.secondarySector.@id",
    filter: "filter#about.secondarySector.@id",
    type: "concepts",
    scheme: require('../json/sectors.json'),
    translate: true
  },
  {
    name: "sterms#about.audience.@id",
    filter: "filter#about.audience.@id",
    type: "concepts",
    scheme: require('../json/isced-1997.json'),
    translate: true
  },
  {
    name: "sterms#about.about.@id",
    filter: "filter#about.about.@id",
    type: "concepts",
    scheme: require('../json/esc.json'),
    translate: true
  },
  {
    name: "sterms#about.license.@id",
    filter: "filter#about.license.@id",
    type: "concepts",
    scheme: require('../json/licenses.json'),
    translate: true
  },
  {
    name: "sterms#about.activityField.@id",
    filter: "filter#about.activityField.@id",
    type: "concepts",
    scheme: require('../json/activities.json'),
    translate: true
  },
]

class Filters extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      extended: Object.keys(props.filters).some(
        v => secondaryFilters.map(f => f.name).includes(v)
      )
    }

    this.sizes = [20,50,100,200]

    if (!this.sizes.includes(props.size) && props.size > -1) {
      this.sizes.push(props.size)
      this.sizes = this.sizes.sort((a, b) => a - b)
    }

    this.getFilter = this.getFilter.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    const { extended } = this.state

    this.setState({extended: Object.keys(nextProps.filters).some(
      v => secondaryFilters.map(f => f.name).includes(v)) || extended
    })
  }

  getFilter(filterDef) {
    const { aggregations, filters, translate } = this.props

    const [, agg_field] = filterDef.name.split('#')
    const aggregation = aggregations['global#facets']['filter#filtered'][filterDef.filter]
      && aggregations['global#facets']['filter#filtered'][filterDef.filter][filterDef.name]
      && aggregations['global#facets']['filter#filtered'][filterDef.filter][filterDef.name].buckets.length
      ? aggregations['global#facets']['filter#filtered'][filterDef.filter][filterDef.name] : null
    const filter = filters[agg_field] || []
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
          buckets={filterDef.hasOwnProperty('order')
            ? filterDef.order(aggregation.buckets, translate)
            : aggregation.buckets}
          filter={filter}
          filterName={`filter.${agg_field}`}
          submit={onSubmit}
          translate={translate}
          translateItems={filterDef.translate ? translate : undefined}
        />
      )
    }
  }

  render() {
    const { filters, sort, translate, query, emitter,
      aggregations, totalItems, size, _self, _links, view, embedValue, country } = this.props
    const { extended } = this.state

    const filter = filters && filters['about.@type'] || false

    let sortSize
    if (sort && sort.split(':').shift() === 'about.name.@value.sort') {
      sortSize = translate('ClientTemplates.filter.alphabetical').length
    } else if (sort) {
      sortSize = translate(`ClientTemplates.filter.${sort.split(':').shift()}`).length
    } else if (query) {
      sortSize = translate('ClientTemplates.filter.relevance').length
    } else {
      sortSize = translate('ClientTemplates.filter.dateCreated').length
    }

    return (
      <nav className="Filters">

        <form
          onSubmit={(evt) => onSubmit(evt, emitter)}
          onReset={(evt) => onReset(evt)}
        >
          <div className="FiltersControls">
            <div className="filterSearch">

              <button type="submit">
                <i
                  aria-hidden="true"
                  className="fa fa-search"
                  title="Search"
                />
              </button>

              <input
                type="search"
                name="q"
                defaultValue={query}
                key={query}
                placeholder={country
                  ? translate("search.entries.country", {country: translate(country)})
                  : translate("search.entries")}
              />

              <Tooltip
                overlay={translate('Tip.showList')}
                placement="top"
                mouseEnterDelay={0.2}
                overlayClassName="tooltipDisableEvents"
              >
                <i
                  aria-hidden="true"
                  className="fa fa-th-list"
                  tabIndex="0"
                  role="button"
                  onClick={() => {emitter.emit('toggleColumns')}}
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
              className={`filterType secondary${extended ? '' : ' collapsed'}`}
            >
              {secondaryFilters.map(filterDef => this.getFilter(filterDef))}
            </div>

            <div className="filtersControls">
              {secondaryFilters.map(f => f.name).some(
                v => aggregations[v] && aggregations[v].buckets.length
              ) && (
                <button
                  type="button"
                  className="floatingBtn"
                  onClick={(e) => {
                    e.preventDefault()
                    this.setState({ extended: !extended })
                  }}
                >
                  {extended
                    ? translate('ClientTemplates.filter.hide')
                    : translate('ClientTemplates.filter.show')
                  }
                </button>
              )}

              {Object.keys(filters).length > 0 && (
                <div className="clearFilter floatingBtn">
                  <button type="reset">
                    {translate('ClientTemplates.filter.clear')}
                  </button>
                </div>
              )}

            </div>

            {Object.keys(filters).some(name => name !== 'about.@type') && (
              <div className="selectedFilters">
                <hr />
                {Object.keys(filters).filter(name => name !== 'about.@type').map(filterGroup => (
                  filters[filterGroup].map(filter => (
                    <div key={`filterSelected.${filterGroup}.${filter}`} className="tagFilter">
                      <input
                        type="checkbox"
                        name={`filter.${filterGroup}`}
                        id={`filterSelected.${filterGroup}${filter}`}
                        onChange={e => {
                          onSubmit(e, emitter)
                        }}
                        value={filter}
                        defaultChecked
                      />
                      <label
                        htmlFor={`filterSelected.${filterGroup}${filter}`}
                        onKeyDown={e => {
                          if (e.keyCode === 13) {
                            e.target.click()
                          }
                        }}
                        tabIndex="0"
                        role="button"
                        title={translate(`filter.${filterGroup}`)}
                      >
                        {translate(filter)}
                      </label>
                    </div>
                  ))
                ))}
              </div>
            )}

          </div>

          <hr />

          <div className="sortContainer">
            <section className="listOptions">
              <div>
                {(filter === false || !filter.includes('Event')) && (
                  <span>
                    <span className="arrowWrapper">
                      <select onChange={e => onSubmit(e, emitter)} className="styledSelect totalSelect" name="size" value={size}>
                        {this.sizes.map(number => (
                          number >= 0 &&
                          <option key={number} value={number}>{number}</option>
                        ))}
                        <option value="-1">{translate('Pagination.all')}</option>
                      </select>
                    </span>
                    {translate('Pagination.of')}
                    &nbsp;
                  </span>
                )}
                <span className="counter">
                  <span>{totalItems}</span>
                  &nbsp;
                  {translate('ResourceIndex.index.results')}
                </span>
                {!(filters['about.@type'] && filters['about.@type'].includes('Event')) && (
                  <span>
                    ,&nbsp;
                    {translate('ResourceIndex.index.orderedBy')}
                    <span className="arrowWrapper">
                      <select
                        name="sort"
                        value={sort}
                        className="styledSelect"
                        style={{
                          width: sortSize * 1.4 + 'ex',
                          minWidth: '70px'
                        }}
                        onChange={(evt) => {
                          evt.target.style.width = (evt.target.options[evt.target.selectedIndex].text.length * 1.4) + 'ex'
                          onSubmit(evt, emitter)
                        }}
                      >
                        {query ? (
                          <option value="">{translate('ClientTemplates.filter.relevance')}</option>
                        ) : (
                          <option value="">{translate('ClientTemplates.filter.dateCreated')}</option>
                        )}
                        {query &&
                          <option value="dateCreated:DESC">{translate('ClientTemplates.filter.dateCreated')}</option>
                        }
                        <option value="about.name.@value.sort:ASC">{translate('ClientTemplates.filter.alphabetical')}</option>
                      </select>
                    </span>
                  </span>
                )}
              </div>
              <ShareExport
                _self={_self}
                _links={_links}
                view={view}
                embedValue={embedValue}
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
  embedValue: PropTypes.string,
  country: PropTypes.string
}

Filters.defaultProps = {
  view: null,
  sort: "",
  embedValue: null,
  country: null
}

export default withEmitter(withI18n(Filters))
