import React from 'react'
import PropTypes from 'prop-types'
import 'normalize.css'
import 'font-awesome/css/font-awesome.css'
import 'rc-tooltip/assets/bootstrap_white.css'
import '../styles/fonts.pcss'
import '../styles/main.pcss'

import Header from './Header'
import Loading from './Loading'
import withUser from './withUser'

const App = ({
  user, locales, supportedLanguages, children,
}) => (
  <div id="wrapper">

    <main className="container" data-userroles={user && user.groups ? user.groups.join(' ') : null}>

      <Header locales={locales} supportedLanguages={supportedLanguages} />

      <div className="content">
        {children}
      </div>

      <Loading />

    </main>
  </div>
)

App.propTypes = {
  user: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.node.isRequired,
  locales: PropTypes.arrayOf(PropTypes.any).isRequired,
  supportedLanguages: PropTypes.arrayOf(PropTypes.any).isRequired,
}

App.defaultProps = {
  user: null,
}

export default withUser(App)
