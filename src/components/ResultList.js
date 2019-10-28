import React from 'react'
import PropTypes from 'prop-types'
import removeMd from 'remove-markdown'

import withI18n from './withI18n'
import withEmitter from './withEmitter'
import Link from './Link'
import Icon from './Icon'

import lighhthouseIcon from '../public/lighthouse_16px_grey.svg'

import '../styles/components/ResultList.pcss'

const ResultList = ({ translate, emitter, listItems }) => (
  <ul className="ResultList">
    {listItems.map(({ about, lighthouse_count: lighthouseCount, like_count: likeCount }) => (
      <li
        key={about['@id']}
        onMouseEnter={() => {
          emitter.emit('hoverPoint', { id: about['@id'] })
        }}
        onMouseLeave={() => {
          emitter.emit('hoverPoint', { id: '' })
        }}
      >
        <div className="resultListTitle">
          <span className="centerIcon">
            <Icon type={about['@type']} />
          </span>
          <Link href={`/resource/${about['@id']}`}>
            {translate(about.name) || about['@id']}
            {about.alternateName
              ? ` (${translate(about.alternateName)})`
              : ''}
          </Link>
          <div className="resultListCounts">
            {lighthouseCount > 0 && (
              <div title={translate('ClientTemplates.filter.lighthouseCount')}>
                <svg width="9" height="16">
                  <image xlinkHref={lighhthouseIcon} width="9" height="16" />
                </svg>
                <span>{lighthouseCount}</span>
              </div>
            )}

            {likeCount > 0 && (
              <div title={translate('ClientTemplates.filter.likeCount')}>
                <i aria-hidden="true" className="fa fa-thumbs-up" />
                <span>{likeCount}</span>
              </div>
            )}
          </div>
        </div>

        {about.location && about.location.address && (
          <div className="resultListLocation">
            <span className="centerIcon">
              <i aria-hidden="true" className="fa fa-map-marker" />
            </span>
            {about.location.address.streetAddress && (
              about.location.address.streetAddress
            )}
            {about.location.address.addressLocality && (
              <>
                &nbsp;
                {[about.location.address.addressLocality, ',']}
              </>
            )}
            {about.location.address.addressCountry && (
              <>
                &nbsp;
                <Link href={`/country/${about.location.address.addressCountry}`}>
                  <span>
                    {translate(about.location.address.addressCountry)}
                  </span>
                </Link>
              </>
            )}
          </div>
        )}
        {about.description && (
          <div className="resultListDescription">
            {removeMd(translate(about.description)).slice(0, 200)}
            ...&nbsp;
            <Link href={`/resource/${about['@id']}`}>
              {translate('ResourceIndex.feed.more')}
            </Link>
          </div>
        )}
      </li>
    ))}
  </ul>
)

ResultList.propTypes = {
  translate: PropTypes.func.isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
  listItems: PropTypes.arrayOf(PropTypes.any).isRequired,
}

export default withEmitter(withI18n(ResultList))
