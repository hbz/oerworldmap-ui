import React from 'react'
import PropTypes from 'prop-types'
import withI18n from './withI18n'
import Link from './Link'
import '../styles/components/Timeline.pcss'

const Timeline = ({translate}) => (
  <div className="Timeline">
    <div className="timelineContainer">
      <section className="timelineContainerMain">

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
            &nbsp;Edited&nbsp;
            <Link href="/resource/blabla">OER World Map</Link>
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
            &nbsp;Edited&nbsp;
            <Link href="/resource/blabla">OER World Map</Link>
          </div>

          <div className="timelineBlockContent">
            Some content
          </div>
        </div>

      </section>

      <aside className="timelineContainerAside">
        aside
      </aside>

    </div>
  </div>
)

Timeline.propTypes = {
  translate: PropTypes.func.isRequired,
}

export default withI18n(Timeline)