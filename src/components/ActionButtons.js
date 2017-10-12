import React from 'react'
import PropTypes from 'prop-types'
import translate from './translate'
import Link from './Link'

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
    <a href="#" title={translate('ActionButtons.liked')}>
      <i className="fa fa-thumbs-up" />
    </a>
    <Link to="/resource/?filter.about.objectIn.@type=LighthouseAction&sort=like_count:DESC" title={translate('ActionButtons.lighthouse')}>
      <i className="fa fa-lightbulb-o" />
    </Link>
  </div>
)

ActionButtons.propTypes = {
  translate: PropTypes.func.isRequired
}

export default translate(ActionButtons)
