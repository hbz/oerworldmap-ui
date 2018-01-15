import React from 'react'
import PropTypes from 'prop-types'

import withEmitter from './withEmitter'

import '../styles/components/Columns.pcss'

class Columns extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      showColumns: Object.keys(this.props.showDefault).length > 0
    }
  }

  componentDidMount() {
    this.props.emitter.on('toggleColumns', (to) => {
      this.setState({showColumns: to || !this.state.showColumns})
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({showColumns: Object.keys(nextProps.showDefault).length > 0})
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
  showDefault: PropTypes.objectOf(PropTypes.any).isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default withEmitter(Columns)
