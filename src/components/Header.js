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
      // showUserMenu: true
    }
    // this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    // document.addEventListener("click", this.handleClick)

    this.props.emitter.on('setLoading', () => {
      if (this.dropDown) {
        this.dropDown.style.pointerEvents = "none"
        setTimeout(() => {
          this.dropDown.style.pointerEvents = "auto"
        }, 1000)
      }
    })
  }

  // componentWillUnmount() {
  //   document.removeEventListener("click", this.handleClick)
  // }

  // handleClick(e) {
  //   // if (e.target !== this.menuBtn)
  //   //   this.setState({showUserMenu:false})
  //   // if (e.target !== this.menuToggle)
  //   //   this.setState({showMobileMenu:false})
  // }

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
              <button onClick={e => {
                e.target.parentElement.classList.toggle('active')
              }}
              >
                {this.props.translate('Find')}
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
                          {this.props.translate('Most Liked')}
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
                    </ul>

                    {this.props.user &&
                    <ul>
                      <li>
                        <Link className="iconItem" href={`/resource/?filter.author=${this.props.user.username}`}>
                          <i className="fa fa-pencil" />{this.props.translate('My entries')}
                        </Link>
                      </li>
                      {this.props.user.country &&
                      <li>
                        <Link className="iconItem" href={`/country/${this.props.user.country}`} >
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

            <li className="hasDropdown">
              <button onClick={e => {
                e.target.parentElement.classList.toggle('active')
              }}
              >
                {this.props.translate('Add')}
              </button>
              <div className="dropdown">
                <div className="inner">
                  <div className="popular">
                    <div>
                      What kind of entry would you like to add?
                    </div>
                    <ul>
                      <li>
                        <Link className="link-grey" rel="noopener noreferrer" target="_blank" href="https://github.com/hbz/oerworldmap/wiki/FAQs-for-OER-World-Map-editors#service-organization-or-project">
                          Need help?
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row vertical-guttered stack-700" style={{justifyContent: "start"}}>
                    <div className="col one-fourth">
                      <Link href="/resource/?add=Organization" className="addBox">
                        <h3 className="iconItem"><Icon type="Organization" />{this.props.translate('Organization')}</h3>
                        <p className="text-small">{this.props.translate('An organization is a steady group of people sharing collective goals. Such as universities, corporations, associations, etc.')}</p>
                      </Link>
                    </div>
                    <div className="col one-fourth">
                      <Link href="/resource/?add=Action" className="addBox">
                        <h3 className="iconItem"><Icon type="Action" />{this.props.translate('Action')}</h3>
                        <p className="text-small">{this.props.translate('	A temporary undertaking intended to accomplish particular tasks under time constraints.')}</p>
                      </Link>
                    </div>
                    <div className="col one-fourth">
                      <Link href="/resource/?add=Service" className="addBox">
                        <h3 className="iconItem"><Icon type="Service" />{this.props.translate('Service')}</h3>
                        <p className="text-small">{this.props.translate('An steady online offer, which provides functionality and value related to OER to its users.')}</p>
                      </Link>
                    </div>
                    <div className="col one-fourth">
                      <Link href="/resource/?add=Event" className="addBox">
                        <h3 className="iconItem"><Icon type="Event" />{this.props.translate('Event')}</h3>
                        <p className="text-small">{this.props.translate('A gathering of people, which take place at a certain location (virtual or physical) at a certain time.')}</p>
                      </Link>
                    </div>
                    <div className="col one-fourth">
                      <Link href="/resource/?add=Person" className="addBox">
                        <h3 className="iconItem"><Icon type="Person" />{this.props.translate('Person')}</h3>
                      </Link>
                    </div>
                    <div className="col one-fourth">
                      <Link href="/resource/?add=Article" className="addBox">
                        <h3 className="iconItem"><Icon type="Article" />{this.props.translate('Article')}</h3>
                      </Link>
                    </div>
                    <div className="col one-fourth">
                      <Link href="/resource/?add=WebPage" className="addBox">
                        <h3 className="iconItem"><Icon type="WebPage" />{this.props.translate('WebPage')}</h3>
                      </Link>
                    </div>
                    <div className="col one-fourth">
                      <Link href="/resource/?add=Product" className="addBox">
                        <h3 className="iconItem"><Icon type="Product" />{this.props.translate('Product')}</h3>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="hasDropdown">
              <button onClick={e => {
                e.target.parentElement.classList.toggle('active')
              }}
              >
                {this.props.translate('Info')}
              </button>
              <div className="dropdown">
                <div className="inner">
                  <div className="row stack-700 stack-gutter-2em">
                    <div className="col one-forth">
                      <ul className="linedList border-bottom">
                        <li>
                          <h3>Topical</h3>
                        </li>
                        <li>
                          <Link className="item" href="/about#newsletter">
                            Newsletter
                          </Link>
                        </li>
                        <li>
                          <Link className="item" href="https://oerworldmap.wordpress.com/" rel="noopener noreferrer" target="_blank">
                            Blog
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col one-forth">
                      <ul className="linedList border-bottom">
                        <li>
                          <h3>About</h3>
                        </li>
                        <li>
                          <Link className="item" href="/about#the-vision">
                            The OER World Map
                          </Link>
                        </li>
                        <li>
                          <Link className="item" href="/contribute">
                            Contribute
                          </Link>
                        </li>
                        <li>
                          <Link className="item" href="/FAQ">
                            FAQ
                          </Link>
                        </li>
                        <li>
                          <Link className="item" href="/about#team">
                            Team
                          </Link>
                        </li>
                        <li>
                          <Link className="item" rel="noopener noreferrer" target="_blank" href="https://github.com/hbz/oerworldmap/wiki/FAQs-for-OER-World-Map-editors">
                            FAQs for Editors
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col one-forth">
                      <ul className="linedList border-bottom">
                        <li>
                          <h3>Social</h3>
                        </li>
                        <li>
                          <Link className="item" href="https://www.facebook.com/oerworldmap" rel="noopener noreferrer" target="_blank">
                            Facebook
                          </Link>
                        </li>
                        <li>
                          <Link className="item" href="https://twitter.com/oerworldmap" rel="noopener noreferrer" target="_blank">
                            Twitter
                          </Link>
                        </li>
                        <li>
                          <Link className="item" href="https://github.com/hbz/oerworldmap" rel="noopener noreferrer" target="_blank">
                            GitHub
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col one-forth">
                      <ul className="linedList border-bottom">
                        <li>
                          <h3>Legal</h3>
                        </li>
                        <li>
                          <Link className="item" href="mailto:info@oerworldmap.org">
                            Contact
                          </Link>
                        </li>
                        <li>
                          <Link className="item" href="/imprint">
                            Imprint &amp; Privacy
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {this.props.user &&
            <li className="hasDropdown">
              <button onClick={e => {
                e.target.parentElement.classList.toggle('active')
              }}
              >
                {this.props.translate('Me')}
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
                            <i className="fa fa-home" /><span>Home</span>
                          </Link>
                        </li>
                        <li>
                          <Link className="item" href={`/resource/${this.props.user.id}`}>
                            <i className="fa fa-user-circle" /><span>Personal Profile</span>
                          </Link>
                        </li>
                        {expose('groupAdmin', this.props.user) &&
                        <li>
                          <Link className="item" href="/user/groups">
                            <i className="fa fa-gear" /><span>Groups</span>
                          </Link>
                        </li>
                        }
                        <li>
                          <Link className="item" href="/user/password">
                            <i className="fa fa-lock" /><span>Change Password</span>
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
                            <span>Logout</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col one-half">
                      <ul className="linedList border-bottom">
                        <li>
                          <Link className="item" href={`/resource/?filter.author=${this.props.user.username}`}>
                            <i className="fa fa-pencil" /><span>My Entries</span>
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
                              <img className="visible-hover-focus" src="/public/lighthouse_16px_orange.svg" alt="Lighthouse" />
                              <img className="hidden-hover-focus" src="/public/lighthouse_16px_blue_dark.svg" alt="Lighthouse" />
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
                  </div>
                </div>
              </div>
            </li>
            }

            {!this.props.user &&
              <li>
                <Link
                  title={this.props.translate('login')}
                  href="/user/register"
                  className="loginLink"
                >
                  {this.props.translate('login')}
                </Link>
              </li>
            }

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
