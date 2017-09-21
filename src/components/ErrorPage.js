import React from 'react'
import PropTypes from 'prop-types'

import Link from './Link'

import '../styles/ErrorPage.pcss'

const ErrorPage = ({message}) => (
  <Link to="/">
    <div className="ErrorPage">
      <div className="ErrorPageContainer">
        <h3>An error occured</h3>
        <h4>Error</h4>
        <p>{message}</p>
      </div>
    </div>
  </Link>
)

ErrorPage.propTypes = {
  message: PropTypes.string.isRequired,
}

export default ErrorPage
