import React from 'react'
import PropTypes from 'prop-types'
import Icon from './Icon'
import Link from './Link'

import '../styles/ItemList.pcss'

import translate from './translate'

const ItemList = ({ translate, listItems, emitter }) => (
  <ul className="ItemList" >
    {listItems.map(listItem => (
      <li
        key={listItem.about['@id']}
        onMouseEnter={() => {
          emitter.emit('hoverListItem', { id: listItem.about["@id"] })
        }}
      >
        <Icon type={listItem.about['@type']} />
        <Link to={listItem.about['@id']}>
          {translate(listItem.about.name)}
        </Link>
      </li>
    )
    )}
  </ul>
)


ItemList.propTypes = {
  translate: PropTypes.func.isRequired,
  listItems: PropTypes.arrayOf(PropTypes.any).isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired
}

export default translate(ItemList)
