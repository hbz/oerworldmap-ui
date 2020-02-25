import React from 'react'
import PropTypes from 'prop-types'
import Link from './Link'
import withI18n from './withI18n'
import ResultList from './ResultList'

import '../styles/components/Feed.pcss'

const Feed = ({ translate, member }) => (
  <div className="Feed">
    <h2 className="title">
      {translate('ResourceIndex.feed.recentAdditions')}
    </h2>
    <ResultList listItems={member.map(member => member)} />
    <div className="more">
      <Link href="/resource/">
        {translate('ResourceIndex.feed.more')}
      </Link>
    </div>
  </div>
)

Feed.propTypes = {
  translate: PropTypes.func.isRequired,
  member: PropTypes.arrayOf(PropTypes.any).isRequired,
}

export default withI18n(Feed)
