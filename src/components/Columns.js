import React from 'react'
import PropTypes from 'prop-types'

import withI18n from './withI18n'
import { triggerClick } from '../common'
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
    const { emitter } = this.props
    emitter.on('toggleColumns', show => {
      this.setState({show})
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({show: nextProps.show})
  }

  render() {
    const { country, children, translate } = this.props
    const { show } = this.state

    return (
      <aside
        className={`Columns${show ? '' : ' hideColumns'}${country ? ' country': ''}`}
      >
        {children}

        <div
          className="toggleColumns"
          tabIndex="0"
          role="button"
          title={show ? translate('Hide list') : translate('Tip.showList')}
          onKeyDown={triggerClick}
          onClick={
            () => this.setState({show: !show})
          }
        >
          <span>
            <i className={`fa fa-chevron-${show ? "left" : "right"}`} />
          </span>
        </div>
      </aside>
    )
  }

}

Columns.propTypes = {
  children: PropTypes.node.isRequired,
  show: PropTypes.bool.isRequired,
  country: PropTypes.string.isRequired,
  translate: PropTypes.func.isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired
}

export default withEmitter(withI18n(Columns))
