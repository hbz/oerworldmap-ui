import React from 'react'
import PropTypes from 'prop-types'

import withEmitter from './withEmitter'

import '../styles/components/Columns.pcss'

class Columns extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      showColumns: false
    }
  }

  componentDidMount() {
    this.props.emitter.on('toggleColumns', () => {
      this.setState({showColumns: !this.state.showColumns})
    })
  }

  render() {
    return (
      <aside
        className={`Columns ${this.state.showColumns ? '' : 'hideColumns'}`}
      >
        {this.props.children}
      </aside>
    )
  }

}

Columns.propTypes = {
  children: PropTypes.node.isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default withEmitter(Columns)
