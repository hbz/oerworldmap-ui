/* global document */
import React from 'react'
import PropTypes from 'prop-types'
import withEmitter from './withEmitter'
import withI18n from './withI18n'
import Link from './Link'
import { triggerClick } from '../common'

import '../styles/components/Header.pcss'

class Header extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      showUserMenu: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    document.addEventListener("click", this.handleClick)
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClick)
  }

  handleClick(e) {
    if (e.target !== this.menuBtn)
      this.setState({showUserMenu:false})
  }

  render() {
    return (
      <header className="Header">

        <nav className="mainNav">
          <Link href="/resource/">
            <h1>OER World Map</h1>
          </Link>
        </nav>

        <nav
          className="menuToggle mobile"
          tabIndex="0"
          role="button"
          onClick={() => {this.setState({showMobileMenu:!this.state.showMobileMenu})}}
          onKeyDown={triggerClick}
          ref={el => this.menuToggle = el}
        >
          <i className="fa fa-bars" />
        </nav>

        <nav className={`secondaryNav${this.state.showMobileMenu ? ' show' : '' }`}>

          <Link href="/resource/" className="mobile">
            {this.props.translate('Map')}
          </Link>

          <a
            href="/contribute"
            title={this.props.translate('Header.contribute')}
          >
            {this.props.translate('Header.contribute')}
          </a>
          <a
            href="/about"
            title={this.props.translate('Header.about')}
          >
            {this.props.translate('Header.about')}
          </a>
          <a
            href="/FAQ"
            title={this.props.translate('Header.faq')}
          >
            {this.props.translate('Header.faq')}
          </a>
          <a
            href="https://oerworldmap.wordpress.com/"
            title={this.props.translate('Header.blog')}
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.props.translate('Header.blog')}
          </a>
          <a
            href="/imprint"
            target="_blank"
            className="mobile"
            title={this.props.translate('Imprint & Privacy')}
          >
            {this.props.translate('Imprint & Privacy')}
          </a>

        </nav>

        {this.props.user ? (
          <div
            className="menuBtn"
            href="#nothing"
            title={this.props.user.username}
            tabIndex="0"
            role="button"
            onClick={() => {this.setState({showUserMenu:!this.state.showUserMenu})}}
            onKeyDown={triggerClick}
            ref={el => this.menuBtn = el}
          >
            <i className="fa fa-user" />

          </div>

        ) : (
          <Link
            title={this.props.translate('Header.logIn')}
            href="/user/register"
          >
            {this.props.translate('Header.logIn')}
          </Link>
        )}

        {this.state.showUserMenu &&
          <ul className="userMenu">
            <li>
              <Link href={`/resource/${this.props.user.id}`} >My Profile <i className="fa fa-user" /></Link>
            </li>
            <li>
              <Link href="/user/password">Change Password <i className="fa fa-lock" /></Link>
            </li>
            <li>
              <a
                href="/.logout"
                onClick={(e) => {
                  e.preventDefault()
                  this.props.emitter.emit('logout')
                }}
              >
                {this.props.translate('Header.logOut')} <i className="fa fa-sign-out" />
              </a>
            </li>
          </ul>
        }

      </header>
    )
  }
}

Header.propTypes = {
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
  translate: PropTypes.func.isRequired,
  user: PropTypes.objectOf(PropTypes.any)
}

Header.defaultProps = {
  user: null,
}

export default withEmitter(withI18n(Header))
