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
              <small>{translate('Tour.intro1')}</small>
              &nbsp;
              <small><a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a></small>
            </div>
            <h3>{translate('Tour.intro2')}</h3>
            <p>
              {translate('Tour.intro3')}
            </p>
            <p>
              {translate('Tour.intro4')}
            </p>
          </div>),
        placement: 'center',
      },
      {
        target: '.ResourceIndex',
        content: (
          <div>
            <p>
              {translate('Tour.types1')}
            </p>
            <p>
              {translate('Tour.types2')}
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
            <p>{translate('Tour.entries1')}</p>
          </div>
        ),
      },
      {
        target: '.togglePins',
        content: (
          <div>
            <p>{translate('Tour.pins1')}</p>
            <p>{translate('Tour.pins2')}</p>
          </div>
        ),
      },
      {
        target: '#Map',
        content: (
          <div>
            <p>{translate('Tour.map1')}</p>
            <p>{translate('Tour.map2')}</p>
            <p>{translate('Tour.map3')}</p>
            <img width="100%" src="https://user-images.githubusercontent.com/1938043/64237255-4539b100-cefc-11e9-9fff-4ba6c6d1c2be.gif" alt="Click intro Brazil" />
          </div>
        ),
        placement: 'center',
      },
      {
        target: '.addMenu',
        content: (
          <div>
            <p>{translate('Tour.add1')}</p>
            <p>{translate('Tour.add2')}</p>
            <p>{translate('Tour.add3')}</p>
          </div>
        ),
      },
      {
        target: '.activityFeedLink',
        content: (
          <div>
            <p>{translate('Tour.feed1')}</p>
          </div>
        ),
      },
      {
        target: '.ResourceIndex',
        content: (
          <div>
            <p>
              {translate('Tour.end1')}
            </p>
            <p>
              {translate('Tour.end2')}
            </p>
            <p>
              {translate('Tour.end3')}
            &nbsp;
              {translate('Tour.end4')}
            &nbsp;
              <a href="mailto:someone@yoursite.com">info@oerworldmap.org</a>
            .
            </p>
            <p>
              {translate('Tour.end5')}
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
