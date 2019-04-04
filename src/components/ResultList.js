import React from 'react'
import PropTypes from "prop-types"
import removeMd from 'remove-markdown'

import withI18n from './withI18n'
import withEmitter from './withEmitter'
import Link from './Link'

import '../styles/components/ResultList.pcss'

const ResultList = ({ translate, emitter, listItems }) => {
  return (
    <ul className="ResultList">
      {listItems.map(listItem => (
        <li
          key={listItem['@id']}
          onMouseEnter={() => {
            emitter.emit('hoverPoint', { id: listItem['@id'] })
          }}
          onMouseLeave={() => {
            emitter.emit('hoverPoint', { id: '' })
          }}
        >
          {listItem.location &&(
            <div>
              <i aria-hidden="true" className="fa fa-map-marker" />
              &nbsp;
              {listItem.location.address.streetAddress &&
                listItem.location.address.streetAddress
              }
              &nbsp;
              {listItem.location.address.addressLocality}
              &nbsp;
              {listItem.location.address.addressCountry && (
                <Link href={`/country/${listItem.location.address.addressCountry}`}>
                  <span>
                    (
                    {translate(listItem.location.address.addressCountry)}
                    )
                  </span>
                </Link>
              )}
            </div>
          )}
          <div className="resultListTitle">
            <Link href={`/resource/${listItem['@id']}`}>
              {translate(listItem.name) || listItem['@id']}
              {listItem.alternateName
                ? ` (${translate(listItem.alternateName)})`
                : ''}
            </Link>
          </div>
          {listItem.description && (
            <div>
              {removeMd(translate(listItem.description)).slice(0, 300)}
              ...&nbsp;
              <Link href={`/resource/${listItem['@id']}`}>
                {translate("ResourceIndex.feed.more")}
              </Link>
            </div>
          )}
        </li>
      ))}
    </ul>
  )
}

ResultList.propTypes = {
  translate: PropTypes.func.isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
  listItems: PropTypes.arrayOf(PropTypes.any).isRequired,
}

export default withEmitter(withI18n(ResultList))
