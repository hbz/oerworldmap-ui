import React from 'react'
import PropTypes from 'prop-types'

import withI18n from './withI18n'
import Link from './Link'

import '../styles/components/ErrorPage.pcss'

const ErrorPage = ({ message, translate }) => (
  <Link href="/">
    <div className="ErrorPage">
      <div className="ErrorPageContainer">
        <h3>{translate('ClientTemplates.http_error.title')}</h3>
        <h4>{translate('ClientTemplates.http_error.error')}</h4>
        <p>{message}</p>
      </div>
    </div>
  </Link>
)

ErrorPage.propTypes = {
  message: PropTypes.string.isRequired,
  translate: PropTypes.func.isRequired,
}

export default withI18n(ErrorPage)
