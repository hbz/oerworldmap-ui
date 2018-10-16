import React from 'react'
import PropTypes from 'prop-types'

import withEmitter from './withEmitter'

import '../styles/components/Columns.pcss'

class Columns extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      show: props.show
    }
  }

  componentDidMount() {
    this.props.emitter.on('toggleColumns', () => {
      this.setState({show: !this.state.show})
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({show: nextProps.show})
  }

  render() {
    return (
      <aside
        className={`Columns${this.state.show ? '' : ' hideColumns'}${this.props.country ? ' country': ''}`}
      >
        {this.props.children}
      </aside>
    )
  }

}

Columns.propTypes = {
  children: PropTypes.node.isRequired,
  show: PropTypes.bool.isRequired,
  country: PropTypes.bool.isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default withEmitter(Columns)
