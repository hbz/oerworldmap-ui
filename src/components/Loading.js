import React from 'react'
import PropTypes from 'prop-types'
import withEmitter from './withEmitter'

import '../styles/components/Loading.pcss'

class Loading extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    this.props.emitter.on('setLoading', (state) => {
      this.setState({loading: state})
    })
  }

  render() {
    return (
      <div>
        {this.state.loading &&
          <div className="Loading">
            <div className="loadingCircle" />
          </div>
        }
      </div>
    )
  }
}

Loading.propTypes = {
  emitter: PropTypes.objectOf(PropTypes.any).isRequired
}

export default withEmitter(Loading)