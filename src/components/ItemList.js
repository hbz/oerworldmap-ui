import React from 'react'
import PropTypes from 'prop-types'
import Icon from './Icon'
import Link from './Link'

import '../styles/ItemList.less'

import translate from './translate'

const ItemList = ({translate, listItems}) => {
  return (
    <ul className='ItemList' >
      {listItems.map(listItem => {
        return (
          <li key={listItem.about['@id']}>
            <Icon type={listItem.about['@type']} />
            <Link to={listItem.about['@id']}>
              {translate(listItem.about.name)}
            </Link>
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
