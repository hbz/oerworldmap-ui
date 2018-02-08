import React from 'react'
import PropTypes from 'prop-types'

import withI18n from './withI18n'
import Icon from './Icon'
import Link from './Link'

const filterTree = (tree, list) => {
  const res = []
  tree.forEach(node => {
    if (list.indexOf(node['@id']) !== -1) {
      if (node['narrower']) {
        node['narrower'] = filterTree(node['narrower'], list)
      }
      res.push(node)
    }
  })
  return res
}

const ConceptTree = ({concepts, translate, include, className}) => (
  <ul className={className}>
    {(include ? filterTree(concepts, include) : concepts).map(concept => (
      <li key={concept['@id']}>
        <Link className="item" href={`/resource/${concept['@id']}`}>
          <Icon type={concept['@type']} />
          <span>{translate(concept.name)}</span>
        </Link>
        {concept.narrower &&
          <ConceptTree concepts={concept.narrower} translate={translate} />
        }
      </li>
    ))}
  </ul>
)

ConceptTree.propTypes = {
  concepts: PropTypes.arrayOf(PropTypes.any).isRequired,
  translate: PropTypes.func.isRequired,
  include: PropTypes.arrayOf(PropTypes.any),
  className: PropTypes.string
}

ConceptTree.defaultProps = {
  include: null,
  className: null
}

export default withI18n(ConceptTree)
