import React from 'react'
import PropTypes from 'prop-types'
import 'font-awesome/css/font-awesome.css'
import 'source-sans-pro/source-sans-pro.css'
import Header from './Header'
import Loading from './Loading'

const App = ({ user, children }) => (
  <div id="wrapper" >

    <main className="container">

      <Header user={user} />

      <div className="content">
        {children}
      </div>

      <Loading />

    </main>
  </div>
)

App.propTypes = {
  user: PropTypes.string,
  children: PropTypes.node.isRequired
}

App.defaultProps = {
  user: null
}

export default App
