/* global localStorage */
import React from 'react'
import PropTypes from 'prop-types'
import Joyride, { ACTIONS, EVENTS, STATUS } from 'react-joyride'

import withI18n from './withI18n'
import { triggerClick, types } from '../common'
import withEmitter from './withEmitter'

import '../styles/components/Columns.pcss'

class Columns extends React.Component {
  constructor(props) {
    super(props)

    const { translate } = props

    this.state = {
      show: props.show,
      run: true,
      stepIndex: 0,
    }
    this.handleJoyrideCallback = this.handleJoyrideCallback.bind(this)
    this.projection = null

    this.steps = [
      {
        target: '.ResourceIndex',
        content: (
          <div>
            <img width="100%" src="https://user-images.githubusercontent.com/1938043/63678812-48dc8200-c7f0-11e9-88cd-b87bad187a15.jpg" alt="OERde17-Camp-Tilman-Vogler-Tag-1" />
            <div style={{ textAlign: 'right' }}>
              <small>{translate('Tilman Vogler für OERde17,')}</small>
              &nbsp;
              <small><a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a></small>
            </div>
            <h3>{translate('Welcome to the OER world map!')}</h3>
            <p>
              {translate('The OER World Map is a project which aims to illuminate the global Open Educational Resources movement by facilitating interaction and collaboration.')}
            </p>
            <p>
              {translate('We do that by collecting and sharing open data about actors and activities related to OER.')}
            </p>
          </div>),
        placement: 'center',
      },
      {
        target: '.ResourceIndex',
        content: (
          <div>
            <p>
              {translate('First, let\'s explore the entries already added to the OER World map.')}
            </p>
            <p>
              {translate('There are several different data types, let\'s take a look at those.')}
            </p>
          </div>
        ),
        placement: 'center',
      },
    ]

    const typesSteps = types.map(type => ({
      target: `.value-${type}`,
      content: (
        <div>
          <h3>{translate(type)}</h3>
          <p>{translate(`descriptions.${type}`)}</p>
        </div>
      ),
    }))

    this.steps.push(...typesSteps)
    this.steps.push(
      {
        target: '.ResultList li:first-child',
        content: (
          <div>
            <p>{translate('Just click on a entry to get the all associated information.')}</p>
          </div>
        ),
      },
      {
        target: '.togglePins',
        content: (
          <div>
            <p>{translate('Here is our pin switch. It\'s our most important navigation element.')}</p>
            <p>{translate('You can hide and show the pins on the map with it.')}</p>
          </div>
        ),
      },
      {
        target: '#Map',
        content: (
          <div>
            <p>{translate('If the pins are hidden, you can easily select a specific country and its regions.')}</p>
            <p>{translate('Recently we welcomed many new members in Brazil.')}</p>
            <p>{translate('Here is how it\'s done:')}</p>
            <img width="100%" src="https://user-images.githubusercontent.com/1938043/63355114-eace1b80-c365-11e9-9e9a-b44ae765398b.gif" alt="Click intro Brazil" />
          </div>
        ),
        placement: 'center',
      },
      {
        target: '.addMenu',
        content: (
          <div>
            <p>{translate('As an OER world map user you can add and modify entries.')}</p>
            <p>{translate('Every edit is valuable for us, thanks for joining us on our journey!')}</p>
            <p>{translate('To add something, just login and select add.')}</p>
          </div>
        ),
      },
      {
        target: '.activityFeedLink',
        content: (
          <div>
            <p>{translate("To check out what's was recently added or edited, use the Activity Feed.")}</p>
          </div>
        ),
      },
      {
        target: '.ResourceIndex',
        content: (
          <div>
            <p>
              {translate('That was our quick tour.')}
            </p>
            <p>
              {translate('Do you have questions or suggestions?')}
            </p>
            <p>
              {translate('Contact')}
            &nbsp;
              <a href="/resource/urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf" target="_blank" rel="noopener noreferrer">Jan Neumann</a>
            &nbsp;
              {translate('via')}
            &nbsp;
              <a href="mailto:someone@yoursite.com">info@oerworldmap.org</a>
            .
            </p>
            <p>
              {translate("Now it's time to explore or register yourself, good luck on your open education journey.")}
            </p>
          </div>
        ),
        placement: 'center',
      },
    )
  }

  componentDidMount() {
    const { emitter } = this.props
    emitter.on('toggleColumns', (show) => {
      this.setState({ show })
    })

    emitter.on('resetTour', () => {
      this.setState({
        stepIndex: 0,
        run: true,
      })
    })

    this.setState({
      run: !localStorage.getItem('tourDone'),
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ show: nextProps.show })
  }

  handleJoyrideCallback(data) {
    const {
      action,
      index,
      status,
      type,
    } = data

    if (index === 9) {
      this.setState({ show: true })
    }

    if ([EVENTS.STEP_AFTER, EVENTS.TARGET_NOT_FOUND].includes(type)) {
      this.setState({ stepIndex: index + (action === ACTIONS.PREV ? -1 : 1) })
    }

    if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
      this.setState({ run: false })
      localStorage.setItem('tourDone', true)
    } else if (action === 'close') {
      this.setState({ run: false })
      localStorage.setItem('tourDone', true)
    }
  }

  render() {
    const { country, children, translate } = this.props
    const { show, run, stepIndex } = this.state

    return (
      <aside
        className={`Columns${show ? '' : ' hideColumns'}${country ? ' country' : ''}`}
      >
        {children}

        <div
          className="toggleColumns"
          tabIndex="0"
          role="button"
          title={show ? translate('Hide list') : translate('Tip.showList')}
          onKeyDown={triggerClick}
          onClick={
            () => this.setState({ show: !show })
          }
        >
          <span>
            <i className={`fa fa-chevron-${show ? 'left' : 'right'}`} />
          </span>
        </div>

        <Joyride
          continuous
          showSkipButton
          showProgress
          run={run}
          stepIndex={stepIndex}
          callback={this.handleJoyrideCallback}
          styles={{
            options: {
              primaryColor: '#ff8000',
            },
          }}
          steps={this.steps}
          locale={{
            close: translate('close'),
            back: translate('Pagination.prevPage'),
            next: translate('Pagination.nextPage'),
            last: translate('Last'),
            skip: translate('Skip'),
          }}
        />
      </aside>
    )
  }
}

Columns.propTypes = {
  children: PropTypes.node.isRequired,
  show: PropTypes.bool.isRequired,
  country: PropTypes.string.isRequired,
  translate: PropTypes.func.isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default withEmitter(withI18n(Columns))
