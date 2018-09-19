import React from 'react'
import PropTypes from 'prop-types'
import withI18n from './withI18n'
import Link from './Link'
import '../styles/components/Timeline.pcss'

const Timeline = ({translate}) => (
  <div className="Timeline">
    <div className="timelineContainer">
      <section className="timelineContainerMain">


        <div className="timelineBlock prominent">
          <div className="timelineBlockMetadata">
            <div className="timelineBlockMetadataTime">
              10. Januar 2018
            </div>
            <div className="timelineBlockMetadataActions">
              <i className="fa fa-close" />
            </div>
          </div>

          <div className="timelineBlockTitle">
            Stay tunned: Next week we launch owr new UI
          </div>

          <div className="timelineBlockContent">
            With the new UI we launch a bunch o new features, like the history of an entry, a new single resource view a new landing page and so on. Read on
            <br />
            <br />
            http://oerworldmap.org/resource/urn%3Auuid%3A55d772c7-4059-456d-a49d-40e2ecb48a10
          </div>
        </div>

        <div className="timelineBlock">
          <div className="timelineBlockMetadata">
            <div className="timelineBlockMetadataTime">
              5 hours ago
            </div>
            <div className="timelineBlockMetadataActions">
              <i className="fa fa-bell" />
            </div>
          </div>

          <div className="timelineBlockTitle">
            <Link href="/resource/blabla">Karin Driesen</Link>
            &nbsp;edited&nbsp;
            <Link href="/resource/blabla">OER World Map</Link>
            The following
          </div>

          <div className="timelineBlockContent">
            Some content
          </div>
        </div>

        <div className="timelineBlock">
          <div className="timelineBlockMetadata">
            <div className="timelineBlockMetadataTime">
              5 hours ago
            </div>
            <div className="timelineBlockMetadataActions">
              <i className="fa fa-bell" />
            </div>
          </div>

          <div className="timelineBlockTitle">
            <Link href="/resource/blabla">Karin Driesen</Link>
            &nbsp;edited&nbsp;
            <Link href="/resource/blabla">OER World Map</Link>
          </div>

          <div className="timelineBlockContent">
            Some content
          </div>
        </div>

      </section>

      <aside className="timelineContainerAside">
        <div className="timelineBlock">

          <div className="userBlock">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Frau" />
            <h2>Marta Mustermann</h2>
            <h3>Country Champion for <Link href="#none">United Kingdom</Link></h3>
          </div>

        </div>
      </aside>

    </div>
  </div>
)

Timeline.propTypes = {
  translate: PropTypes.func.isRequired,
}

export default withI18n(Timeline)