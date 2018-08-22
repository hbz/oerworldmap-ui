import React from 'react'
import PropTypes from 'prop-types'
import urlTemplate from 'url-template'

import withI18n from './withI18n'
import Icon from './Icon'
import Link from './Link'

import { triggerClick } from '../common'

const filterConcepts = (concepts, include) => {
  concepts = JSON.parse(JSON.stringify(concepts))
  const res = []
  concepts.forEach(node => {
    if (include.indexOf(node['@id']) !== -1) {
      if (node['narrower']) {
        node['narrower'] = filterConcepts(node['narrower'], include)
      }
      res.push(node)
    }
  })
  return res
}

const ConceptTree = ({concepts, translate, include, className, linkTemplate, nested, noIcon}) => (
  <ul className={`${className}${noIcon ? ' noIcon' : ''}`}>
    {(include ? filterConcepts(concepts, include) : concepts).map(concept => (
      <li
        key={concept['@id']}
        className={!nested && (concept.narrower && concept.narrower.length > 0) ? 'expandable': ''}
      >
        <Link className="item" href={urlTemplate.parse(linkTemplate).expand(concept)}>
          {!noIcon &&
            <Icon type={concept['@type']} />
          }
          <span>{translate(concept.name)}</span>
        </Link>
        {!nested && (concept.narrower && concept.narrower.length > 0) &&
          <i
            className="fa fa-plus toggle"
            onKeyDown={triggerClick}
            tabIndex="0"
            role="button"
            onClick={e => {
              if (e.target.classList.contains('fa-plus')) {
                e.target.classList.remove('fa-plus')
                e.target.classList.add('fa-minus')
              } else {
                e.target.classList.remove('fa-minus')
                e.target.classList.add('fa-plus')
              }
            }}
          />
        }
        {concept.narrower &&
          <ConceptTree
            nested
            concepts={concept.narrower}
            linkTemplate={linkTemplate}
            translate={translate}
            noIcon={noIcon}
          />
        }
      </li>
    ))}
  </ul>
)

ConceptTree.propTypes = {
  concepts: PropTypes.arrayOf(PropTypes.any).isRequired,
  translate: PropTypes.func.isRequired,
  include: PropTypes.arrayOf(PropTypes.any),
  className: PropTypes.string,
  linkTemplate: PropTypes.string,
  nested: PropTypes.bool
}

ConceptTree.defaultProps = {
  include: null,
  className: null,
  linkTemplate: '/resource/{@id}',
  nested: false
}

export default withI18n(ConceptTree)
