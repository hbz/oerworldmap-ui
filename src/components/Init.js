import React from 'react'
import PropTypes from 'prop-types'
import I18nProvider from './I18nProvider'
import EmittProvider from './EmittProvider'
import App from './App'

const Init = ({locales, emitter, data, mapboxConfig, user }) => (
  <I18nProvider locales={locales}>
    <EmittProvider emitter={emitter}>
      <App data={data} user={user} mapboxConfig={mapboxConfig} />
    </EmittProvider>
  </I18nProvider>
)

Init.propTypes = {
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
  locales: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  mapboxConfig: PropTypes.objectOf(PropTypes.any).isRequired,
  user: PropTypes.string
}

Init.defaultProps = {
  user: null
}

export default Init
