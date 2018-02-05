import React from 'react'
import PropTypes from 'prop-types'
import withI18n from './withI18n'
import Link from './Link'
import Icon from './Icon'

const ResourceList = ({ translate, title, list }) => (
  <div className="ResourceList asideList">
    <h3>{translate(title)}</h3>
    <ul>
      {Array.isArray(list) && list.map(item => (
        <li>
          <Icon type={item['@type']} /> <Link href={`/resource/${item['@id']}`}>{translate(item.name)}</Link>
        </li>
      ))}
    </ul>
  </div>
)

ResourceList.propTypes = {
  translate: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  list: PropTypes.objectOf(PropTypes.any).isRequired
}

export default withI18n(ResourceList)