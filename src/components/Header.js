/* global document */
/* global window */
/* global SUPPORTED_LANGUAGES */
/* global _paq */
import React from 'react'
import PropTypes from 'prop-types'
import withEmitter from './withEmitter'
import withI18n from './withI18n'
import Link from './Link'
import { triggerClick, urlParser, types } from '../common'
import ConceptBlock from './ConceptBlock'
import Icon from './Icon'
import withUser from './withUser'

import { hasTopConcept as organizationsConcepts } from '../json/organizations.json'
import { hasTopConcept as personsConcepts } from '../json/persons.json'
import { hasTopConcept as servicesConcepts } from '../json/services.json'
import { hasTopConcept as publicationsConcepts } from '../json/publications.json'
import { hasTopConcept as policyTypesConcepts } from '../json/policyTypes.json'
import { hasTopConcept as projectsConcepts } from '../json/projects.json'

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
        me: false,
      },
      showNotification: false,
    }
    this.handleClick = this.handleClick.bind(this)
    this.setDropdown = this.setDropdown.bind(this)
  }

  componentDidMount() {
    const { emitter, user } = this.props
    document.addEventListener('click', this.handleClick)

    emitter.on('setLoading', () => {
      if (this.dropDown) {
        this.setState({ showMobileMenu: false })
        this.setDropdown('')
      }
    })

    emitter.on('newActivity', (activities) => {
      if (window.location.pathname !== '/activity/') {
        const showNotification = !user || activities.some(activity => activity.user && activity.user['@id'] !== user.id)
        this.setState({ showNotification })
      }
    })

    emitter.on('clearActivity', () => {
      this.setState({ showNotification: false })
    })
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick)
  }

  setDropdown(name) {
    const { dropdowns } = this.state
    const dropdownsState = {}

    Object.keys(dropdowns).forEach((key) => {
      dropdownsState[key] = key === name && dropdowns[key] !== true
    })

    this.setState({ dropdowns: dropdownsState })
  }

  handleClick(e) {
    if (e.target !== this.menuToggle
      && (this.secondaryNav && !this.secondaryNav.contains(e.target))) {
      this.setState({ showMobileMenu: false })
    }
  }

  render() {
    const {
      translate, user, locales, emitter,
    } = this.props
    const { showMobileMenu, dropdowns, showNotification } = this.state
    const { pathname } = urlParser(Link.self)

    let { supportedLanguages } = this.props
    if (!supportedLanguages) {
      supportedLanguages = SUPPORTED_LANGUAGES
    }

    const view = typeof window !== 'undefined' ? window.location.hash.substr(1) : ''
    const languages = supportedLanguages.filter(lang => lang !== locales[0]).map((lang) => {
      const url = urlParser(Link.self)
      url.searchParams.set('language', lang)

      return (
        <li key={lang}>
          <a href={`${url.href}${view ? `#${view}` : ''}`}>{translate(lang)}</a>
        </li>
      )
    })

    return (
      <header className="Header">

        <div className="headerTitle">
          <a href="/">
            <h1
              style={{ fontSize: '12px' }}
            >
              Home
            </h1>
          </a>

          <Link title={translate('main.map')} href="/resource/">
            <h1>
              <i aria-hidden="true" className="fa fa-globe" />
              &nbsp;
              {translate('OER World Map')}
            </h1>
          </Link>

          {(pathname === '/resource/' || pathname.startsWith('/country/')) && (
            <a
              href="#tour"
              className="tour"
              onClick={(e) => {
                e.preventDefault()
                emitter.emit('resetTour')
              }}
            >
              {translate('Take a tour')}
            </a>
          )}
        </div>

        <button
          className="menuToggle visible-mobile-block"
          onClick={() => {
            this.setState({ showMobileMenu: !showMobileMenu })
            this.setDropdown('')
          }}
          onKeyDown={triggerClick}
          ref={el => this.menuToggle = el}
        >
          <i aria-hidden="true" className="fa fa-bars" />
        </button>

        <nav
          className={`secondaryNav${showMobileMenu ? ' show' : ''}`}
          ref={secondaryNav => this.secondaryNav = secondaryNav}
        >
          <ul>

            <li>
              <Link href="/activity/" className="activityFeedLink">
                {translate('menu.activity')}
                {showNotification && (
                  <span className="showNotification">
                    <i className="fa fa-bell" aria-hidden="true" />
                  </span>
                )
                }
              </Link>
            </li>
            <li
              className={`hasDropdown${dropdowns.find ? ' active' : ''}`}
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
                        <Link className="iconItem" href={'/resource/?filter.about.objectIn.%40type=["LighthouseAction"]&sort=lighthouse_count'}>
                          <div className="i">
                            <img className="visible-hover-focus" src="/public/lighthouse_16px_orange.svg" alt="Lighthouse" />
                            <img className="hidden-hover-focus" src="/public/lighthouse_16px_blue_dark.svg" alt="Lighthouse" />
                          </div>
                          {translate('ClientTemplates.app.lighthouses')}
                        </Link>
                      </li>
                      <li>
                        <Link className="iconItem" href={'/resource/?filter.about.objectIn.%40type=["LikeAction"]&sort=like_count'}>
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
                        <Link className="iconItem" href={'/resource/?q="_exists_:about.countryChampionFor"'}>
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
                          <Link className="iconItem" href={`/resource/?filter.author.keyword=["${user.id}"]`}>
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
                        conceptScheme={organizationsConcepts}
                        linkTemplate={'/resource/?filter.about.additionalType.@id=["{@id}"]'}
                      />
                    </div>
                    <div className="col">
                      <ConceptBlock
                        type="Person"
                        conceptScheme={personsConcepts}
                        linkTemplate={'/resource/?filter.about.additionalType.@id=["{@id}"]'}
                      />
                    </div>
                    <div className="col">
                      <ConceptBlock
                        type="Service"
                        conceptScheme={servicesConcepts}
                        linkTemplate={'/resource/?filter.about.additionalType.@id=["{@id}"]'}
                      />
                    </div>
                    <div className="col">
                      <ConceptBlock
                        type="WebPage"
                        conceptScheme={publicationsConcepts}
                        linkTemplate={'/resource/?filter.about.additionalType.@id=["{@id}"]'}
                      />
                      <ConceptBlock
                        type="Policy"
                        conceptScheme={policyTypesConcepts}
                        linkTemplate={'/resource/?filter.about.additionalType.@id=["{@id}"]'}
                      />
                    </div>
                    <div className="col">
                      <ConceptBlock
                        type="Action"
                        conceptScheme={projectsConcepts}
                        linkTemplate={'/resource/?filter.about.additionalType.@id=["{@id}"]'}
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
              className={`addMenu hasDropdown${dropdowns.add ? ' active' : ''}`}
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
                    <div style={{ maxWidth: '80%' }}>
                      {translate('menu.add.subtitle')}
                      <p dangerouslySetInnerHTML={{ __html: translate('menu.hint') }} />
                    </div>
                    <Link className="link-grey" rel="noopener noreferrer" target="_blank" href="https://github.com/hbz/oerworldmap/wiki/FAQs-for-OER-World-Map-editors#service-organization-or-project">
                      {translate('needHelp')}
                    </Link>
                  </div>
                  <div className="row vertical-guttered stack-700" style={{ justifyContent: 'start' }}>

                    {types.filter(type => type !== 'Person').map(type => (
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
              className={`hasDropdown${dropdowns.info ? ' active' : ''}`}
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
                className={`hasDropdown${dropdowns.me ? ' active' : ''}`}
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
                            <a
                              className="item"
                              href={(locales && locales.length > 0)
                                ? `/user/profile?language=${locales[0]}#edit`
                                : '/user/profile#edit'}
                            >
                              <i aria-hidden="true" className="fa fa-user-circle" />
                              <span>{translate('menu.me.profile')}</span>
                            </a>
                          </li>
                          <li>
                            <a className="item" href="/auth/realms/oerworldmap/account/">
                              <i aria-hidden="true" className="fa fa-cogs" />
                              <span>{translate('menu.me.settings')}</span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="item"
                              href={'/auth/realms/oerworldmap/protocol/openid-connect/logout?redirect_uri='
                                .concat(encodeURIComponent(`/oauth2callback?logout=${Link.self}`))
                              }
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
                            <Link className="item" href={`/resource/?filter.author.keyword=["${user.id}"]`}>
                              <i aria-hidden="true" className="fa fa-pencil" />
                              <span>{translate('menu.me.entries')}</span>
                            </Link>
                          </li>
                          <li>
                            <Link className="item" href={`/resource/?filter.about.objectIn.agent.@id=["${user.id}"]&filter.about.objectIn.%40type=["LikeAction"]`}>
                              <i aria-hidden="true" className="fa fa-thumbs-up" />
                              <span>{translate('menu.me.likes')}</span>
                            </Link>
                          </li>
                          <li>
                            <Link className="item" href={`/resource/?filter.about.objectIn.agent.@id=["${user.id}"]&filter.about.objectIn.%40type=["LighthouseAction"]`}>
                              <div className="i">
                                <img className="visible-hover-focus" src="/public/lighthouse_16px_orange.svg" alt="Lighthouse" />
                                <img className="hidden-hover-focus" src="/public/lighthouse_16px_blue_dark.svg" alt="Lighthouse" />
                              </div>
                              <span>{translate('menu.me.lighthouses')}</span>
                            </Link>
                          </li>
                          <li>
                            <Link className="item" href={`/resource/?filter.about.attendee.@id=["${user.id}"]`}>
                              <i aria-hidden="true" className="fa fa-calendar" />
                              <span>{translate('menu.me.events')}</span>
                            </Link>
                          </li>
                          <li>
                            <Link className="item" href={`/resource/?filter.about.affiliate.@id=["${user.id}"]`}>
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
                <a
                  title={translate('login')}
                  href={`/.login?continue=${Link.self}`}
                  className="loginLink"
                >
                  {translate('login')}
                </a>
              </li>
            )}
            {supportedLanguages && (
              <li className="languageSelector">
                <span>
                  <i className="fa fa-language" aria-hidden="true" />
                  <ul>
                    {languages}
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
  supportedLanguages: PropTypes.arrayOf(PropTypes.any).isRequired,
}

Header.defaultProps = {
  user: null,
}

export default withEmitter(withI18n(withUser(Header)))
