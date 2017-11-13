import React from 'react'
import PropTypes from 'prop-types'

import translate from './translate'
import Link from './Link'

import '../styles/ErrorPage.pcss'

const ErrorPage = ({message, translate}) => (
  <Link href="/">
    <div className="ErrorPage">
      <div className="ErrorPageContainer">
        <h3>{translate('ErrorPage.anErrorOccured')}</h3>
        <h4>{translate('ErrorPage.error')}</h4>
        <p>{message}</p>
      </div>
    </div>
  </Link>
)

ErrorPage.propTypes = {
  message: PropTypes.string.isRequired,
  translate: PropTypes.func.isRequired
}

export default translate(ErrorPage)
