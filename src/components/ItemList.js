import React from 'react'
import PropTypes from 'prop-types'
import Icon from './Icon'
import Link from './Link'

import '../styles/ItemList.pcss'

import translate from './translate'

const ItemList = ({ translate, listItems }) => (
  <ul className="ItemList" >
    {listItems.features.map(listItem => (
      <li key={listItem.properties['@id']}>
        <Icon type={listItem.properties['@type']} /> 
        <Link to={listItem.properties['@id']}>
          {translate(listItem.properties.name)}
        </Link>
      </li>
    )
    )}
  </ul>
)


ItemList.propTypes = {
  translate: PropTypes.func.isRequired,
  listItems: PropTypes.objectOf(PropTypes.any).isRequired
}

export default translate(ItemList)
