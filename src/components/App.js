import React from 'react'
import PropTypes from 'prop-types'
import 'font-awesome/css/font-awesome.css'
import Header from './Header'
import Loading from './Loading'
import withEmitter from './withEmitter'

const App = ({ user, emitter, children }) => (
  <div
    id="wrapper"
    tabIndex="-1"
    role="button"
    onKeyDown={(e) => {
      if (e.keyCode === 27) {
        e.target.click()
      }
    }}
    onClick={(e) => {
      emitter.emit("click", e)
    }}
  >

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
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
  user: PropTypes.string
}

App.defaultProps = {
  user: null
}

export default withEmitter(App)
