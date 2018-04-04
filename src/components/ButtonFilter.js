import React from 'react'
import PropTypes from 'prop-types'
import Tooltip from 'rc-tooltip'

import Icon from './Icon'
import withI18n from './withI18n'
import withEmitter from './withEmitter'
import { triggerClick, clearForm } from '../common'

const ButtonFilter = ({aggregation, filter, submit, emitter, translate, order}) => (
  <div className="ButtonFilter">
    {aggregation.buckets.sort((a, b) => order.indexOf(a.key) > order.indexOf(b.key))
      .map((bucket) => {
        return (
          <Tooltip
            key={bucket.key}
            overlay={<b>{translate(bucket.label || bucket.key)}</b>}
            placement="top"
            mouseEnterDelay={0.2}
            overlayClassName="tooltipDisableEvents"
          >
            <div className={`filterBox value-${bucket.key}`}>
              <input
                type="radio"
                value={bucket.key}
                checked={filter.includes(bucket.key)}
                name="filter.about.@type"
                id={"type:" + bucket.key}
                onChange={(e) => {
                  clearForm(e.target.parentElement.form || e.target.form || e.target)
                  e.target.checked = true
                  submit(e, emitter)
                }}
              />

              <label
                onClick={e => {
                  // Clear filters if type filter unchecked
                  if (filter.includes(bucket.key)) {
                    clearForm(e.target.parentElement.form || e.target.form || e.target)
                    submit(e, emitter)
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
  order: PropTypes.arrayOf(PropTypes.string)
}

ButtonFilter.defaultProps = {
  order: []
}

export default withEmitter(withI18n(ButtonFilter))
