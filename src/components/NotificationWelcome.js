/* global window */

import React from 'react'

import '../styles/NotificationWelcome.pcss'

class NotificationWelcome extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      welcome: typeof window !== 'undefined' && window.localStorage ?
        JSON.parse(window.localStorage.getItem('welcome')) :
        null
    }

    this.hideWelcome = this.hideWelcome.bind(this)
  }

  hideWelcome(e) {
    if (e.target.classList.contains('close') ||
      e.target.classList.contains('NotificationWelcome')) {
      this.setState({
        welcome: false
      })
      if (this.close.checked) {
        window.localStorage.setItem('welcome', false)
      }
    }
  }

  render() {
    return (
      <div>
        {this.state.welcome === null ? (
          <div
            role="button"
            tabIndex="0"
            className="NotificationWelcome"
            onClick={this.hideWelcome}
          >
            <div className="modalContent">
              <div className="notificationHeader">
                <label htmlFor="close">
                  <input
                    id="close"
                    ref={(c) => { this.close = c }}
                    type="checkbox"
                  />
                  <span>&quot;Don&apos;t show again&quot;</span>
                </label>
              </div>

              <div className="notificationContent">
                <h1>Welcome to the OER World Map!</h1>
                <p>Our goal is to provide the most complete and comprehensible
                  picture of the global Open Educational Resources (OER)
                  movement. Information is collected on people,
                  organizations,services, projects and events related
                  to OER.</p>
                <p>
                  Building the map is a collaborative process. You can
                  <a href="/contribute"> contribute</a>!
                </p>

                <h2>Currently on the Map</h2>

                <div className="numbersTable">
                  <div>
                    <a href="#">
                      <i className="fa fa-user" />
                      <br />
                      <span className="name" >Person</span>
                      <br />
                      <span className="count" >2</span>
                    </a>
                  </div>

                  <div>
                    <a href="#">
                      <i className="fa fa-users" />
                      <br />
                      <span className="name">Organization</span>
                      <br />
                      <span className="count" >1</span>
                    </a>
                  </div>

                </div>

                <p>
                  <a href="/aggregation/">More Statistics</a>
                    &ensp;–&ensp;
                  <a href="/feed/">Recent Additions</a>
                </p>

                <div>
                  <h2>Announcement</h2>
                  <p>
                    Please take a moment to complete our
                    <a
                      href="https://www.surveymonkey.co.uk/r/OERWM2017"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      user evaluation survey</a>
                      . Thank you!
                  </p>
                </div>

              </div>

              <i
                role="button"
                tabIndex="0"
                className="fa fa-times close"
                onClick={this.hideWelcome}
              />
            </div>
          </div>
        ) : null
        }
      </div>
    )
  }
}

export default NotificationWelcome
