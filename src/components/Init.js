import React from 'react'
import PropTypes from 'prop-types'
import I18nProvider from './I18nProvider'
import EmittProvider from './EmittProvider'
import App from './App'

const Init = ({route, locales, emitter, data, mapboxConfig, user, features }) => (
  <I18nProvider locales={locales}>
    <EmittProvider emitter={emitter}>
      <App route={route} data={data} user={user} features={features} mapboxConfig={mapboxConfig} />
    </EmittProvider>
  </I18nProvider>
)

Init.propTypes = {
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
  locales: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  features: PropTypes.objectOf(PropTypes.any),
  mapboxConfig: PropTypes.objectOf(PropTypes.any).isRequired,
  user: PropTypes.string,
  route: PropTypes.objectOf(PropTypes.any).isRequired
}

Init.defaultProps = {
  user: null,
  features: null
}

export default Init
