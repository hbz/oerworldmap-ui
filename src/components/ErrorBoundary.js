import React from 'react'
import PropTypes from 'prop-types'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error) {
    console.warn(error)
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      return <React.Fragment>{this.props.errorMessage}</React.Fragment>
    }
    return this.props.children
  }
}


ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  errorMessage: PropTypes.string
}

ErrorBoundary.defaultProps = {
  errorMessage: "Error while rendering the component"
}

export default ErrorBoundary
