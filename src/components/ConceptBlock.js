import React from 'react'
import PropTypes from 'prop-types'
import urlTemplate from 'url-template'

import Link from './Link'
import Icon from './Icon'
import withI18n from './withI18n'

const ConceptBlock = ({type, conceptScheme, linkTemplate, translate}) => (
  <div className="ConceptBlock">
    <h3 className="border-bottom">
      <Link className="iconItem" href={`/resource/?filter.about.@type=${type}`}>
        <Icon type={type} />{translate(type)}
      </Link>
    </h3>
    {conceptScheme &&
      <ul className="linedList border-bottom">
        {conceptScheme.map(concept => (
          <li key={concept['@id']}>
            <Link href={urlTemplate.parse(linkTemplate).expand(concept)}>
              {translate(concept.name)}
            </Link>
          </li>
        ))}
      </ul>
    }
  </div>
)

ConceptBlock.propTypes = {
  type: PropTypes.string.isRequired,
  conceptScheme: PropTypes.arrayOf(PropTypes.any),
  linkTemplate: PropTypes.string,
  translate: PropTypes.func.isRequired
}

ConceptBlock.defaultProps = {
  conceptScheme: undefined,
  linkTemplate: undefined
}

export default withI18n(ConceptBlock)
