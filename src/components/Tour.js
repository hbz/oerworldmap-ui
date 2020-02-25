/* global localStorage */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Joyride, { ACTIONS, EVENTS, STATUS } from 'react-joyride'

import withI18n from './withI18n'
import withEmitter from './withEmitter'
import { types } from '../common'

const Tour = ({
  translate, emitter,
}) => {
  const [run, setRun] = useState(true)
  const [stepIndex, setStepIndex] = useState(0)

  const steps = [
    {
      target: '.ReactiveFilters',
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

  const typesSteps = types.map((type, i) => ({
    target: `.typeButtons a:nth-child(${i + 1})`,
    content: (
      <div>
        <h3>{translate(type)}</h3>
        <p>{translate(`descriptions.${type}`)}</p>
      </div>
    ),
  }))

  steps.push(...typesSteps)
  steps.push(
    {
      target: '.ResultList li:first-child',
      content: (
        <div>
          <p>{translate('Tour.entries1')}</p>
        </div>
      ),
    },
    {
      target: '.TogglePoints',
      content: (
        <div>
          <p>{translate('Tour.pins1')}</p>
          <p>{translate('Tour.pins2')}</p>
        </div>
      ),
    },
    {
      target: '.mapBtn',
      content: (
        <div>
          <p>{translate('Tour.map1')}</p>
          <p>{translate('Tour.map3')}</p>
          <img width="100%" src="/public/tourMap.gif" alt="Click intro Brazil" />
        </div>
      ),
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
      target: '.ReactiveFilters',
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
            <a href="mailto:info@oerworldmap.org">info@oerworldmap.org</a>
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

  const handleJoyrideCallback = async (data) => {
    const {
      action,
      index,
      status,
      type,
    } = data

    if ([EVENTS.STEP_AFTER, EVENTS.TARGET_NOT_FOUND].includes(type)) {
      setStepIndex(index + (action === ACTIONS.PREV ? -1 : 1))
    }

    if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
      setRun(false)
      localStorage.setItem('tourDone', true)
    } else if (action === 'close') {
      setRun(false)
      localStorage.setItem('tourDone', true)
    }
  }


  useEffect(() => {
    const resetTour = () => {
      setStepIndex(0)
      setRun(true)
    }

    emitter.on('resetTour', resetTour)

    setRun(!localStorage.getItem('tourDone'))
    return () => {
      emitter.off('resetTour', resetTour)
    }
  }, [])


  return (
    <Joyride
      continuous
      showSkipButton
      showProgress
      run={run}
      stepIndex={stepIndex}
      callback={handleJoyrideCallback}
      styles={{
        options: {
          primaryColor: '#ff8000',
        },
      }}
      steps={steps}
      locale={{
        close: translate('close'),
        back: translate('Pagination.prevPage'),
        next: translate('Pagination.nextPage'),
        last: translate('Last'),
        skip: translate('Skip'),
      }}
    />
  )
}

Tour.propTypes = {
  translate: PropTypes.func.isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default withEmitter(withI18n(Tour))
