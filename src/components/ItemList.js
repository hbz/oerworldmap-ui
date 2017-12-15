import React from 'react'
import PropTypes from 'prop-types'
import Icon from './Icon'
import Link from './Link'

import '../styles/components/ItemList.pcss'

import translate from './translate'
import withEmitter from './withEmitter'

const ItemList = ({ translate, emitter, listItems, selected }) => (
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
        {listItem.about['@type'] === 'Event' ? (
          <Link className="item" href={'#' + listItem.about['@id']}>
            <span>
              {translate(listItem.about.name) || listItem.about['@id']}<br />
              {/* Edit to show the real start and end date */}
              {/* {translate(listItem.about.description.startDate).format('D. MMM')} — {listItem.about.location.address.addressLocality},{listItem.about.location.address.addressCountry} */}
            </span>
          </Link>
        ) : (
          <Link className="item" href={'#' + listItem.about['@id']}>
            <Icon type={listItem.about['@type']} />
            <span>{translate(listItem.about.name) || listItem.about['@id']}</span>
          </Link>
        )}

        {selected === listItem.about['@id'] &&
          <aside className="extract">
            <p>{translate(listItem.about.description)}</p>
            <Link className="btn clear" href={'/resource/' + listItem.about['@id']}>
              {/* Read More */}
              {translate('ItemList.readMore')}
            </Link>
          </aside>
        }
      </li>
    ))}
  </ul>
)


ItemList.propTypes = {
  translate: PropTypes.func.isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
  listItems: PropTypes.arrayOf(PropTypes.any).isRequired,
  selected: PropTypes.string.isRequired
}

export default withEmitter(translate(ItemList))
