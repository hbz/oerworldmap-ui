/* global localStorage */
import React from 'react'
import PropTypes from 'prop-types'
import Joyride, { ACTIONS, EVENTS, STATUS } from 'react-joyride'

import withI18n from './withI18n'
import { triggerClick } from '../common'
import withEmitter from './withEmitter'

import '../styles/components/Columns.pcss'

class Columns extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      show: props.show,
      run: true,
      stepIndex: 0,
    }
    this.handleJoyrideCallback = this.handleJoyrideCallback.bind(this)
  }

  componentDidMount() {
    const { emitter } = this.props
    emitter.on('toggleColumns', (show) => {
      this.setState({ show })
    })

    emitter.on('resetTour', () => {
      this.setState({
        stepIndex: 0,
        run: true
      })
    })

    this.setState({
      run: !localStorage.getItem('tourDone')
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ show: nextProps.show })
  }

  handleJoyrideCallback(data) {
    const { action, index, status, type } = data

    if ([EVENTS.STEP_AFTER, EVENTS.TARGET_NOT_FOUND].includes(type)) {
      this.setState({ stepIndex: index + (action === ACTIONS.PREV ? -1 : 1) })
    }
    else if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
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
            }
          }}
          steps={[
            {
              target: 'body',
              content: translate('Welcome to the OER WORLD MAP'),
              placement: 'center',
            },
            {
              target: '.togglePins',
              content: translate('This is the button to toggle the map pins.'),
            },
            {
              target: '.FiltersControls',
              content: translate('This makes cool filters!'),
            },
            {
              target: '.toggleColumns',
              content: translate('Show or hide the columns with this button.'),
            },
            {
              target: '#Map',
              content: translate('Click the countries and regions to navigate the map'),
            },
          ]}
          locale={{
            close: translate('close'),
            back: translate('Pagination.prevPage'),
            next: translate('Pagination.nextPage'),
            last: translate('Last'),
            skip: translate('Skip')
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
