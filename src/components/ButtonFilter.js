import React from 'react'
import PropTypes from 'prop-types'

import Icon from './Icon'
import translate from './translate'
import withEmitter from './withEmitter'

const triggerClick = (e) => {
  if (e.keyCode === 32) {
    e.target.click()
  }
}

const ButtonFilter = ({aggregation, filter, submit, emitter, translate}) => (
  <div className="ButtonFilter">
    {aggregation.buckets.map((bucket) => {
      return (
        <div className="filterBox" key={bucket.key}>
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
            aria-label={translate(bucket.key)}
            className="btn"
          >
            <Icon type={bucket.key} />
          </label>
        </div>
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

export default withEmitter(translate(ButtonFilter))
