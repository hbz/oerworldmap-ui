/* global localStorage */
import React from 'react'
import PropTypes from 'prop-types'
import Joyride from 'react-joyride'

import withI18n from './withI18n'
import { triggerClick } from '../common'
import withEmitter from './withEmitter'

import '../styles/components/Columns.pcss'

class Columns extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      show: props.show,
      tourDone: false
    }
  }

  componentDidMount() {
    const { emitter } = this.props
    emitter.on('toggleColumns', show => {
      this.setState({show})
    })

    this.setState({
      tourDone: localStorage.getItem('tourDone')
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({show: nextProps.show})
  }

  render() {
    const { country, children, translate } = this.props
    const { show, tourDone } = this.state

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

        {!tourDone && (
          <Joyride
            run
            continuous
            showSkipButton
            callback={(e) => {
              const { action } = e
              if (action === 'close' || action === 'reset') {
                localStorage.setItem('tourDone', true)
              }
            }}
            styles={{
              options: {
                primaryColor: '#ff8000',
                border: '1px solid tomato'
              }
            }}
            steps={[
              {
                target: 'body',
                content: translate('Would you like to do a tour'),
                placement: 'center'
              },
              {
                target: '.togglePins',
                content: translate('This is the button to toggle the map pins.'),
              },
              {
                target: '.FiltersControls',
                content: translate('This makes cool filters!'),
              },
              {
                target: '.toggleColumns',
                content: translate('Show or hide the columns with this button.'),
              },
              {
                target: '#Map',
                content: translate('Click the countries and regions to navigate the map'),
              },
            ]}
            showProgress
            locale={{
              close: translate('close'),
              back: translate('Pagination.prevPage'),
              next: translate('Pagination.nextPage'),
              last: translate('Last'),
              skip: translate('Skip')
            }}
          />
        )}
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
