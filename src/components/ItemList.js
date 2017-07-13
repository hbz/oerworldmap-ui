import React from 'react'
import PropTypes from 'prop-types'
import Icon from './Icon'

import '../styles/ItemList.less'

import translate from './translate'

const ItemList = ({translate, listItems}) => {
  return (
    <ul>
      {listItems.map(listItem => {
        return (
          <li key={listItem.about['@id']}>
            <Icon type={listItem.about['@type']} />
            <a href={'/resource/' + listItem.about['@id']}>
              {translate(listItem.about.name)}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

ItemList.propTypes = {
  translate: PropTypes.func.isRequired,
  listItems: PropTypes.array.isRequired
}

export default translate(ItemList)
