/* global i18ns */
import React from 'react'
import PropTypes from 'prop-types'

import I18nProvider from '../src/components/I18nProvider'
import i18n from '../src/i18n'

const WithStrings = ({lang, children}) => {
  return (
    <I18nProvider i18n={
      i18n(
        [lang],
        i18ns[lang]
      )}
    >
      {children}
    </I18nProvider>
  )
}

WithStrings.propTypes = {
  children: PropTypes.node.isRequired,
  lang: PropTypes.objectOf(PropTypes.any).isRequired
}

export default WithStrings


