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
import ResourcePreview from './ResourcePreview'

const ItemList = ({ translate, emitter, listItems, linkTemplate, className, count, moment}) => (
  <ul className={`ItemList linedList ${className}`}>
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
          overlay={(
            <div className="itemListTooltip">
              <ResourcePreview about={listItem} />
              <Topline about={listItem} className="inTooltip" />
            </div>
          )}
          placement="left"
          mouseEnterDelay={0.2}
          overlayClassName="itemListTooltip"
        >
          <div>
            <Link className="item" href={urlTemplate.parse(linkTemplate).expand(listItem)}>
              <Icon type={listItem['@type']} />
              <span>
                {translate(listItem.name) || listItem['@id']}{listItem.alternateName ? ` (${translate(listItem.alternateName)})`: ''}{(listItem['@type'] === 'Event' && listItem.startDate)
                  ? <React.Fragment>, <i aria-hidden="true" title={translate('Event.startDate')}>{formatDate(listItem.startDate, moment)}</i></React.Fragment>
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
