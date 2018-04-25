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
        className={`Columns ${this.state.show ? '' : 'hideColumns'}`}
        onTransitionEnd={e => {
          if (e.propertyName === 'transform') {
            const columnContent = e.target.querySelector('.wrapper-ItemList-Pagination')
            const filtersControls = e.target.querySelector('.filtersControls')
            const sortContainer = e.target.querySelector('.sortContainer')
            const secondary = e.target.querySelector('.secondary')

            if (e.target.classList.contains('hideColumns')) {
              columnContent.style.display = 'none'
              filtersControls.style.display = 'none'
              sortContainer.style.display = 'none'
              secondary.style.display = 'none'
            } else {
              columnContent.style.display = 'block'
              filtersControls.style.display = 'block'
              sortContainer.style.display = 'block'
              secondary.style.display = 'block'
            }
          }
        }}
      >
        {this.props.children}
      </aside>
    )
  }

}

Columns.propTypes = {
  children: PropTypes.node.isRequired,
  show: PropTypes.bool.isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default withEmitter(Columns)
