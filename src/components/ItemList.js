import React from 'react'
import PropTypes from 'prop-types'
import Icon from './Icon'
import Link from './Link'

import '../styles/ItemList.pcss'

import translate from './translate'
import withEmitter from './withEmitter'

const ItemList = ({ translate, emitter, listItems, moment }) => (
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
          <Link className="item" to={'#' + listItem.about['@id']}>
            <div className="sheet">
              <div>
                {moment(listItem.about.description.endDate).format('D')}
              </div>
              <div>
                {moment(listItem.about.description.endDate).format('MMM')}
              </div>
            </div>
            <span>
              {translate(listItem.about.name) || listItem.about['@id']}<br />
              {/* Edit to show the real start and end date */}
              {/* {translate(listItem.about.description.startDate).format('D. MMM')} — {listItem.about.location.address.addressLocality},{listItem.about.location.address.addressCountry} */}
            </span>
          </Link>
        ) : (
          <Link className="item" to={'#' + listItem.about['@id']}>
            <Icon type={listItem.about['@type']} />
            <span>{translate(listItem.about.name) || listItem.about['@id']}</span>
          </Link>
        )}
        
        
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
