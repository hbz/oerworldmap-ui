import React from 'react'
import PropTypes from 'prop-types'
import urlTemplate from 'url-template'

import Link from './Link'
import Icon from './Icon'
import withI18n from './withI18n'

const ConceptBlock = ({type, conceptScheme, linkTemplate, translate}) => (
  <ul className="ConceptBlock linedList">
    <li>
      <h3>
        <Icon type={type} />
        <Link href={`/resource/?filter.about.@type=${type}`}>
          {translate(type)}
        </Link>
      </h3>
    </li>
    {conceptScheme.map(concept => (
      <li key={concept['@id']}>
        <Link href={urlTemplate.parse(linkTemplate).expand(concept)}>
          {translate(concept.name)}
        </Link>
      </li>
    ))}
  </ul>
)

ConceptBlock.propTypes = {
  type: PropTypes.string.isRequired,
  conceptScheme: PropTypes.objectOf(PropTypes.any).isRequired,
  linkTemplate: PropTypes.string.isRequired,
  translate: PropTypes.func.isRequired
}

export default withI18n(ConceptBlock)
