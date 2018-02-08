import React from 'react'
import PropTypes from 'prop-types'
import Tooltip from 'rc-tooltip'
import ReactMarkdown from 'react-markdown'
import urlTemplate from 'url-template'

import Icon from './Icon'
import Link from './Link'

import '../styles/components/ItemList.pcss'

import withI18n from './withI18n'
import withEmitter from './withEmitter'

const ItemList = ({ translate, emitter, listItems, linkTemplate }) => (
  <ul className="linedList ItemList" >
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
            <div>
              <b>{translate(listItem.name) || listItem['@id']}</b>
              {listItem.description
                ? <ReactMarkdown escapeHtml={false} source={translate(listItem.description)} />
                : <p>No description available</p>
              }
            </div>
          }
          placement="left"
          mouseEnterDelay={0.2}
          overlayClassName="itemListTooltip"
        >
          <div>
            <Link className="item" href={urlTemplate.parse(linkTemplate).expand(listItem)}>
              <Icon type={listItem['@type']} />
              <span>{translate(listItem.name) || listItem['@id']}</span>
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
  linkTemplate: PropTypes.string
}

ItemList.defaultProps = {
  linkTemplate: '/resource/{@id}'
}

export default withEmitter(withI18n(ItemList))
