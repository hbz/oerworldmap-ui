import React from 'react'
import Icon from './Icon'

//import '../styles/ItemList.less'

class ItemList extends React.Component {
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
