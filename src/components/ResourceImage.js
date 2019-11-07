/* global document */
import React from 'react'
import PropTypes from 'prop-types'

import { getTwitterId } from '../common'
import Icon from './Icon'
import withI18n from './withI18n'
import Link from './Link'

import '../styles/components/ResourceImage.pcss'

const ResourceImage = ({
  about, translate, className, view, disableDefault,
}) => {
  const twitterId = getTwitterId(about.sameAs)

  const images = (
    <React.Fragment>
      {!disableDefault && (
        <div className="missingImg">
          <Icon type={about['@type']} />
        </div>
      )}

      {about.image && (
        <img
          className={about['@type']}
          src={about.image.replace('http:', '').replace('https:', '')}
          alt={translate(about.name)}
          style={{
            visibility: 'hidden',
          }}
          onLoad={(e) => {
            e.target && (e.target.style.visibility = 'visible')
          }}
          onError={(e) => {
            console.error(e)
            e.target && (e.target.style.visibility = 'hidden')
            disableDefault && e.target.parentElement.parentElement.remove()
          }}
          aria-label={translate(about.name)}
        />
      )}

      {!about.image && twitterId && twitterId[1] && (
        <img
          src={`https://avatars.io/twitter/${twitterId[1]}`}
          alt={translate(about.name)}
          aria-label={translate(about.name)}
        />
      )}
    </React.Fragment>
  )

  return (
    <div
      className={`ResourceImage ${className}`}
      style={{
        display: (disableDefault && !about.image && !twitterId) ? 'none' : 'inherit',
      }}
    >
      {(about.url && className === 'webPageCoverImage') ? (
        <a target="_blank" rel="noopener noreferrer" href={about.url}>
          {images}
        </a>
      ) : (
        view !== 'edit' ? (
          <Link href={`/resource/${about['@id']}`}>
            {images}
          </Link>
        ) : (
          <a
            href="#edit"
            onClick={(e) => {
              e.preventDefault()
              setTimeout(() => {
                const showOptional = document.querySelector('.showOptional')
                showOptional && showOptional.click()
                document.querySelector('.Input.image').scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                })
              }, 500)
            }}
          >
            {images}
          </a>
        )
      )}
    </div>
  )
}

ResourceImage.propTypes = {
  translate: PropTypes.func.isRequired,
  about: PropTypes.objectOf(PropTypes.any).isRequired,
  className: PropTypes.string,
  view: PropTypes.string,
  disableDefault: PropTypes.bool,
}

ResourceImage.defaultProps = {
  className: undefined,
  view: false,
  disableDefault: undefined,
}

export default withI18n(ResourceImage)
