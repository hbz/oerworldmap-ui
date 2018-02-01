import React from 'react'
import PropTypes from 'prop-types'
import I18nProvider from './I18nProvider'
import EmittProvider from './EmittProvider'
import App from './App'

const Init = ({locales, phrases, emitter, user, children}) => (
  <I18nProvider locales={locales} phrases={phrases}>
    <EmittProvider emitter={emitter}>
      <App user={user}>
        {children}
      </App>
    </EmittProvider>
  </I18nProvider>
)

Init.propTypes = {
  locales: PropTypes.arrayOf(PropTypes.string).isRequired,
  emitter: PropTypes.objectOf(PropTypes.any),
  user: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.node.isRequired
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
