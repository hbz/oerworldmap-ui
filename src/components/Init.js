import React from 'react'
import PropTypes from 'prop-types'
import mitt from 'mitt'
import I18nProvider from './I18nProvider'
import App from './App'

const emitter = mitt()

// Log all emissions
emitter.on('*', (type, e) => console.log(type, e))

class Init extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      locales: props.locales,
    }
  }

  render() {
    return (
      <I18nProvider locales={this.state.locales}>
        <App data={this.props.data} emitter={emitter} />
      </I18nProvider>
    )
  }
}

Init.propTypes = {
  locales: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.objectOf(PropTypes.any).isRequired
}

export default Init
