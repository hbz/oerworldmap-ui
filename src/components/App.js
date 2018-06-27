import React from 'react'
import PropTypes from 'prop-types'
import 'font-awesome/css/font-awesome.css'
import 'source-sans-pro/source-sans-pro.css'
import 'rc-tooltip/assets/bootstrap_white.css'
import Header from './Header'
import Loading from './Loading'

const App = ({ user, children }) => (
  <div id="wrapper">

    <main className="container" data-userroles={user ? user.groups.join(' ') : null}>

      <Header user={user} />

      <div className="content">
        {children}
      </div>

      <Loading />

    </main>
  </div>
)

App.propTypes = {
  user: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.node.isRequired
}

App.defaultProps = {
  user: null
}

export default App
