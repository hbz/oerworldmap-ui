import React from 'react'
import PropTypes from 'prop-types'
import Tooltip from 'rc-tooltip'

import Icon from './Icon'
import withI18n from './withI18n'
import withEmitter from './withEmitter'
import { triggerClick } from '../common'

const ButtonFilter = ({aggregation, filter, submit, emitter, translate, order, filterName}) => (
  <div className="ButtonFilter">
    {aggregation.buckets.sort((a, b) => order.indexOf(a.key) - order.indexOf(b.key))
      .map((bucket) => {
        return (
          <Tooltip
            key={bucket.key}
            overlayStyle={{
              maxWidth: "110px",
            }}
            overlay={(
              <span>
                <b>{translate(bucket.label || bucket.key)}</b>
                :&nbsp;
                {translate(`Tip.${bucket.key}`)}
              </span>
            )}
            placement="top"
            align={{
              targetOffset: [0, 5],
            }}
            mouseEnterDelay={0.2}
            overlayClassName="tooltipDisableEvents"
          >
            <div className={`filterBox value-${bucket.key}`}>
              <input
                type="radio"
                value={bucket.key}
                checked={filter.includes(bucket.key)}
                name={filterName}
                id={"type:" + bucket.key}
                onChange={e => submit(e, emitter)}
              />

              <label
                onClick={e => filter.includes(bucket.key) && submit(e, emitter)}
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
  order: PropTypes.arrayOf(PropTypes.string),
  filterName: PropTypes.string.isRequired
}

ButtonFilter.defaultProps = {
  order: []
}

export default withEmitter(withI18n(ButtonFilter))
