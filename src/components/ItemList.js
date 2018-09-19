import React from 'react'
import PropTypes from 'prop-types'
import Tooltip from 'rc-tooltip'
import urlTemplate from 'url-template'

import Icon from './Icon'
import Link from './Link'
import Topline from './Topline'

import '../styles/components/ItemList.pcss'

import withI18n from './withI18n'
import withEmitter from './withEmitter'
import { formatDate } from '../common'

const ItemList = ({ translate, emitter, listItems, linkTemplate, className, count, moment}) => (
  <ul className={`ItemList linedList ${className}`} >
    {listItems.map(listItem => (
      <li
        id={listItem['@id']}
        key={listItem['@id']}
        onMouseEnter={() => {
          emitter.emit('hoverPoint', { id: listItem['@id'] })
        }}
        onMouseLeave={() => {
          emitter.emit('hoverPoint', { id: '' })
        }}
      >
        <Tooltip
          overlay={
            <div className="itemListTooltip">
              <div className="topWrapper">
                {listItem.image &&
                  <img
                    style={{
                      display: 'none'
                    }}
                    onLoad={e => {
                      e.target.style.display = 'block'
                    }}
                    onError={e => {
                      e.target.remove()
                    }}
                    src={listItem.image}
                    alt={translate(listItem.name) || listItem['@id']}
                  />
                }
                <div>
                  <Icon type={listItem['@type']} /> <span>{translate(listItem['@type'])}</span>
                  <br />
                  <b>{translate(listItem.name) || listItem['@id']}</b>
                </div>
              </div>
              <Topline about={listItem} className="inTooltip" />
            </div>
          }
          placement="left"
          mouseEnterDelay={0.2}
          overlayClassName="itemListTooltip"
        >
          <div>
            <Link className="item" href={urlTemplate.parse(linkTemplate).expand(listItem)}>
              <Icon type={listItem['@type']} />
              <span>
                {translate(listItem.name) || listItem['@id']}{(listItem['@type'] === 'Event' && listItem.startDate)
                  ? <React.Fragment>, <i title={translate('Event.startDate')}>{formatDate(listItem.startDate, moment)}</i></React.Fragment>
                  : ''}
                {count && ` (${count(listItem)})`}
              </span>
            </Link>
          </div>
        </Tooltip>
      </li>
    ))}
  </ul>
)


ItemList.propTypes = {
  translate: PropTypes.func.isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
  listItems: PropTypes.arrayOf(PropTypes.any).isRequired,
  linkTemplate: PropTypes.string,
  className: PropTypes.string,
  moment: PropTypes.func.isRequired,
  count: PropTypes.func
}

ItemList.defaultProps = {
  linkTemplate: '/resource/{@id}',
  className: '',
  count: undefined
}

export default withEmitter(withI18n(ItemList))
