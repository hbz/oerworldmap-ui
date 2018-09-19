import React from 'react'
import PropTypes from 'prop-types'
import withI18n from './withI18n'
import '../styles/components/TimelineBlock.pcss'

const TimelineBlock = ({title, date, children, prominent, withBorder, translate, moment}) => (
  <div className={`TimelineBlock${prominent ? ' prominent': ''}`}>
    {date &&
      <div className="timelineBlockMetadata">
        <div className="timelineBlockMetadataTime">
          {moment(date).fromNow()}
        </div>
        {prominent &&
          <div className="timelineBlockMetadataActions">
            <i className="fa fa-close" />
          </div>
        }
      </div>
    }

    {title &&
      <div className="timelineBlockTitle">
        {title}
      </div>
    }

    {children &&
      <div className={`timelineBlockContent${withBorder ? ' withBorder': ''}`}>
        {children}
      </div>
    }
  </div>
)

TimelineBlock.propTypes = {
  prominent: PropTypes.bool,
  withBorder: PropTypes.bool,
  translate: PropTypes.func.isRequired,
  moment: PropTypes.func.isRequired,
}

TimelineBlock.defaultProps = {
  prominent: false,
  withBorder: false
}


export default withI18n(TimelineBlock)