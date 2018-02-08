import React from 'react'
import PropTypes from 'prop-types'
import Link from './Link'
import withI18n from './withI18n'
import FullModal from './FullModal'
import '../styles/components/Feed.pcss'
import Icon from './Icon'

const Feed = ({translate, member}) => (
  <div className="Feed">
    <FullModal>
      <h2 className="title">
        {translate('ResourceIndex.feed.recentAdditions')}
      </h2>
      <ul className="list">
        {member.map(item => (
          <li key={item.about['@id']}>
            <Link href={`/resource/${item.about['@id']}`}>
              <Icon type={item['@type']} />
              &nbsp;{translate(item.about.name) || item.about['@id']}
            </Link>
          </li>
        ))}
      </ul>
      <div className="more">
        <Link href="/resource/?size=20&sort=dateCreated:desc" >{translate('ResourceIndex.feed.more')}</Link>
      </div>
    </FullModal>
  </div>
)

Feed.propTypes = {
  translate: PropTypes.func.isRequired,
  member: PropTypes.arrayOf(PropTypes.any).isRequired,
}

export default withI18n(Feed)
