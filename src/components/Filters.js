/* global FormData */

import React from 'react'
import PropTypes from 'prop-types'
import Tooltip from 'rc-tooltip'
import '../styles/components/Filters.pcss'

import withEmitter from './withEmitter'
import withI18n from './withI18n'
import PagedCollection from './PagedCollection'
import DropdownFilter from './DropdownFilter'
import ButtonFilter from './ButtonFilter'
import ConceptFilter from './ConceptFilter'
import { triggerClick } from '../common'

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
  const form = e.target.parentElement.form || e.target.form || e.target

  // clearing inputs
  const inputs = form.getElementsByTagName('input')
  for (let i = 0; i<inputs.length; i++) {
    switch (inputs[i].type) {
    case 'radio':
    case 'checkbox':
      inputs[i].checked = false
      break
    default:
      inputs[i].value = ''
      break
    }
  }

  // clearing selects
  const selects = form.getElementsByTagName('select')
  for (let i = 0; i<selects.length; i++) {
    selects[i].selectedIndex = 0
  }

  // clearing textarea
  const text= form.getElementsByTagName('textarea')
  for (let i = 0; i<text.length; i++) {
    text[i].innerHTML= ''
  }

  // navigate
  emitter.emit('navigate', '/resource/')

}

const primaryFilters = [
  {
    name: "about.@type",
    type: "button"
  },
  {
    name: "about.location.address.addressCountry",
    type: "dropdown",
    icon: "globe"
  },
  {
    name: "about.location.address.addressRegion",
    type: "dropdown",
    icon: "globe"
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
  },
  {
    name: "about.primarySector.@id",
    type: "concepts",
    scheme: require('../json/sectors.json')
  },
  {
    name: "about.secondarySector.@id",
    type: "concepts",
    scheme: require('../json/sectors.json')
  },
  {
    name: "about.audience.@id",
    type: "concepts",
    scheme: require('../json/isced-1997.json')
  },
  {
    name: "about.about.@id",
    type: "concepts",
    scheme: require('../json/esc.json')
  },
  {
    name: "about.award",
  },
  {
    name: "about.license.@id",
    type: "concepts",
    scheme: require('../json/licenses.json')
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

    this.sizes = [10,20,50,100,200]

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
    return (
      <nav className="Filters">

        <form
          action=""
          onSubmit={(evt) => onSubmit(evt, this.props.emitter)}
          onReset={(evt) => onReset(evt, this.props.emitter)}
        >
          <div className="FiltersControls">
            <div className="filterSearch">
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
                      aggregations={aggregation}
                      filters={filter}
                      filterName={`filter.${filterDef.name}`}
                      submit={onSubmit}
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
                      aggregations={aggregation}
                      filters={filter}
                      filterName={`filter.${filterDef.name}`}
                      submit={onSubmit}
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
            <PagedCollection size={this.props.size} member={this.props.member}>
              <select
                name="sort"
                className="styledSelect"
                style={{width: (this.props.translate('ClientTemplates.filter.relevance').length * 8)+15}}
                onChange={(evt) => {
                  evt.target.style.width = (evt.target.options[evt.target.selectedIndex].text.length * 8) + 15 + 'px'
                  onSubmit(evt, this.props.emitter)
                }}
              >
                <option value="">{this.props.translate('ClientTemplates.filter.relevance')}</option>
                <option value="dateCreated:ASC">{this.props.translate('ClientTemplates.filter.dateCreated')}</option>
                <option value="about.name.@value.sort:ASC">{this.props.translate('ClientTemplates.filter.alphabetical')}</option>
              </select>

              <select onChange={e => onSubmit(e, this.props.emitter)} className="btn" name="size" value={this.props.size}>
                {this.sizes.map(number => (
                  number >= 0 &&
                    <option key={number} value={number}>{number}</option>
                ))}
                <option value="-1">All</option>
              </select>
            </PagedCollection>
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
  member: PropTypes.arrayOf(PropTypes.any).isRequired,
}

export default withEmitter(withI18n(Filters))
