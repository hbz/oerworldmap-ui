/* global document */
import React from 'react'
import PropTypes from 'prop-types'
import withEmitter from './withEmitter'
import withI18n from './withI18n'
import Link from './Link'
import { triggerClick } from '../common'
import expose from '../expose'
import ConceptBlock from './ConceptBlock'
import Icon from './Icon'

import '../styles/components/Header.pcss'
import '../styles/helpers.pcss'

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
    if (e.target !== this.menuToggle)
      this.setState({showMobileMenu:false})
  }

  render() {
    return (
      <header className="Header">

        <Link href="/resource/">
          <h1>OER World Map</h1>
        </Link>

        <button
          className="menuToggle visible-mobile-block"
          onClick={() => {this.setState({showMobileMenu:!this.state.showMobileMenu})}}
          onKeyDown={triggerClick}
          ref={el => this.menuToggle = el}
        >
          <i className="fa fa-bars" />
        </button>

        <nav className={`secondaryNav${this.state.showMobileMenu ? ' show' : '' }`}>
          <ul>

            <li
              className="hasDropdown"
            >
              <button>
                {this.props.translate('Find')}
              </button>
              <div className="dropdown">
                <div className="inner">
                  <div className="popular">
                    {this.props.user &&
                    <ul>
                      <li>
                        <Link href={`/resource/?filter.author=${this.props.user.username}`}>
                          {this.props.translate('My entries')}
                        </Link>
                      </li>
                      {this.props.user.country &&
                      <li>
                        <Link href={`/country/${this.props.user.country}`} >
                          {this.props.translate('Countryview:')} {this.props.translate(this.props.user.country)}
                        </Link>
                      </li>
                      }
                    </ul>
                    }
                    <ul>
                      <li>
                        <Link className="iconItem" href="/resource/?filter.about.objectIn.@type=LighthouseAction&sort=lighthouse_count:DESC">
                          <div className="i">
                            <img className="orangeLighthouse" src="/public/lighthouse_16px_orange.svg" alt="Lighthouse" />
                            <img className="blueLighthouse" src="/public/lighthouse_16px_blue_dark.svg" alt="Lighthouse" />
                          </div>
                          {this.props.translate('ClientTemplates.app.lighthouses')}
                        </Link>
                      </li>
                      <li>
                        <Link className="iconItem" href="/resource/?filter.about.objectIn.@type=LikeAction&sort=like_count:DESC">
                          <i className="fa fa-thumbs-up" />
                          {this.props.translate('Most Liked')}
                        </Link>
                      </li>
                      <li>
                        <Link className="iconItem" href="/feed/">
                          <i className="fa fa-rss" />
                          {this.props.translate('LandigPage.index.recentAdditions')}
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row text-small">
                    <div className="col">
                      <ConceptBlock
                        type="Organization"
                        conceptScheme={require('../json/organizations.json').hasTopConcept}
                        linkTemplate="/resource/?filter.about.additionalType.@id={@id}"
                      />
                    </div>
                    <div className="col">
                      <ConceptBlock
                        type="Person"
                        conceptScheme={require('../json/persons.json').hasTopConcept}
                        linkTemplate="/resource/?filter.about.additionalType.@id={@id}"
                      />
                    </div>
                    <div className="col">
                      <ConceptBlock
                        type="Service"
                        conceptScheme={require('../json/services.json').hasTopConcept}
                        linkTemplate="/resource/?filter.about.additionalType.@id={@id}"
                      />
                    </div>
                    <div className="col">
                      <ConceptBlock
                        type="WebPage"
                        conceptScheme={require('../json/publications.json').hasTopConcept}
                        linkTemplate="/resource/?filter.about.additionalType.@id={@id}"
                      />
                    </div>
                    <div className="col">
                      <ConceptBlock
                        type="Action"
                        conceptScheme={require('../json/projects.json').hasTopConcept}
                        linkTemplate="/resource/?filter.about.additionalType.@id={@id}"
                      />
                      <ConceptBlock
                        type="Product"
                      />
                      <ConceptBlock
                        type="Article"
                      />
                      <ConceptBlock
                        type="Event"
                      />
                    </div>
                  </div>
                </div>
              </div>

            </li>

            <li className="hasDropdown">
              <button>
                {this.props.translate('Add')}
              </button>
              <div className="dropdown">
                <div className="inner">
                  <p>What kind of entry would you like to add?</p>
                  <div className="row vertical-guttered">
                    <div className="col one-fourth">
                      <Link href="/resource/?add=Organization" className="addBox">
                        <h3 className="iconItem"><Icon type="Organization" />{this.props.translate('Organization')}</h3>
                        <p>{this.props.translate('descriptions.Organization')}</p>
                      </Link>
                    </div>
                    <div className="col one-fourth">
                      <Link href="/resource/?add=Organization" className="addBox">
                        <h3 className="iconItem"><Icon type="Organization" />{this.props.translate('Organization')}</h3>
                        <p>{this.props.translate('descriptions.Organization')}</p>
                      </Link>
                    </div>
                    <div className="col one-fourth">
                      <Link href="/resource/?add=Organization" className="addBox">
                        <h3 className="iconItem"><Icon type="Organization" />{this.props.translate('Organization')}</h3>
                        <p>{this.props.translate('descriptions.Organization')}</p>
                      </Link>
                    </div>
                    <div className="col one-fourth">
                      <Link href="/resource/?add=Organization" className="addBox">
                        <h3 className="iconItem"><Icon type="Organization" />{this.props.translate('Organization')}</h3>
                        <p>{this.props.translate('descriptions.Organization')}</p>
                      </Link>
                    </div>
                    <div className="col one-fourth">
                      <Link href="/resource/?add=Organization" className="addBox">
                        <h3 className="iconItem"><Icon type="Organization" />{this.props.translate('Organization')}</h3>
                        <p>{this.props.translate('descriptions.Organization')}</p>
                      </Link>
                    </div>
                    <div className="col one-fourth">
                      <Link href="/resource/?add=Organization" className="addBox">
                        <h3 className="iconItem"><Icon type="Organization" />{this.props.translate('Organization')}</h3>
                        <p>{this.props.translate('descriptions.Organization')}</p>
                      </Link>
                    </div>
                    <div className="col one-fourth">
                      <Link href="/resource/?add=Organization" className="addBox">
                        <h3 className="iconItem"><Icon type="Organization" />{this.props.translate('Organization')}</h3>
                        <p>{this.props.translate('descriptions.Organization')}</p>
                      </Link>
                    </div>
                    <div className="col one-fourth">
                      <Link href="https://github.com/hbz/oerworldmap/wiki/FAQs-for-OER-World-Map-editors">
                        Need help?
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {this.props.user &&
            <li className="hasDropdown">
              <button>
                {this.props.translate('Me')}
              </button>
              <div className="dropdown">
                <div className="inner">
                  <div className="row">
                    <div className="col one-third">
                      <ul className="linedList">
                        <li>
                          <Link href="/resource/">
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link href={`/resource/${this.props.user.id}`}>
                            Personal Profile
                          </Link>
                        </li>
                        <li>
                          <Link href="/user/password">
                            Change Password
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col one-third">
                      <ul className="linedList">
                        <li>
                          <Link className="item" href={`/resource/?filter.author=${this.props.user.username}`}>
                            <i className="fa fa-plus" /><span>My Entries</span>
                          </Link>
                        </li>
                        {/* TODO: Set correct link */}
                        <li>
                          <Link className="item" href={`/resource/?filter.about.objectIn.agent.@id=${this.props.user.id}&filter.about.objectIn.@type=LikeAction`}>
                            <i className="fa fa-thumbs-up" />
                            <span>My likes</span>
                          </Link>
                        </li>
                        <li>
                          <Link className="item" href={`/resource/?filter.about.objectIn.agent.@id=${this.props.user.id}&filter.about.objectIn.@type=LighthouseAction`}>
                            <div className="i">
                              <img className="blueLighthouse" src="/public/lighthouse_16px_blue_dark.svg" alt="Lighthouse" />
                            </div>
                            <span>My Lighthouses</span>
                          </Link>
                        </li>
                        <li>
                          <Link className="item" href={`/resource/?filter.about.attendee.@id=${this.props.user.id}`}>
                            <i className="fa fa-calendar" />
                            <span>Events I&apos;m attending</span>
                          </Link>
                        </li>
                        <li>
                          <Link className="item" href={`/resource/?filter.about.member.@id=${this.props.user.id}`}>
                            <i className="fa fa-users" />
                            <span>Organizations I&apos;m a member of</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col one-third">
                      <ul className="linedList border-bottom">
                        <li>
                          <Link className="item" href="/.logout">
                            <i className="fa fa-sign-out" />
                            <span>Logout</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            }

            <li className="visible-mobile-block">
              <Link href="/resource/">
                {this.props.translate('main.map')}
              </Link>
            </li>
            <li>
              <a
                href="/contribute"
                title={this.props.translate('contribute')}
              >
                {this.props.translate('contribute')}
              </a>
            </li>
            <li>
              <a
                href="/about"
                title={this.props.translate('main.about')}
              >
                {this.props.translate('main.about')}
              </a>
            </li>

            <li>
              <a
                href="/FAQ"
                title={this.props.translate('main.faq')}
              >
                {this.props.translate('main.faq')}
              </a>
            </li>

            <li>
              <a
                href="https://oerworldmap.wordpress.com/"
                title={this.props.translate('main.blog')}
                target="_blank"
                rel="noopener noreferrer"
              >
                {this.props.translate('main.blog')}
              </a>
            </li>

            <li className="visible-mobile-block">
              <a
                href="/imprint"
                target="_blank"
                title={this.props.translate('main.imprintPrivacy')}
              >
                {this.props.translate('main.imprintPrivacy')}
              </a>
            </li>

            <li>
              {expose('userMenu', this.props.user) ? (
                <button
                  className="menuBtn"
                  href="#nothing"
                  title={this.props.user.username}
                  onClick={() => {this.setState({showUserMenu:!this.state.showUserMenu})}}
                  ref={el => this.menuBtn = el}
                >
                  <i className="fa fa-user" />
                </button>

              ) : (
                <Link
                  title={this.props.translate('login')}
                  href="/user/register"
                  className="loginLink"
                >
                  {this.props.translate('login')}
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
                      {this.props.translate('main.logout')} <i className="fa fa-sign-out" />
                    </a>
                  </li>
                </ul>
              }
            </li>

          </ul>

        </nav>



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
