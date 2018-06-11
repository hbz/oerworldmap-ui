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

const ItemList = ({ translate, emitter, listItems, linkTemplate, className, count }) => (
  <ul className={`ItemList ${className}`} >
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
            <div className="itemListTooltip" >
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
              {listItem.description &&
                <ReactMarkdown
                  className="description"
                  escapeHtml={false}
                  source={translate(listItem.description)}
                  skipHtml
                  unwrapDisallowed={false}
                  renderers={
                    {link: link => (
                      <a href={link.href} target="_blank" rel="noopener noreferrer">
                        {link.children}
                      </a>
                    )}
                  }
                />
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
              <span>
                {translate(listItem.name) || listItem['@id']}
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
  count: PropTypes.func
}

ItemList.defaultProps = {
  linkTemplate: '/resource/{@id}',
  className: '',
  count: undefined
}

export default withEmitter(withI18n(ItemList))
