import React from 'react'
import PropTypes from 'prop-types'
import Icon from './Icon'
import withI18n from './withI18n'

import '../styles/components/FindBlock.pcss'

const FindBlock = ({translate}) => {
  const links = [
    {name: "Organization", type: "Organization"},
    {name: "Project", type: "Action"},
    {name: "Service", type: "Service"},
    {name: "Tool", type: "Product"},
    {name: "Event", type: "Event"},
    {name: "Story", type: "Article"},
    {name: "Publication", type: "WebPage"}
  ]
  return (
    <div className="FindBlock">
      <h2>Find</h2>
      <ul>
        {links.map(link => (
          <li>
            <a href={`/resource/?add=${link.type}`}>
              <Icon type={link.type} />
              <span>
                {translate(link.name)}
              </span>
              <i className="fa fa-plus" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

FindBlock.propTypes = {
  translate: PropTypes.func.isRequired,
}

FindBlock.defaultProps = {
}

export default withI18n(FindBlock)
