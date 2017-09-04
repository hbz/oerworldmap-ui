import React from 'react'
import PropTypes from 'prop-types'

const Column = ({ children }) => (
  <div className="column">

    <div className="columnContent">
      {children}
    </div>

    <div
      role="button"
      tabIndex="0"
      className="toggleColumn"
      onClick={e => {
        const column = e.target.parentElement.classList.contains('column')
          ? e.target.parentElement
          : e.target.parentElement.parentElement
        column.parentElement.classList.toggle('hideColumns')
      }}
    >
      <i className="fa fa-chevron-right" />
    </div>

  </div>
)

Column.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Column
