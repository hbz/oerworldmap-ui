import React from 'react'
import PropTypes from 'prop-types'

const icons = {
  'Service': 'desktop',
  'Person': 'user',
  'Organization': 'users',
  'Article': 'comment',
  'Action': 'gears',
  'Concept': 'tag',
  'ConceptScheme': 'sitemap',
  'Event': 'calendar',
  'WebPage': 'book'
}

const Icon = ({type}) => {
  return <i className={'fa fa-fw fa-' + icons[type] || 'question'} />
}

Icon.propTypes = {
  type: PropTypes.string.isRequired
}

export default Icon
