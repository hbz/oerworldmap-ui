import React from 'react'
import PropTypes from 'prop-types'
import urlTemplate from 'url-template'
import removeMd from 'remove-markdown'

import Icon from './Icon'
import Link from './Link'

import '../styles/components/ItemList.pcss'

import withI18n from './withI18n'
import { formatDate } from '../common'
import ResourceImage from './ResourceImage'

const ItemList = ({
  translate, listItems, linkTemplate, className, count, moment,
}) => (
  <ul className={`ItemList linedList ${className}`}>
    {listItems.map(listItem => (
      <li
        id={listItem['@id']}
        key={listItem['@id']}
      >
        <div className="item">
          {listItem.image || listItem.sameAs ? (
            <ResourceImage about={listItem} className="itemListImage" />
          ) : (
            <Icon type={listItem['@type']} />
          )}
          <Link href={urlTemplate.parse(linkTemplate).expand(listItem)}>
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

export default withI18n(ItemList)
