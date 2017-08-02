import React from 'react'

import '../styles/Header.pcss'

const Header = () => (
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
      <a href="/user/register">Login</a>
    </nav>

  </header>
)

export default Header
