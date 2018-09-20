import React from 'react'
import PropTypes from 'prop-types'
import withI18n from './withI18n'
import Topline from './Topline'
import Link from './Link'
import TopWrapper from './TopWrapper'
import UserBlock from './UserBlock'

import '../styles/components/Timeline.pcss'
import TimelineBlock from './TimelineBlock'

const Timeline = ({user, translate, member, mapboxConfig}) => (
  <div className="Timeline">
    <div className="timelineContainer">
      <section className="timelineContainerMain">

        <TimelineBlock
          date="2018 12 11"
          title="Stay tunned: Next week we launch owr new UI"
          prominent
        >
          With the new UI we launch a bunch o new features, like the history of an entry, a new single resource view a new landing page and so on. Read on
          <br />
          <br />
          http://oerworldmap.org/resource/urn%3Auuid%3A55d772c7-4059-456d-a49d-40e2ecb48a10
        </TimelineBlock>

        {member.map(member => (
          <TimelineBlock
            key={member["@id"]}
            // title={member.about && translate(member.about.name)}
            date={member.dateCreated}
            // withBorder
          >
            <TopWrapper about={member.about} />
            <Topline about={member.about} className="inTooltip" />
          </TimelineBlock>
        ))}

        <div className="more">
          <Link href="/resource/?size=20&sort=dateCreated:desc">
            {translate('ResourceIndex.feed.more')}
          </Link>
        </div>

      </section>

      {user &&
        <aside className="timelineContainerAside">

          <TimelineBlock>
            <UserBlock
              id={user.id}
              username={user.username}
              image="https://randomuser.me/api/portraits/women/44.jpg"
              countryChampion={translate('DE')}
            />
          </TimelineBlock>

          <TimelineBlock>
            <div className="nearBy">
              <h2>Near By</h2>
              <img src={`https://api.mapbox.com/styles/v1/${mapboxConfig.miniMapStyle}/static/6.92391,50.92854,11.2,0,0/300x300@2x?access_token=${mapboxConfig.token}`} alt="" />
              <br />
              <Link href="/resource/" >Show in fullscreen map</Link>
            </div>
          </TimelineBlock>

        </aside>
      }

    </div>
  </div>
)

Timeline.propTypes = {
  translate: PropTypes.func.isRequired,
  user: PropTypes.objectOf(PropTypes.any),
  member: PropTypes.objectOf(PropTypes.any).isRequired,
  mapboxConfig: PropTypes.objectOf(PropTypes.any).isRequired
}

Timeline.defaultProps = {
  user: null
}

export default withI18n(Timeline)