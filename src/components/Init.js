import React from 'react'
import PropTypes from 'prop-types'
import I18nProvider from './I18nProvider'
import EmittProvider from './EmittProvider'
import ApiProvider from './ApiProvider'
import UserProvider from './UserProvider'
import ConfigProvider from './ConfigProvider'
import App from './App'

const Init = ({
  i18n, emitter, children, config, supportedLanguages,
}) => (
  <ConfigProvider config={config}>
    <I18nProvider i18n={i18n}>
      <EmittProvider emitter={emitter}>
        <ApiProvider config={config.publicApiConfig}>
          <UserProvider>
            <App locales={i18n.locales} supportedLanguages={supportedLanguages}>
              {children}
            </App>
          </UserProvider>
        </ApiProvider>
      </EmittProvider>
    </I18nProvider>
  </ConfigProvider>
)

Init.propTypes = {
  i18n: PropTypes.objectOf(PropTypes.any).isRequired,
  emitter: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.node.isRequired,
  config: PropTypes.objectOf(PropTypes.any).isRequired,
  supportedLanguages: PropTypes.arrayOf(PropTypes.any).isRequired,
}

Init.defaultProps = {
  emitter: {
    on: (event, handler) => console.log('Registered', event, handler),
    off: (event, handler) => console.log('Unregistered', event, handler),
    emit: (event, payload) => console.log('Triggered', event, payload),
  },
}

export default Init
