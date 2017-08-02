import React from 'react'

import '../styles/Filters.pcss'

const Filters = () => (
  <div className="Filters">

    <div className="filterSearch">
      <input type="search" placeholder="Search the map..." />
      <button className="btn">
        <i className="fa fa-search" />
      </button>
    </div>

    <div className="filterType">
      <div className="btnGroup">
        <button className="btn">
          <i className="fa fa-users" />
        </button>
        <button className="btn">
          <i className="fa fa-user" />
        </button>
        <button className="btn">
          <i className="fa fa-desktop" />
        </button>
        <button className="btn">
          <i className="fa fa-gears" />
        </button>
        <button className="btn">
          <i className="fa fa-calendar" />
        </button>
        <button className="btn">
          <i className="fa fa-comment" />
        </button>
      </div>

      <button className="btn dropdownToggle">
        <i className="fa fa-globe" />
        <i className="fa fa-chevron-down" />
      </button>

      <button className="btn dropdownToggle">
        <i className="fa fa-tag" />
        <i className="fa fa-chevron-down" />
      </button>

    </div>

    <div className="clearFilter">
      <a href="#">Clear Filter</a>
    </div>

  </div>
)

export default Filters
