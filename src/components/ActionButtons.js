import React from 'react'
import PropTypes from 'prop-types'
import translate from './translate'

import '../styles/ActionButtons.pcss'

const ActionButtons = ({translate}) => (
  <div className="ActionButtons">
    <a href="#" title={translate('ActionButtons.addEntry')}>
      <i className="fa fa-plus" />
    </a>
    <a href="/user/newsletter" title={translate('ActionButtons.subscribeToNewsletter')}>
      <i className="fa fa-envelope" />
    </a>

    <a href="/aggregation/" title={translate('ActionButtons.statistics')}>
      <i className="fa fa-pie-chart" />
    </a>

    <a href="/feed/" title={translate('ActionButtons.recentAdditions')}>
      <i className="fa fa-rss" />
    </a>
  </div>
)

ActionButtons.propTypes = {
  translate: PropTypes.func.isRequired
}

export default translate(ActionButtons)
