import React from 'react'
import PropTypes from 'prop-types'
import withI18n from './withI18n'
import '../styles/components/TimelineBlock.pcss'

const TimelineBlock = ({title, date, children, prominent, withBorder, moment}) => (
  <div className={`TimelineBlock${prominent ? ' prominent': ''}`}>
    {date &&
      <div className="timelineBlockMetadata">
        <div className="timelineBlockMetadataTime">
          {moment(date).fromNow()}
        </div>
        {prominent &&
          <i
            className="fa fa-close"
            role="presentation"
            onClick={e => {
              e.target.parentElement.parentElement.remove()
            }}
          />
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
  title: PropTypes.string,
  prominent: PropTypes.bool,
  date: PropTypes.string,
  withBorder: PropTypes.bool,
  moment: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}

TimelineBlock.defaultProps = {
  title: undefined,
  date: undefined,
  prominent: false,
  withBorder: false
}


export default withI18n(TimelineBlock)