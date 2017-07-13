import React from 'react'
import PropTypes from 'prop-types'
import I18nProvider from './I18nProvider'
import App from './App'

const Init = ({locales, source}) => {
  return (
    <I18nProvider locales={locales}>
      <App source={source} />
    </I18nProvider>
  )
}

Init.propTypes = {
  source: PropTypes.string.isRequired,
  locales: PropTypes.array.isRequired
}

export default Init
