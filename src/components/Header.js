import React from 'react'
import PropTypes from 'prop-types'
import withEmitter from './withEmitter'

import '../styles/Header.pcss'

const Header = ({ user, emitter }) => (
  <header className="Header">
    <nav className="mainNav">
      <a href="/" title="Home">
        <h1>OER W<i className="fa fa-globe" />RLD MAP</h1>
      </a>
      <a href="#">FAQ</a>
      <a href="#">About</a>
      <a href="#">Contribute</a>
      <a href="#">Blog</a>
      <a href="#" title="Facebook">
        <i className="fa fa-facebook-official" />
      </a>
      <a href="#" title="Twitter">
        <i className="fa fa-twitter" />
      </a>
    </nav>

    <nav className="userNav">
      <a href="/contribute">
        <h2>Join us in mapping the world of OER!</h2>
      </a>
      {user ? (
        <a href="/.logout" onClick={(e) => {e.preventDefault(); emitter.emit('logout')}}>
          Log out user {user}
        </a>
      ) : (
        <a href="/.login" onClick={(e) => {e.preventDefault(); emitter.emit('login')}}>
          Log in
        </a>
      )}
    </nav>

  </header>
)


Header.propTypes = {
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
  user: PropTypes.string
}

Header.defaultProps = {
  user: null,
}

export default withEmitter(Header)
