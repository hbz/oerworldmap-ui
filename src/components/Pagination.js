import React from 'react'
import PropTypes from 'prop-types'

import '../styles/Pagination.pcss'

const Pagiantion = ({total, current}) => (
  <div className="Pagination">
    <i className="fa fa-arrow-left " />
    <div className="numbers">
      <span>1</span>
      <span className="current">{current}</span>
      <span>3</span>
      <span>4</span>
      <span>5</span>
      <span>6</span>
      <span>7</span>
      <span>8</span>
      <span>9</span>
      <span>{total}</span>
    </div>
    <i className="fa fa-arrow-right " />
  </div>
)

Pagiantion.propTypes = {
  total: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
}

export default Pagiantion