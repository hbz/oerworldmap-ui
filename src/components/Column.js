import React from 'react'
import PropTypes from 'prop-types'

const Column = ({ children, className }) => (
  <div className={`column ${className}`}>

    <div className="columnContent">
      {children}
    </div>

    <div
      role="button"
      tabIndex="0"
      className="toggleColumn"
      onKeyDown={e => {
        if (e.keyCode === 32) {
          e.target.click()
        }
      }}
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
  className: PropTypes.string,
}

Column.defaultProps = {
  className: null,
}

export default Column
