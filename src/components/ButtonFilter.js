import React from 'react'
import PropTypes from 'prop-types'
import Tooltip from 'rc-tooltip'

import Icon from './Icon'
import withI18n from './withI18n'
import withEmitter from './withEmitter'
import { triggerClick } from '../common'

const order = ['Organization', 'Service', 'Person', 'Action', 'Event', 'Article']

const ButtonFilter = ({aggregation, filter, submit, emitter, translate}) => (
  <div className="ButtonFilter">
    {aggregation.buckets.sort((a, b) => order.indexOf(a.key) > order.indexOf(b.key))
      .map((bucket) => {
        return (
          <Tooltip
            key={bucket.key}
            overlay={translate(bucket.label || bucket.key)}
            placement="top"
            overlayClassName="tooltipDisableEvents"
          >
            <div className={`filterBox value-${bucket.key}`}>
              <input
                type="radio"
                value={bucket.key}
                checked={filter.includes(bucket.key)}
                name="filter.about.@type"
                id={"type:" + bucket.key}
                onChange={(evt) => submit(evt, emitter)}
              />

              <label
                onClick={(evt) => {
                  // Trigger submit only if onChange is not triggered
                  if (filter.includes(bucket.key)) {
                    submit(evt, emitter)
                  }
                }}
                onKeyDown={triggerClick}
                role="button"
                tabIndex="0"
                htmlFor={"type:" + bucket.key}
                aria-label={translate(bucket.label || bucket.key)}
                className="btn"
              >
                <Icon type={bucket.key} />
              </label>
            </div>
          </Tooltip>
        )
      })}
  </div>

)

ButtonFilter.propTypes = {
  filter: PropTypes.arrayOf(PropTypes.any).isRequired,
  aggregation: PropTypes.objectOf(PropTypes.any).isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
  translate: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
}

export default withEmitter(withI18n(ButtonFilter))
