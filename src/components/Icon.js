import React from 'react'
import PropTypes from 'prop-types'

const icons = {
  Service: 'desktop',
  Person: 'user',
  Organization: 'users',
  Article: 'comment',
  Action: 'gears',
  Concept: 'tag',
  ConceptScheme: 'sitemap',
  Event: 'calendar',
  WebPage: 'file',
  Product: 'wrench',
  Policy: 'balance-scale',
  Collection: 'list',
}

const Icon = ({ type }) => (
  <i aria-hidden="true" className={`fa fa-${icons[type] || 'question'}`} />
)

Icon.propTypes = {
  type: PropTypes.string.isRequired,
}

export default Icon
