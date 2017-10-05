import React from 'react'
import PropTypes from 'prop-types'
import translate from './translate'
import Link from './Link'

import '../styles/Pagination.pcss'

const Pagiantion = ({totalItems, nextPage, previousPage, from, size, translate}) => {
  return (
    <div className="Pagination">
      {previousPage ?
        (
          <Link title={translate('Pagination.prevPage')} to={previousPage}><i className="fa fa-arrow-left " /></Link>
        ) :
        (
          <span>&nbsp;</span>
        )
      }
      <div className="numbers">
        <span>{from}-{parseInt(from)+parseInt(size) >= totalItems
          ? totalItems
          : parseInt(from)+parseInt(size)} {translate('Pagination.of')} {totalItems}</span>
      </div>
      {nextPage ?
        (
          <Link title={translate('Pagination.nextPage')} to={nextPage}><i className="fa fa-arrow-right " /></Link>
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
  translate: PropTypes.func.isRequired,
}

Pagiantion.defaultProps = {
  nextPage: null,
  previousPage: null
}

export default translate(Pagiantion)