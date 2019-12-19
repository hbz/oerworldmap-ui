import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Tooltip from 'rc-tooltip'

import Icon from './Icon'
import withI18n from './withI18n'
import { types } from '../common'

class ReactiveTypeButtons extends Component {
  componentWillReceiveProps(nextProps) {
    const { selectedType, setQuery } = nextProps

    if (!selectedType) {
      setQuery({
        query: {
          match_all: {},
        },
        value: [],
      })
    }
  }

  render() {
    const { selectedType, setQuery, translate } = this.props

    return (
      <div className="toggleButtons">
        {types.map(type => (
          <Tooltip
            key={type}
            overlayStyle={{
              maxWidth: '110px',
            }}
            overlay={(
              <span>
                <b>{translate(type)}</b>
              :&nbsp;
                {translate(`Tip.${type}`)}
              </span>
            )}
            placement="top"
            align={{
              targetOffset: [0, 5],
            }}
            mouseEnterDelay={0.2}
            overlayClassName="tooltipDisableEvents"
          >
            <button
              type="button"
              className={`typeButton${selectedType === type ? ' active' : ''}`}
              onClick={() => {
                setQuery({
                  query: {
                    term: {
                      'about.@type': type,
                    },
                  },
                  value: type,
                })
              }}
            >
              <Icon type={type} />
              {' '}
              {translate(type)}
            </button>
          </Tooltip>
        ))}
      </div>
    )
  }
}


ReactiveTypeButtons.propTypes = {
  translate: PropTypes.func.isRequired,
  selectedType: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
}


export default withI18n(ReactiveTypeButtons)
