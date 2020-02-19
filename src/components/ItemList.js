import React from 'react'
import PropTypes from 'prop-types'
import urlTemplate from 'url-template'
import removeMd from 'remove-markdown'

import Icon from './Icon'
import Link from './Link'

import '../styles/components/ItemList.pcss'

import withI18n from './withI18n'
import withEmitter from './withEmitter'
import { formatDate } from '../common'
import ResourceImage from './ResourceImage'

const ItemList = ({
  translate, emitter, listItems, linkTemplate, className, count, moment,
}) => (
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
        <div>
          <Link className="item" href={urlTemplate.parse(linkTemplate).expand(listItem)}>
            {listItem.image || listItem.sameAs ? (
              <ResourceImage about={listItem} className="itemListImage" />
            ) : (
              <Icon type={listItem['@type']} />
            )}
            <span>
              {translate(listItem.name) || translate(listItem['@id'])}
              {listItem.alternateName ? ` (${translate(listItem.alternateName)})` : ''}

              {listItem.description && (
                <p className="itemListDescription">
                  {removeMd(translate(listItem.description)).slice(0, 200)}
                  ...
                </p>
              )}

              {(listItem['@type'] === 'Event' && listItem.startDate)
                ? (
                  <React.Fragment>
                    ,&nbsp;
                    <i aria-hidden="true" title={translate('Event.startDate')}>{formatDate(listItem.startDate, moment)}</i>
                  </React.Fragment>
                )
                : ''}
              {count && ` (${count(listItem)})`}
            </span>
          </Link>
        </div>
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
  count: PropTypes.func,
}

ItemList.defaultProps = {
  linkTemplate: '/resource/{@id}',
  className: '',
  count: undefined,
}

export default withEmitter(withI18n(ItemList))
