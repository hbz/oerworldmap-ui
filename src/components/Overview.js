import React from 'react'
import PropTypes from 'prop-types'

import Icon from './Icon'

const labels = {
  'Organization': 'Organizations',
  'Service': 'Services',
  'Action': 'Projects',
  'Person': 'People',
  'Event': 'Events',
  'Article': 'Stories',
  'WebPage': 'Publications',
  'Product': 'Tools'
}

const Overview = ({buckets}) => buckets.map(bucket => (
  <div className="col" key={bucket.key}>
    <a href={`/resource/?filter.about.@type=${bucket.key}`}>
      <Icon type={bucket.key} />
      <br />
      {labels[bucket.key]}
      <br />
      <span className="large">{bucket.doc_count}</span>
    </a>
  </div>
))

Overview.propTypes = {
  buckets: PropTypes.arrayOf(PropTypes.any).isRequired
}

export default Overview
