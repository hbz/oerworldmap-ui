import React from 'react'
import PropTypes from 'prop-types'
import withEmitter from './withEmitter'
import Link from './Link'

import '../styles/components/MobileNavigation.pcss'

class MobileNavigation extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      current: props.current,
    }
    this.setCurrent = this.setCurrent.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    const { current } = nextProps
    this.setCurrent(current)
  }

  setCurrent(current) {
    const { emitter } = this.props

    this.setState({ current })

    switch (current) {
    case 'list':
      emitter.emit('toggleColumns', true)
      emitter.emit('showCountry', false)
      break
    case 'country':
      emitter.emit('toggleColumns', false)
      emitter.emit('showCountry', true)
      break
    default:
      emitter.emit('toggleColumns', false)
      emitter.emit('showCountry', false)
    }
  }

  render() {
    const { country, region } = this.props
    const { current } = this.state
    const { setCurrent } = this

    return (
      <div className="MobileNavigation">

        {country && (
          <Link href={region ? `/country/${country}` : '/resource/'}>
            <i
              className="fa fa-arrow-left"
              aria-hidden="true"
            />
          </Link>
        )}

        <div className="mobileNavigationMain">
          <i
            className={`fa fa-list${current === 'list' ? ' active' : ''}`}
            aria-hidden="true"
            onClick={() => {
              setCurrent('list', true, false)
            }}
          />
          <i
            className={`fa fa-globe${current === 'map' ? ' active' : ''}`}
            aria-hidden="true"
            onClick={() => {
              setCurrent('map', false, false)
            }}
          />
          {country && (
            <i
              className={`fa fa-flag${current === 'country' ? ' active' : ''}`}
              aria-hidden="true"
              onClick={() => {
                setCurrent('country', false, true)
              }}
            />
          )}
        </div>
      </div>
    )
  }
}

MobileNavigation.propTypes = {
  current: PropTypes.string.isRequired,
  country: PropTypes.string,
  region: PropTypes.string,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
}

MobileNavigation.defaultProps = {
  country: undefined,
  region: undefined,
}

export default withEmitter(MobileNavigation)
