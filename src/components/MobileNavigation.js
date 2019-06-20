import React from 'react'
import PropTypes from 'prop-types'
import withEmitter from './withEmitter'

import '../styles/components/MobileNavigation.pcss'

class MobileNavigation extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      current: props.current
    }
    this.setCurrent = this.setCurrent.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    // console.log({nextProps})
    const { current } = nextProps
    this.setCurrent(current)
  }

  setCurrent(current) {
    const { emitter } = this.props

    this.setState({current})

    switch (current) {
    case "list":
      emitter.emit("toggleColumns", true)
      emitter.emit("showCountry", false)
      break
    case "map":
      emitter.emit("toggleColumns", false)
      emitter.emit("showCountry", false)
      break
    case "country":
      emitter.emit("toggleColumns", false)
      emitter.emit("showCountry", true)
      break
    }

  }

  render() {
    const { hasCountry } = this.props
    const { current } = this.state
    const { setCurrent } = this

    return (
      <div className="MobileNavigation">
        <i
          className={`fa fa-list${current === "list" ? " active": ''}`}
          aria-hidden="true"
          onClick={() => {
            setCurrent("list", true, false)
          }}
        />
        <i
          className={`fa fa-globe${current === "map" ? " active": ''}`}
          aria-hidden="true"
          onClick={() => {
            setCurrent("map", false, false)
          }}
        />
        {hasCountry && (
          <i
            className={`fa fa-flag${current === "country" ? " active": ''}`}
            aria-hidden="true"
            onClick={() => {
              setCurrent("country", false, true)
            }}
          />
        )}
      </div>
    )
  }
}

MobileNavigation.propTypes = {
  current: PropTypes.string.isRequired,
  hasCountry: PropTypes.bool,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired
}

MobileNavigation.defaultProps = {
  hasCountry: false
}

export default withEmitter(MobileNavigation)
