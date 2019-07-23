/* global window */
/* global document */
/* global location */
/* global SUPPORTED_LANGUAGES */
/* global _paq */
import React from 'react'
import PropTypes from 'prop-types'
import withEmitter from './withEmitter'
import withI18n from './withI18n'
import Link from './Link'
import { triggerClick, addParamToURL, urlParse } from '../common'
import expose from '../expose'
import ConceptBlock from './ConceptBlock'
import Icon from './Icon'

import '../styles/components/Header.pcss'
import '../styles/helpers.pcss'

const types = ["Organization", "Action", "Service", "Event", "Article", "WebPage", "Product", "Policy"]

class Header extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      dropdowns: {
        find: false,
        add: false,
        info: false,
        me: false
      },
      showNotification: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.setDropdown = this.setDropdown.bind(this)
  }

  componentDidMount() {
    const { emitter, user } = this.props
    document.addEventListener("click", this.handleClick)

    emitter.on('setLoading', () => {
      if (this.dropDown) {
        this.setState({showMobileMenu:false})
        this.setDropdown('')
      }
    })

    emitter.on('newActivity', (activities) =>  {

      if (location.pathname !== '/activity/') {
        const showNotification = !user || activities.some(activity => activity.user && activity.user["@id"] !== user.id)
        this.setState({showNotification})
      }
    })

    emitter.on('clearActivity', () =>  {
      this.setState({showNotification: false})
    })

  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClick)
  }

  setDropdown(name) {
    const { dropdowns } = this.state
    const dropdownsState = {}

    Object.keys(dropdowns).forEach(key =>  {
      dropdownsState[key] = key === name && dropdowns[key] !== true
    })

    this.setState({dropdowns: dropdownsState})
  }

  handleClick(e) {
    if (e.target !== this.menuToggle && (this.secondaryNav && !this.secondaryNav.contains(e.target)))
      this.setState({showMobileMenu:false})
  }

  render() {
    const { translate, user, emitter, locales } = this.props
    const { showMobileMenu, dropdowns, showNotification} = this.state
    const pathname = urlParse(Link.self).pathname

    let { supportedLanguages } = this.props
    if (!supportedLanguages) {
      supportedLanguages = SUPPORTED_LANGUAGES
    }

    return (
      <header className="Header">

        <div className="headerTitle">
          <a href="/">
            <h1>{translate('OER World Map')}</h1>
          </a>

          <a title={translate("main.map")} href="/resource/">
            <i aria-hidden="true" className="fa fa-globe" />
          </a>

          {(pathname === '/resource/' || pathname.startsWith('/country/')) && (
            <a
              href="#tour"
              className="tour"
              onClick={e => {
                e.preventDefault()
                emitter.emit('resetTour')
              }}
            >
              {translate("Take a tour")}
            </a>
          )}

        </div>

        <button
          className="menuToggle visible-mobile-block"
          onClick={() => {
            this.setState({showMobileMenu:!showMobileMenu})
            this.setDropdown('')
          }}
          onKeyDown={triggerClick}
          ref={el => this.menuToggle = el}
        >
          <i aria-hidden="true" className="fa fa-bars" />
        </button>

        <nav
          className={`secondaryNav${showMobileMenu ? ' show' : '' }`}
          ref={secondaryNav => this.secondaryNav = secondaryNav}
        >
          <ul>

            <li>
              <Link href="/activity/">
                {translate('Activity')}
                {showNotification && (
                  <span className="showNotification">
                    <i className="fa fa-bell" aria-hidden="true" />
                  </span>
                )
                }
              </Link>
            </li>
            <li
              className={`hasDropdown${dropdowns.find ? ' active': ''}`}
              onMouseLeave={() => {
                this.setDropdown('')
              }}
              onMouseEnter={() => {
                this.setDropdown('find')
              }}
            >
              <div
                tabIndex="0"
                className="btnHover"
                onKeyDown={triggerClick}
                role="button"
                onClick={() => {
                  this.setDropdown('find')
                }}
              >
                {translate('menu.find')}
              </div>
              <div className="dropdown">
                <div className="inner">
                  <div className="popular">

                    <ul>
                      <li>
                        <Link className="iconItem" href="/resource/?filter.about.objectIn.@type=LighthouseAction&sort=lighthouse_count:DESC">
                          <div className="i">
                            <img className="visible-hover-focus" src="/public/lighthouse_16px_orange.svg" alt="Lighthouse" />
                            <img className="hidden-hover-focus" src="/public/lighthouse_16px_blue_dark.svg" alt="Lighthouse" />
                          </div>
                          {translate('ClientTemplates.app.lighthouses')}
                        </Link>
                      </li>
                      <li>
                        <Link className="iconItem" href="/resource/?filter.about.objectIn.@type=LikeAction&sort=like_count:DESC">
                          <i aria-hidden="true" className="fa fa-thumbs-up" />
                          {translate('menu.most_liked')}
                        </Link>
                      </li>
                      <li>
                        <Link className="iconItem" href="/feed/">
                          <i aria-hidden="true" className="fa fa-rss" />
                          {translate('LandigPage.index.recentAdditions')}
                        </Link>
                      </li>
                      <li>
                        <Link className="iconItem" href="/aggregation/">
                          <i aria-hidden="true" className="fa fa-pie-chart" />
                          {translate('ClientTemplates.app.statistics')}
                        </Link>
                      </li>
                      <li>
                        <Link className="iconItem" href="/resource/?q=_exists_:about.countryChampionFor">
                          <i className="fa fa-trophy" />
                          {translate('ClientTemplates.app.countryChampions')}
                        </Link>
                      </li>
                      <li>
                        <a className="iconItem" href="/oerpolicies">
                          <i className="fa fa-balance-scale" />
                          {translate('ClientTemplates.app.oerpolicies')}
                        </a>
                      </li>
                    </ul>

                    {user && (
                      <ul>
                        <li>
                          <Link className="iconItem" href={`/resource/?filter.author.keyword=${user.id}`}>
                            <i aria-hidden="true" className="fa fa-pencil" />
                            {translate('menu.my_entries')}
                          </Link>
                        </li>
                        {user.country && (
                          <li>
                            <Link className="iconItem" href={`/country/${user.country}`}>
                              <i aria-hidden="true" className="fa fa-flag" />
                              {translate('Countryview:')}
                              &nbsp;
                              {translate(user.country)}
                            </Link>
                          </li>
                        )}
                      </ul>
                    )}

                  </div>

                  <form action="/resource/">
                    <div className="headerSearch">
                      <button type="submit">
                        <i
                          aria-hidden="true"
                          className="fa fa-search"
                          title="Search"
                        />
                      </button>

                      <input
                        type="search"
                        name="q"
                        placeholder={`${translate('ResourceIndex.index.searchMap')}...`}
                      />
                    </div>
                  </form>

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
                      <ConceptBlock
                        type="Policy"
                        conceptScheme={require('../json/policyTypes.json').hasTopConcept}
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

            <li
              className={`hasDropdown${dropdowns.add ? ' active': ''}`}
              onMouseLeave={() => {
                this.setDropdown('')
              }}
              onMouseEnter={() => {
                typeof _paq !== 'undefined' && _paq.push(['trackEvent', 'MainMenu', 'MenuEntryClick', 'Add'])
                this.setDropdown('add')
              }}
            >
              <div
                tabIndex="0"
                className="btnHover"
                onKeyDown={triggerClick}
                role="button"
                onClick={() => {
                  typeof _paq !== 'undefined' && _paq.push(['trackEvent', 'MainMenu', 'MenuEntryClick', 'Add'])
                  this.setDropdown('add')
                }}
              >
                {translate('menu.add')}
              </div>
              <div className="dropdown">
                <div className="inner">
                  <div className="popular">
                    <div style={{maxWidth: '80%'}}>
                      {translate('menu.add.subtitle')}
                      <p dangerouslySetInnerHTML={{__html: translate('menu.hint')}} />
                    </div>
                    <Link className="link-grey" rel="noopener noreferrer" target="_blank" href="https://github.com/hbz/oerworldmap/wiki/FAQs-for-OER-World-Map-editors#service-organization-or-project">
                      {translate('needHelp')}
                    </Link>
                  </div>
                  <div className="row vertical-guttered stack-700" style={{justifyContent: "start"}}>

                    {types.map(type => (
                      <div key={type} className="col one-fourth">
                        <Link
                          className="addBox"
                          href={`/resource/?add=${type}`}
                          additional={() => {
                            typeof _paq !== 'undefined' && _paq.push(['trackEvent', 'AddMenu', 'TypeClick', type])
                          }}
                        >
                          <h3 className="iconItem">
                            <Icon type={type} />
                            {translate(type)}
                          </h3>
                          <p className="text-small">{translate(`descriptions.${type}`)}</p>
                        </Link>
                      </div>
                    ))}

                  </div>
                </div>
              </div>
            </li>

            <li
              className={`hasDropdown${dropdowns.info ? ' active': ''}`}
              onMouseLeave={() => {
                this.setDropdown('')
              }}
              onMouseEnter={() => {
                this.setDropdown('info')
              }}
            >
              <div
                tabIndex="0"
                className="btnHover"
                onKeyDown={triggerClick}
                role="button"
                onClick={() => {
                  this.setDropdown('info')
                }}
              >
                {translate('menu.info')}
              </div>
              <div className="dropdown">
                <div className="inner">
                  <div className="row stack-700 stack-gutter-2em">
                    <div className="col one-forth">
                      <ul className="linedList border-bottom">
                        <li>
                          <h3>{translate('menu.info.topical')}</h3>
                        </li>
                        <li>
                          <a className="item" href="/about#newsletter">
                            {translate('menu.info.topical.newsletter')}
                          </a>
                        </li>
                        <li>
                          <a className="item" href="https://oerworldmap.wordpress.com/" rel="noopener noreferrer" target="_blank">
                            {translate('menu.info.topical.blog')}
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col one-forth">
                      <ul className="linedList border-bottom">
                        <li>
                          <h3>{translate('menu.info.about')}</h3>
                        </li>
                        <li>
                          <a className="item" href="/about#the-vision">
                            {translate('The OER World Map')}
                          </a>
                        </li>
                        <li>
                          <a className="item" href="/contribute">
                            {translate('menu.info.about.contribute')}
                          </a>
                        </li>
                        <li>
                          <a className="item" href="/FAQ">
                            {translate('menu.info.about.faq')}
                          </a>
                        </li>
                        <li>
                          <a className="item" href="/about#team">
                            {translate('menu.info.about.team')}
                          </a>
                        </li>
                        <li>
                          <a className="item" href="editorsFAQ">
                            {translate('menu.info.about.faqeditors')}
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col one-forth">
                      <ul className="linedList border-bottom">
                        <li>
                          <h3>{translate('menu.info.social')}</h3>
                        </li>
                        <li>
                          <a className="item" href="https://www.facebook.com/oerworldmap" rel="noopener noreferrer" target="_blank">
                            {translate('menu.info.social.facebook')}
                          </a>
                        </li>
                        <li>
                          <a className="item" href="https://twitter.com/oerworldmap" rel="noopener noreferrer" target="_blank">
                            {translate('menu.info.social.twitter')}
                          </a>
                        </li>
                        <li>
                          <a className="item" href="https://github.com/hbz/oerworldmap" rel="noopener noreferrer" target="_blank">
                            {translate('menu.info.social.github')}
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col one-forth">
                      <ul className="linedList border-bottom">
                        <li>
                          <h3>{translate('menu.info.legal')}</h3>
                        </li>
                        <li>
                          <a className="item" href="mailto:info@oerworldmap.org">
                            {translate('menu.info.legal.contact')}
                          </a>
                        </li>
                        <li>
                          <a className="item" href="/imprint">
                            {translate('menu.info.legal.imprint')}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {user ? (
              <li
                className={`hasDropdown${dropdowns.me ? ' active': ''}`}
                onMouseLeave={() => {
                  this.setDropdown('')
                }}
                onMouseEnter={() => {
                  this.setDropdown('me')
                }}
              >
                <div
                  tabIndex="0"
                  className="btnHover"
                  onKeyDown={triggerClick}
                  role="button"
                  onClick={() => {
                    this.setDropdown('me')
                  }}
                >
                  {translate('menu.me')}
                </div>
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
                              <i aria-hidden="true" className="fa fa-home" />
                              <span>{translate('menu.me.home')}</span>
                            </Link>
                          </li>
                          <li>
                            <Link className="item" href={`/resource/${user.id}`}>
                              <i aria-hidden="true" className="fa fa-user-circle" />
                              <span>{translate('menu.me.profile')}</span>
                            </Link>
                          </li>
                          {expose('groupAdmin', user) && (
                            <li>
                              <Link className="item" href="/user/groups">
                                <i aria-hidden="true" className="fa fa-gear" />
                                <span>{translate('menu.me.groups')}</span>
                              </Link>
                            </li>
                          )}
                          <li>
                            <Link className="item" href="/user/password">
                              <i aria-hidden="true" className="fa fa-lock" />
                              <span>{translate('menu.me.password')}</span>
                            </Link>
                          </li>
                          <li>
                            <a
                              className="item"
                              href="/.logout"
                              onClick={(e) => {
                                e.preventDefault()
                                emitter.emit('logout')
                              }}
                            >
                              <i aria-hidden="true" className="fa fa-sign-out" />
                              <span>{translate('menu.me.logout')}</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col one-half">
                        <ul className="linedList border-bottom">
                          <li>
                            <Link className="item" href={`/resource/?filter.author.keyword=${user.id}`}>
                              <i aria-hidden="true" className="fa fa-pencil" />
                              <span>{translate('menu.me.entries')}</span>
                            </Link>
                          </li>
                          <li>
                            <Link className="item" href={`/resource/?filter.about.objectIn.agent.@id=${user.id}&filter.about.objectIn.@type=LikeAction`}>
                              <i aria-hidden="true" className="fa fa-thumbs-up" />
                              <span>{translate('menu.me.likes')}</span>
                            </Link>
                          </li>
                          <li>
                            <Link className="item" href={`/resource/?filter.about.objectIn.agent.@id=${user.id}&filter.about.objectIn.@type=LighthouseAction`}>
                              <div className="i">
                                <img className="visible-hover-focus" src="/public/lighthouse_16px_orange.svg" alt="Lighthouse" />
                                <img className="hidden-hover-focus" src="/public/lighthouse_16px_blue_dark.svg" alt="Lighthouse" />
                              </div>
                              <span>{translate('menu.me.lighthouses')}</span>
                            </Link>
                          </li>
                          <li>
                            <Link className="item" href={`/resource/?filter.about.attendee.@id=${user.id}`}>
                              <i aria-hidden="true" className="fa fa-calendar" />
                              <span>{translate('menu.me.events')}</span>
                            </Link>
                          </li>
                          <li>
                            <Link className="item" href={`/resource/?filter.about.affiliate.@id=${user.id}`}>
                              <i aria-hidden="true" className="fa fa-users" />
                              <span>{translate('menu.me.organizations')}</span>
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
                  title={translate('login')}
                  href="/user/register"
                  className="loginLink"
                >
                  {translate('login')}
                </Link>
              </li>
            )}
            {supportedLanguages && (
              <li className="languageSelector">
                <span>
                  <i className="fa fa-language" aria-hidden="true" />
                  <ul>
                    {supportedLanguages.filter(lang => lang !== locales[0]).map(lang => (
                      <li key={lang}>
                        <a href={addParamToURL(Link.self || (typeof window !== 'undefined' && window.location && window.location.href) || '/resource/', "language", lang)}>{translate(lang)}</a>
                      </li>
                    ))}
                  </ul>
                </span>
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
  user: PropTypes.objectOf(PropTypes.any),
  locales: PropTypes.arrayOf(PropTypes.any).isRequired,
  supportedLanguages: PropTypes.arrayOf(PropTypes.any).isRequired
}

Header.defaultProps = {
  user: null,
}

export default withEmitter(withI18n(Header))
