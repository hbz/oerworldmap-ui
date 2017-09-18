import React from 'react'
import PropTypes from 'prop-types'
import Icon from './Icon'
import Link from './Link'

import '../styles/ItemList.pcss'

import translate from './translate'
import withEmitter from './withEmitter'

const ItemList = ({ translate, emitter, listItems }) => (
  <ul className="ItemList" >
    {listItems.map(listItem => (
      <li
        id={listItem.about['@id']}
        key={listItem.about['@id']}
        onMouseEnter={() => {
          emitter.emit('hoverPoint', { id: listItem.about["@id"] })
        }}
        onMouseLeave={() => {
          emitter.emit('hoverPoint', { id: '' })
        }}
      >
        <Link to={'#' + listItem.about['@id']}>
          <Icon type={listItem.about['@type']} />&nbsp;
          {translate(listItem.about.name) || listItem.about['@id']}
        </Link>
        {/* <pre>{JSON.stringify(listItem, null, 2)}</pre> */}
        <aside className="extract">
          <p>{translate(listItem.about.description)}</p>
          <Link className="btn" to={'/resource/' + listItem.about['@id']}>
            Read More
          </Link>
        </aside>
      </li>
    ))}
  </ul>
)


ItemList.propTypes = {
  translate: PropTypes.func.isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
  listItems: PropTypes.arrayOf(PropTypes.any).isRequired
}

export default withEmitter(translate(ItemList))
