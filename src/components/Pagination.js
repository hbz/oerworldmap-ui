import React from 'react'
import PropTypes from 'prop-types'
import withI18n from './withI18n'
import Link from './Link'

import '../styles/components/Pagination.pcss'

const Pagiantion = ({totalItems, nextPage, previousPage, from, size, translate}) => {
  return (
    size > 0 && (
      <div className="Pagination">
        {previousPage ?
          (
            <Link rel="prev" title={translate('Pagination.prevPage')} href={previousPage}><i aria-hidden="true" className="fa fa-arrow-left " /></Link>
          ) :
          (
            <span>&nbsp;</span>
          )
        }
        <div className="numbers">
          <span>{from}-{parseInt(from)+parseInt(size) >= totalItems
            ? totalItems
            : parseInt(from)+parseInt(size)} {translate('Pagination.of')} {totalItems}
          </span>
        </div>
        {nextPage ?
          (
            <Link rel="next" title={translate('Pagination.nextPage')} href={nextPage}><i aria-hidden="true" className="fa fa-arrow-right " /></Link>
          ) :
          (
            <span>&nbsp;</span>
          )
        }
      </div>
    ))
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

export default withI18n(Pagiantion)