/* global FormData */

import React from 'react'
import PropTypes from 'prop-types'
import '../styles/components/Filters.pcss'

import withEmitter from './withEmitter'
import Link from './Link'
import translate from './translate'
import PagedCollection from './PagedCollection'
import DropdownFilter from './DropdownFilter'
import ButtonFilter from './ButtonFilter'

const onSubmit = (e, emitter) => {
  emitter.emit('hideOverlay')
  e.preventDefault()
  const form = e.target.parentElement.form || e.target.form || e.target
  const formData = new FormData(form)
  const parameters = [...formData.entries()]
    .filter(p => !!p[1])
    .map(p => encodeURIComponent(p[0]) + "=" + encodeURIComponent(p[1])).join("&")
  emitter.emit('navigate', '?' + parameters)
  emitter.emit('toggleColumns', true)
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
  },
  {
    name: "about.secondarySector.@id",
  },
  {
    name: "about.audience.@id",
  },
  {
    name: "about.about.@id",
  },
  {
    name: "about.award",
  },
  {
    name: "about.license.@id",
  },
]

const Filters = ({query, filters, aggregations, emitter, translate, member, size}) => {

  let sizes = [10,20,50,100,200]

  if (!sizes.includes(size) && size > -1) {
    sizes.push(size)
    sizes = sizes.sort((a, b) => a - b)
  }

  return (
    <nav className="Filters">

      <form action="" onSubmit={(evt) => onSubmit(evt, emitter)}>
        <div className="FiltersControls">
          <div className="filterSearch">
            <input type="search" name="q" defaultValue={query} placeholder={`${translate('Filters.searchTheMap')}...`} />
            <i
              className="fa fa-th-list"
              title="Show List"
              tabIndex="0"
              role="button"
              onClick={() => {emitter.emit('toggleColumns')}}
              onKeyDown={e => {
                if (e.keyCode === 32) {
                  e.target.click()
                }
              }}
            />
            <noscript>
              <div className="search-bar">
                <input type="submit" className="btn" />
              </div>
            </noscript>
          </div>

          <div className="filterType primary">
            {primaryFilters.map((filterDef) => {
              const aggregation = aggregations[filterDef.name]
                && aggregations[filterDef.name].buckets.length
                ? aggregations[filterDef.name] : null
              const filter = filters[filterDef.name] || []
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

          <div className="filterType secondary">
            {secondaryFilters.map((filterDef) => {
              const aggregation = aggregations[filterDef.name]
                && aggregations[filterDef.name].buckets.length
                ? aggregations[filterDef.name] : null
              const filter = filters[filterDef.name] || []
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

          <div className="clearFilter">
            <Link href="/resource/">{translate('Filters.clearFilters')}</Link>
          </div>
        </div>

        <hr/>

        <div className="sortContainer">
          <PagedCollection size={size} member={member}>
            <select
              name="sort"
              className="styledSelect"
              style={{width: (translate('Filters.relevance').length * 8)+15}}
              onChange={(evt) => {
                evt.target.style.width = (evt.target.options[evt.target.selectedIndex].text.length * 8) + 15 + 'px'
                onSubmit(evt, emitter)
              }}
            >
              <option value="">{translate('Filters.relevance')}</option>
              <option value="dateCreated:ASC">{translate('Filters.dateCreated')}</option>
            </select>

            <select onChange={e => onSubmit(e, emitter)} className="btn" name="size" value={size}>
              {sizes.map(number => (
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

Filters.propTypes = {
  query: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  filters: PropTypes.objectOf(PropTypes.any).isRequired,
  aggregations: PropTypes.objectOf(PropTypes.any).isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
  translate: PropTypes.func.isRequired,
  member: PropTypes.arrayOf(PropTypes.any).isRequired,
}

export default withEmitter(translate(Filters))
