import React from 'react'
import PropTypes from 'prop-types'
import I18nProvider from './I18nProvider'
import App from './App'

class Init extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      locales: props.locales
    }
  }

  render () {
    return (
      <I18nProvider locales={this.state.locales}>
        <App data={this.props.data} />
      </I18nProvider>
    )
  }
}

Init.propTypes = {
  locales: PropTypes.array.isRequired,
  data: PropTypes.object.isRequired
}

export default Init
