/* global window */

import React from 'react'
import PropTypes from 'prop-types'

import translate from './translate'

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
                  <span> {this.props.translate('NotificationWelcome.dontShow')}</span>
                </label>
              </div>

              <div className="notificationContent">
                <h1>{this.props.translate('NotificationWelcome.welcomeTo')}</h1>
                <p>{this.props.translate('NotificationWelcome.goal')}</p>
                <p>
                  {this.props.translate('NotificationWelcome.building')}
                  <a href="/contribute"> {this.props.translate('NotificationWelcome.contribute')}</a>!
                </p>

                <h2>{this.props.translate('NotificationWelcome.currently')}</h2>

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
                  <h2>{this.props.translate('NotificationWelcome.announcement')}</h2>
                  <p>
                    {this.props.translate('NotificationWelcome.takeAMoment')}
                    <a
                      href="https://www.surveymonkey.co.uk/r/OERWM2017"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {this.props.translate('NotificationWelcome.userEvaluation')}</a>
                      . {this.props.translate('NotificationWelcome.thankYou')}
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

NotificationWelcome.propTypes = {
  translate: PropTypes.func.isRequired,
}

export default translate(NotificationWelcome)
