import React, { useEffect, useState } from 'react'
import fetch from 'isomorphic-fetch'
import PropTypes from 'prop-types'
import Link from './Link'
import withI18n from './withI18n'
import '../styles/components/Feed.pcss'
import ItemList from './ItemList'

const Feed = ({ translate, member, url }) => {
  const [elements, setElements] = useState(member)
  useEffect(() => {
    const fetchData = async () => {
      const { member } = await (await fetch(url, {
        headers: {
          accept: 'application/json',
        },
      })).json()
      setElements(member)
    }
    if (url) {
      fetchData()
    }
  }, [])
  return (
    <div className="Feed">
      <h2 className="title">
        {translate('ResourceIndex.feed.recentAdditions')}
      </h2>

      {elements && (
        <ItemList listItems={elements.map((member) => member.about)} tooltip={false} />
      )}
      {!url && (
        <div className="more">
          <Link href="/resource/?size=20&sort=dateCreated:desc">
            {translate('ResourceIndex.feed.more')}
          </Link>
        </div>
      )}
    </div>
  )
}

Feed.propTypes = {
  translate: PropTypes.func.isRequired,
  member: PropTypes.arrayOf(PropTypes.any).isRequired,
  url: PropTypes.string,
}

Feed.defaultProps = {
  url: undefined,
}

export default withI18n(Feed)
