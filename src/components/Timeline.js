import React from 'react'
import PropTypes from 'prop-types'
import withI18n from './withI18n'
import Link from './Link'
import '../styles/components/Timeline.pcss'
import TimelineBlock from './TimelineBlock'

const Timeline = ({data, user, translate, member, mapboxConfig}) => (
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

        {member.map(me => (
          <TimelineBlock
            key={me["@id"]}
            title={me.about && translate(me.about.name)}
            date={me.dateCreated}
            withBorder
          />
        ))}

      </section>

      {user &&
        <aside className="timelineContainerAside">

          <TimelineBlock>
            <div className="userBlock">
              <a href={user._self}>
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Frau" />
                <h2>a{translate(user.username)}</h2>
              </a>
              {/* <h3>Country Champion for <Link href="#none">United Kingdom</Link></h3> */}
            </div>
          </TimelineBlock>

          {/*
          <div className="timelineBlock">
            <div className="nearBy">
              <h2>Near By</h2>
              <img src={`https://api.mapbox.com/styles/v1/${mapboxConfig.miniMapStyle}/static/6.92391,50.92854,11.2,0,0/300x300@2x?access_token=${mapboxConfig.token}`} alt="" />
              <br />
              <Link href="map" >Show in fullscreen map</Link>
            </div>
          </div> */}

        </aside>
      }

    </div>
  </div>
)

Timeline.propTypes = {
  translate: PropTypes.func.isRequired,
}

export default withI18n(Timeline)