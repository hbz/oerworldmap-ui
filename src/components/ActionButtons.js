import React from 'react'

import '../styles/ActionButtons.pcss'

const ActionButtons = () => (
  <div className="ActionButtons">
    <a href="/user/newsletter" title="Subscribe to Newsletter">
      <i className="fa fa-envelope" />
    </a>

    <a href="/aggregation/" title="Statistics">
      <i className="fa fa-pie-chart" />
    </a>

    <a href="/feed/" title="Recent Additions">
      <i className="fa fa-rss" />
    </a>
  </div>
)

export default ActionButtons
