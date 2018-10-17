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
      dropdowns: {
        find: false,
        add: false,
        info: false,
        me: false
      }
    }
    this.handleClick = this.handleClick.bind(this)
    this.setDropdown = this.setDropdown.bind(this)
  }

  componentDidMount() {
    document.addEventListener("click", this.handleClick)

    this.props.emitter.on('setLoading', () => {
      if (this.dropDown) {
        this.setState({showMobileMenu:false})
        this.setDropdown('')
      }
    })
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClick)
  }

  setDropdown(name) {
    const dropdowns = {}

    Object.keys(this.state.dropdowns).forEach(key =>  {
      dropdowns[key] = key === name && this.state.dropdowns[key] !== true
    })

    this.setState({dropdowns})
  }

  handleClick(e) {
    if (e.target !== this.menuToggle && (this.secondaryNav && !this.secondaryNav.contains(e.target)))
      this.setState({showMobileMenu:false})
  }

  render() {
    return (
      <header className="Header">

        <Link href="/resource/">
          <h1>{this.props.translate('OER World Map')}</h1>
        </Link>

        <button
          className="menuToggle visible-mobile-block"
          onClick={() => {
            this.setState({showMobileMenu:!this.state.showMobileMenu})
            this.setDropdown('')
          }}
          onKeyDown={triggerClick}
          ref={el => this.menuToggle = el}
        >
          <i className="fa fa-bars" />
        </button>

        <nav
          className={`secondaryNav${this.state.showMobileMenu ? ' show' : '' }`}
          ref={secondaryNav => this.secondaryNav = secondaryNav}
        >
          <ul>

            <li
              className={`hasDropdown${this.state.dropdowns.find ? ' active': ''}`}
              onMouseLeave={() => {
                this.setDropdown('')
              }}
              onMouseEnter={() => {
                this.setDropdown('find')
              }}
            >
              <button
                onClick={() => {
                  this.setDropdown('find')
                }}
              >
                {this.props.translate('menu.find')}
              </button>
              <div className="dropdown">
                <div className="inner">
                  <div className="popular border-bottom">

                    <ul>
                      <li>
                        <Link className="iconItem" href="/resource/?filter.about.objectIn.@type=LighthouseAction&sort=lighthouse_count:DESC">
                          <div className="i">
                            <img className="visible-hover-focus" src="/public/lighthouse_16px_orange.svg" alt="Lighthouse" />
                            <img className="hidden-hover-focus" src="/public/lighthouse_16px_blue_dark.svg" alt="Lighthouse" />
                          </div>
                          {this.props.translate('ClientTemplates.app.lighthouses')}
                        </Link>
                      </li>
                      <li>
                        <Link className="iconItem" href="/resource/?filter.about.objectIn.@type=LikeAction&sort=like_count:DESC">
                          <i className="fa fa-thumbs-up" />
                          {this.props.translate('menu.most_liked')}
                        </Link>
                      </li>
                      <li>
                        <Link className="iconItem" href="/feed/">
                          <i className="fa fa-rss" />
                          {this.props.translate('LandigPage.index.recentAdditions')}
                        </Link>
                      </li>
                      <li>
                        <Link className="iconItem" href="/aggregation/">
                          <i className="fa fa-pie-chart" />
                          {this.props.translate('ClientTemplates.app.statistics')}
                        </Link>
                      </li>
                      <li>
                        <Link className="iconItem" href="/resource/?q=_exists_:about.countryChampionFor">
                          <i className="fa fa-trophy" />
                          {this.props.translate('ClientTemplates.app.countryChampions')}
                        </Link>
                      </li>
                    </ul>

                    {this.props.user &&
                    <ul>
                      <li>
                        <Link className="iconItem" href={`/resource/?filter.author.keyword=${this.props.user.id}`}>
                          <i className="fa fa-pencil" />{this.props.translate('menu.my_entries')}
                        </Link>
                      </li>
                      {this.props.user.country &&
                      <li>
                        <Link className="iconItem" href={`/country/${this.props.user.country}`}>
                          <i className="fa fa-flag" />{this.props.translate('Countryview:')} {this.props.translate(this.props.user.country)}
                        </Link>
                      </li>
                      }
                    </ul>
                    }

                  </div>
                  <div className="row text-small stack-700">
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

            {expose('addEntry', this.props.user) &&
            <li
              className={`hasDropdown${this.state.dropdowns.add ? ' active': ''}`}
              onMouseLeave={() => {
                this.setDropdown('')
              }}
              onMouseEnter={() => {
                this.setDropdown('add')
              }}
            >
              <button
                onClick={() => {
                  this.setDropdown('add')
                }}
              >
                {this.props.translate('menu.add')}
              </button>
              <div className="dropdown">
                <div className="inner">
                  <div className="popular">
                    <div>
                      {this.props.translate('menu.add.subtitle')}
                    </div>
                    <ul>
                      <li>
                        <Link className="link-grey" rel="noopener noreferrer" target="_blank" href="https://github.com/hbz/oerworldmap/wiki/FAQs-for-OER-World-Map-editors#service-organization-or-project">
                          {this.props.translate('needHelp')}
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row vertical-guttered stack-700" style={{justifyContent: "start"}}>
                    <div className="col one-fourth">
                      <Link href="/resource/?add=Organization" className="addBox">
                        <h3 className="iconItem"><Icon type="Organization" />{this.props.translate('Organization')}</h3>
                        <p className="text-small">{this.props.translate('descriptions.Organization')}</p>
                      </Link>
                    </div>
                    <div className="col one-fourth">
                      <Link href="/resource/?add=Action" className="addBox">
                        <h3 className="iconItem"><Icon type="Action" />{this.props.translate('Action')}</h3>
                        <p className="text-small">{this.props.translate('descriptions.Action')}</p>
                      </Link>
                    </div>
                    <div className="col one-fourth">
                      <Link href="/resource/?add=Service" className="addBox">
                        <h3 className="iconItem"><Icon type="Service" />{this.props.translate('Service')}</h3>
                        <p className="text-small">{this.props.translate('descriptions.Service')}</p>
                      </Link>
                    </div>
                    <div className="col one-fourth">
                      <Link href="/resource/?add=Event" className="addBox">
                        <h3 className="iconItem"><Icon type="Event" />{this.props.translate('Event')}</h3>
                        <p className="text-small">{this.props.translate('descriptions.Event')}</p>
                      </Link>
                    </div>
                    <div className="col one-fourth">
                      <Link href="/resource/?add=Article" className="addBox">
                        <h3 className="iconItem"><Icon type="Article" />{this.props.translate('Article')}</h3>
                        <p className="text-small">{this.props.translate('descriptions.Article')}</p>
                      </Link>
                    </div>
                    <div className="col one-fourth">
                      <Link href="/resource/?add=WebPage" className="addBox">
                        <h3 className="iconItem"><Icon type="WebPage" />{this.props.translate('WebPage')}</h3>
                        <p className="text-small">{this.props.translate('descriptions.WebPage')}</p>
                      </Link>
                    </div>
                    <div className="col one-fourth">
                      <Link href="/resource/?add=Product" className="addBox">
                        <h3 className="iconItem"><Icon type="Product" />{this.props.translate('Product')}</h3>
                        <p className="text-small">{this.props.translate('descriptions.Product')}</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            }

            <li
              className={`hasDropdown${this.state.dropdowns.info ? ' active': ''}`}
              onMouseLeave={() => {
                this.setDropdown('')
              }}
              onMouseEnter={() => {
                this.setDropdown('info')
              }}
            >
              <button
                onClick={() => {
                  this.setDropdown('info')
                }}
              >
                {this.props.translate('menu.info')}
              </button>
              <div className="dropdown">
                <div className="inner">
                  <div className="row stack-700 stack-gutter-2em">
                    <div className="col one-forth">
                      <ul className="linedList border-bottom">
                        <li>
                          <h3>{this.props.translate('menu.info.topical')}</h3>
                        </li>
                        <li>
                          <a className="item" href="/about#newsletter">
                            {this.props.translate('menu.info.topical.newsletter')}
                          </a>
                        </li>
                        <li>
                          <a className="item" href="https://oerworldmap.wordpress.com/" rel="noopener noreferrer" target="_blank">
                            {this.props.translate('menu.info.topical.blog')}
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col one-forth">
                      <ul className="linedList border-bottom">
                        <li>
                          <h3>{this.props.translate('menu.info.about')}</h3>
                        </li>
                        <li>
                          <a className="item" href="/about#the-vision">
                            {this.props.translate('The OER World Map')}
                          </a>
                        </li>
                        <li>
                          <a className="item" href="/contribute">
                            {this.props.translate('menu.info.about.contribute')}
                          </a>
                        </li>
                        <li>
                          <a className="item" href="/FAQ">
                            {this.props.translate('menu.info.about.faq')}
                          </a>
                        </li>
                        <li>
                          <a className="item" href="/about#team">
                            {this.props.translate('menu.info.about.team')}
                          </a>
                        </li>
                        <li>
                          <a className="item" rel="noopener noreferrer" target="_blank" href="https://github.com/hbz/oerworldmap/wiki/FAQs-for-OER-World-Map-editors">
                            {this.props.translate('menu.info.about.faqeditors')}
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col one-forth">
                      <ul className="linedList border-bottom">
                        <li>
                          <h3>{this.props.translate('menu.info.social')}</h3>
                        </li>
                        <li>
                          <a className="item" href="https://www.facebook.com/oerworldmap" rel="noopener noreferrer" target="_blank">
                            {this.props.translate('menu.info.social.facebook')}
                          </a>
                        </li>
                        <li>
                          <a className="item" href="https://twitter.com/oerworldmap" rel="noopener noreferrer" target="_blank">
                            {this.props.translate('menu.info.social.twitter')}
                          </a>
                        </li>
                        <li>
                          <a className="item" href="https://github.com/hbz/oerworldmap" rel="noopener noreferrer" target="_blank">
                            {this.props.translate('menu.info.social.github')}
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col one-forth">
                      <ul className="linedList border-bottom">
                        <li>
                          <h3>{this.props.translate('menu.info.legal')}</h3>
                        </li>
                        <li>
                          <a className="item" href="mailto:info@oerworldmap.org">
                            {this.props.translate('menu.info.legal.contact')}
                          </a>
                        </li>
                        <li>
                          <a className="item" href="/imprint">
                            {this.props.translate('menu.info.legal.imprint')}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {this.props.user ? (
              <li
                className={`hasDropdown${this.state.dropdowns.me ? ' active': ''}`}
                onMouseLeave={() => {
                  this.setDropdown('')
                }}
                onMouseEnter={() => {
                  this.setDropdown('me')
                }}
              >
                <button
                  onClick={() => {
                    this.setDropdown('me')
                  }}
                >
                  {this.props.translate('menu.me')}
                </button>
                <div
                  ref={el => this.dropDown = el}
                  className="dropdown"
                >
                  <div className="inner">
                    <div className="row stack-700 stack-gutter-2em">
                      <div className="col one-half">
                        <ul className="linedList border-bottom">
                          <li>
                            <Link className="item" href="/resource/">
                              <i className="fa fa-home" /><span>{this.props.translate('menu.me.home')}</span>
                            </Link>
                          </li>
                          <li>
                            <Link className="item" href={`/resource/${this.props.user.id}`}>
                              <i className="fa fa-user-circle" /><span>{this.props.translate('menu.me.profile')}</span>
                            </Link>
                          </li>
                          {expose('groupAdmin', this.props.user) &&
                          <li>
                            <Link className="item" href="/user/groups">
                              <i className="fa fa-gear" /><span>{this.props.translate('menu.me.groups')}</span>
                            </Link>
                          </li>
                          }
                          <li>
                            <Link className="item" href="/user/password">
                              <i className="fa fa-lock" /><span>{this.props.translate('menu.me.password')}</span>
                            </Link>
                          </li>
                          <li>
                            <a
                              className="item"
                              href="/.logout"
                              onClick={(e) => {
                                e.preventDefault()
                                this.props.emitter.emit('logout')
                              }}
                            >
                              <i className="fa fa-sign-out" />
                              <span>{this.props.translate('menu.me.logout')}</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col one-half">
                        <ul className="linedList border-bottom">
                          <li>
                            <Link className="item" href={`/resource/?filter.author.keyword=${this.props.user.id}`}>
                              <i className="fa fa-pencil" /><span>{this.props.translate('menu.me.entries')}</span>
                            </Link>
                          </li>
                          <li>
                            <Link className="item" href={`/resource/?filter.about.objectIn.agent.@id=${this.props.user.id}&filter.about.objectIn.@type=LikeAction`}>
                              <i className="fa fa-thumbs-up" />
                              <span>{this.props.translate('menu.me.likes')}</span>
                            </Link>
                          </li>
                          <li>
                            <Link className="item" href={`/resource/?filter.about.objectIn.agent.@id=${this.props.user.id}&filter.about.objectIn.@type=LighthouseAction`}>
                              <div className="i">
                                <img className="visible-hover-focus" src="/public/lighthouse_16px_orange.svg" alt="Lighthouse" />
                                <img className="hidden-hover-focus" src="/public/lighthouse_16px_blue_dark.svg" alt="Lighthouse" />
                              </div>
                              <span>{this.props.translate('menu.me.lighthouses')}</span>
                            </Link>
                          </li>
                          <li>
                            <Link className="item" href={`/resource/?filter.about.attendee.@id=${this.props.user.id}`}>
                              <i className="fa fa-calendar" />
                              <span>{this.props.translate('menu.me.events')}</span>
                            </Link>
                          </li>
                          <li>
                            <Link className="item" href={`/resource/?filter.about.affiliate.@id=${this.props.user.id}`}>
                              <i className="fa fa-users" />
                              <span>{this.props.translate('menu.me.organizations')}</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ) : (
              <li>
                <Link
                  title={this.props.translate('login')}
                  href="/user/register"
                  className="loginLink"
                >
                  {this.props.translate('login')}
                </Link>
              </li>
            )}

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
