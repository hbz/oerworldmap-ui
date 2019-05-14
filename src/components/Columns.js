import React from 'react'
import PropTypes from 'prop-types'

import withI18n from './withI18n'
import { triggerClick } from '../common'

import '../styles/components/Columns.pcss'

class Columns extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      show: props.show
    }
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
          title={translate('Tip.showList')}
          onKeyDown={triggerClick}
          onClick={
            () => this.setState({show: !show})
          }
        >
          <i className={`fa fa-arrow-${show ? "left" : "right"}`} />
        </div>
      </aside>
    )
  }

}

Columns.propTypes = {
  children: PropTypes.node.isRequired,
  show: PropTypes.bool.isRequired,
  country: PropTypes.string.isRequired,
  translate: PropTypes.string.isRequired
}

export default withI18n(Columns)
