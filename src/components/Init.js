import React from 'react'
import PropTypes from 'prop-types'
import I18nProvider from './I18nProvider'
import EmittProvider from './EmittProvider'
import ApiProvider from './ApiProvider'
import App from './App'

const Init = ({i18n, emitter, user, children, apiConfig}) => (
  <I18nProvider i18n={i18n}>
    <EmittProvider emitter={emitter}>
      <ApiProvider config={apiConfig}>
        <App user={user}>
          {children}
        </App>
      </ApiProvider>
    </EmittProvider>
  </I18nProvider>
)

Init.propTypes = {
  i18n: PropTypes.objectOf(PropTypes.any).isRequired,
  emitter: PropTypes.objectOf(PropTypes.any),
  user: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.node.isRequired,
  apiConfig: PropTypes.objectOf(PropTypes.any).isRequired
}

Init.defaultProps = {
  user: null,
  emitter: {
    on: (event, handler) => console.log("Registered", event, handler),
    off: (event, handler) => console.log("Unregistered", event, handler),
    emit: (event, payload) => console.log("Triggered", event, payload)
  }
}

export default Init
