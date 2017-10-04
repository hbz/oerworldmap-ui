import React from 'react'
import PropTypes from 'prop-types'
import Link from './Link'

import '../styles/Pagination.pcss'

const Pagiantion = ({totalItems, nextPage, previousPage, from, size}) => {
  return (
    <div className="Pagination">
      {previousPage ?
        (
          <Link to={previousPage}><i className="fa fa-arrow-left " /></Link>
        ) :
        (
          <span>&nbsp;</span>
        )
      }
      <div className="numbers">
        <span>{from}-{parseInt(from)+parseInt(size) >= totalItems
          ? totalItems
          : parseInt(from)+parseInt(size)} of {totalItems}</span>
      </div>
      {nextPage ?
        (
          <Link to={nextPage}><i className="fa fa-arrow-right " /></Link>
        ) :
        (
          <span>&nbsp;</span>
        )
      }

    </div>
  )
}

Pagiantion.propTypes = {
  totalItems: PropTypes.number.isRequired,
  nextPage: PropTypes.string,
  previousPage: PropTypes.string,
  from: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
}

Pagiantion.defaultProps = {
  nextPage: null,
  previousPage: null
}

export default Pagiantion