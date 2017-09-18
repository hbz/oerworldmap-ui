/* global FormData */

import React from 'react'
import PropTypes from 'prop-types'
// import Logo from '../assets/logo.svg'
import '../styles/Filters.pcss'

import withEmitter from './withEmitter'
import Icon from './Icon'
import Link from './Link'

const onSubmit = (e, emitter) => {
  e.preventDefault()
  const form = e.target.parentElement.form || e.target.form || e.target
  const formData = new FormData(form)
  const parameters = [...formData.entries()]
    .map(p => encodeURIComponent(p[0]) + "=" + encodeURIComponent(p[1])).join("&")
  emitter.emit('load', '/resource/?' + parameters)
}

const triggerClick = (e) => {
  if (e.keyCode === 32) {
    e.target.click()
  }
}

const Filters = ({query, filters, aggregations, emitter, extended}) => (
  <nav className="Filters">

    <form action="/resource/" onSubmit={(evt) => onSubmit(evt, emitter)}>
      {extended ? (
        <div className="filterSearch">
          <input type="search" name="q" defaultValue={query} placeholder="Search the map..." />
          <button className="btn" type="submit">
            <i className="fa fa-search" />
          </button>
        </div>
        
      ) : (
        <noscript>
          <div className="search-bar">
            <input type="submit" className="btn" />
          </div>
        </noscript>
      )}

      <div className="filterType">
        <div className="btnGroup">
          {aggregations['about.@type']['buckets'].map(function (bucket) {
            return (
              <div className="filterBox" key={bucket.key}>
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
                  title={bucket.key}
                  className="btn"
                >
                  <Icon type={bucket.key} />
                </label>
              </div>
            )
          }, this)}
        </div>
      </div>

      <div className="sortContainer">
        <select name="sort" className="btn" onChange={(evt) => onSubmit(evt, emitter)}>
          <option value="">Relevance</option>
          <option value="dateCreated:ASC">Date Created</option>
        </select>
      </div>

      <div className="clearFilter">
        <Link to="/resource/">Clear Filter</Link>
      </div>

    </form>

  </nav>
)

Filters.propTypes = {
  query: PropTypes.string.isRequired,
  filters: PropTypes.objectOf(PropTypes.any).isRequired,
  aggregations: PropTypes.objectOf(PropTypes.any).isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
  extended: PropTypes.bool.isRequired
}

export default withEmitter(Filters)
