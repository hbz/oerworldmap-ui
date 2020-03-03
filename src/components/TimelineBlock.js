import React from 'react'
import PropTypes from 'prop-types'
import Markdown from 'markdown-to-jsx'
import withI18n from './withI18n'
import Link from './Link'
import ResourcePreview from './ResourcePreview'
import LinkOverride from './LinkOverride'

import '../styles/components/TimelineBlock.pcss'

const TimelineBlock = ({
  entry, prominent, withBorder, moment, translate,
}) => {
  let { user } = entry || {}
  let message
  let resource

  if (entry.about['@type'] === 'LighthouseAction') {
    message = translate('TimelineBlock.markedAsLighthouse')
    resource = entry.about.object
  } else if (entry.about['@type'] === 'Comment') {
    message = translate('TimelineBlock.commentedOn')
    resource = entry.about.commentOn
  } else if (entry.action.type === 'add' && entry.about['@type'] === 'Person') {
    user = entry.about
    message = translate('TimelineBlock.joinedTheOERWorldMap')
    resource = entry.about
  } else if (entry.action.type === 'add' && entry.about['@type'] === 'LikeAction') {
    message = translate('TimelineBlock.liked')
    resource = entry.about.object
  } else if (entry.action.type === 'add') {
    message = translate('TimelineBlock.added')
    resource = entry.about
  } else if (entry.action.type === 'edit' && entry.about['@type'] === 'Person') {
    user = entry.about
    message = translate('TimelineBlock.updatedTheirProfile')
    resource = entry.about
  } else if (entry.action.type === 'edit') {
    message = translate('TimelineBlock.edited')
    resource = entry.about
  }

  user = user || {}
  resource = resource || {}

  return (
    <div className={`TimelineBlock${prominent ? ' prominent' : ''}`}>

      <React.Fragment>
        <div className="timelineBlockTitle">
          {entry.action.time && (
            <span className="timelineBlockMetadataTime">
              {moment(entry.action.time).fromNow()}
              &nbsp;
            </span>
          )}
          {user.name
            && <Link href={user['@id']}>{translate(user.name)}</Link>
            || translate('TimelineBlock.someone')
          }
          &nbsp;
          {translate('TimelineBlock.from')}
          &nbsp;
          {(user.location && user.location[0] && user.location[0].address)
            ? (
              <Link href={user.location[0].address.addressCountry}>
                {translate(user.location[0].address.addressCountry)}
              </Link>
            ) : translate('TimelineBlock.somewhere')}
          &nbsp;
          {translate(message)}
          {entry.about['@type'] !== 'Person' && (
            <Link href={resource['@id']}>
              &nbsp;
              {translate(resource.name)}
            </Link>
          )}
        </div>

        <div className={`timelineBlockContent${withBorder ? ' withBorder' : ''}`}>
          <ResourcePreview about={resource} />

          {entry.about['@type'] === 'Comment' && (
            <div className="comment">
              <div className="commentMetadata">
                <Link href={user['@id']}>{translate(user.name)}</Link>
              </div>
              <div className="commentText">
                <Markdown options={{
                  overrides: {
                    a: {
                      component: LinkOverride,
                    },
                  },
                }}
                >
                  {translate(entry.about.text)}
                </Markdown>
              </div>
            </div>
          )}
        </div>

      </React.Fragment>
    </div>
  )
}

TimelineBlock.propTypes = {
  entry: PropTypes.objectOf(PropTypes.any).isRequired,
  moment: PropTypes.func.isRequired,
  translate: PropTypes.func.isRequired,
  prominent: PropTypes.bool,
  withBorder: PropTypes.bool,
}

TimelineBlock.defaultProps = {
  prominent: false,
  withBorder: false,
}


export default withI18n(TimelineBlock)
