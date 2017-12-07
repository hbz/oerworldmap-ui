/* global FormData */

import React from 'react'
import PropTypes from 'prop-types'
import { Tooltip } from 'react-popperjs'
import '../styles/Filters.pcss'

import withEmitter from './withEmitter'
import Icon from './Icon'
import Link from './Link'
import translate from './translate'
import PagedCollection from './PagedCollection'
import DropdownFilter from './DropdownFilter'

const onSubmit = (e, emitter) => {
  emitter.emit('hideOverlay')
  e.preventDefault()
  const form = e.target.parentElement.form || e.target.form || e.target
  const formData = new FormData(form)
  const parameters = [...formData.entries()]
    .map(p => encodeURIComponent(p[0]) + "=" + encodeURIComponent(p[1])).join("&")
  emitter.emit('navigate', '?' + parameters)
}

const triggerClick = (e) => {
  if (e.keyCode === 32) {
    e.target.click()
  }
}

const dropdownFilters = [
  {
    name: "about.location.address.addressCountry",
    icon: "globe"
  },
  {
    name: "about.keywords",
    icon: "tag"
  },
  {
    name: "about.availableChannel.availableLanguage",
    icon: "flag"
  },
  {
    name: "about.primarySector.@id",
    icon: "gear"
  },
  {
    name: "about.secondarySector.@id",
    icon: "gear"
  },
  {
    name: "about.audience.@id",
    icon: "users"
  },
  {
    name: "about.about.@id",
    icon: "book"
  }
]

const Filters = ({query, filters, aggregations, emitter, translate, member, size}) => {

  let sizes = [10,20,50,100,200]

  if (!sizes.includes(size) && size !== 0) {
    sizes.push(size)
    sizes = sizes.sort((a, b) => a - b)
  }

  return (
    <nav className="Filters">

      <form action="" onSubmit={(evt) => onSubmit(evt, emitter)}>
        <div className="FiltersControls">
          <div className="filterSearch">
            <input type="search" name="q" defaultValue={query} placeholder={`${translate('Filters.searchTheMap')}...`} />
            <Tooltip
              message={translate('Filters.showList')}
              placement='bottom'
              tooltipClassName='Tooltip'
              arrowColor='#646464'
            >
              <i className="fa fa-th-list" />
            </Tooltip>
            <noscript>
              <div className="search-bar">
                <input type="submit" className="btn" />
              </div>
            </noscript>
          </div>

          <div className="filterType">
            <div>
              {aggregations['about.@type']['buckets'].map(function (bucket) {
                return (
                  <div className="filterBox" key={bucket.key}>
                    <Tooltip
                      message={translate(bucket.key)}
                      placement='top'
                      tooltipClassName='Tooltip'
                      arrowColor='#646464'
                    >
                      <input
                        type="radio"
                        value={bucket.key}
                        checked={filters.hasOwnProperty("about.@type")
                          && filters["about.@type"].includes(bucket.key)
                        }
                        name="filter.about.@type"
                        id={"type:" + bucket.key}
                        onChange={(evt) => onSubmit(evt, emitter)}
                      />

                      <label
                        onClick={(evt) => {
                          // Trigger submit only if onChange is not triggered
                          if (filters.hasOwnProperty("about.@type")
                            && filters["about.@type"].includes(bucket.key)) {
                            onSubmit(evt, emitter)
                          }
                        }}
                        onKeyDown={triggerClick}
                        role="button"
                        tabIndex="0"
                        htmlFor={"type:" + bucket.key}
                        aria-label={translate(bucket.key)}
                        className="btn"
                      >
                        <Icon type={bucket.key} />
                      </label>

                    </Tooltip>
                  </div>
                )
              }, this)}

              {dropdownFilters.map(f => (
                aggregations[f.name] &&
                aggregations[f.name].buckets.length > 0 &&
                <DropdownFilter
                  key={f.name}
                  icon={f.icon}
                  aggregations={aggregations[f.name]}
                  filters={filters.length ? filters[f.name] : []}
                  filterName={`filter.${f.name}`}
                  submit={onSubmit}
                />
              ))}

            </div>
          </div>


          <div className="clearFilter">
            <Link href="/resource/">{translate('Filters.clearFilters')}</Link>
          </div>
        </div>

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
  filters: PropTypes.objectOf(PropTypes.any).isRequired,
  aggregations: PropTypes.objectOf(PropTypes.any).isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
  translate: PropTypes.func.isRequired,
  member: PropTypes.arrayOf(PropTypes.any).isRequired,
  size: PropTypes.number.isRequired
}

export default withEmitter(translate(Filters))
