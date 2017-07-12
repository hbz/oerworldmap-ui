import React from 'react'
import OERWorldMap from './OERWorldMap'
import Icon from './Icon'

import '../styles/ItemList.less'

class ItemList extends OERWorldMap {
  render () {
    return (
      <ul>
        {this.props.listItems.map(listItem => {
          return (
            <li key={listItem.about['@id']}>
              <Icon for={listItem.about['@type']} />
              <a href={'/resource/' + listItem.about['@id']}>
                {listItem.about.name[0]['@value']}
              </a>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default ItemList
