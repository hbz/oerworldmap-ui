import React from 'react'
import PropTypes from 'prop-types'

import { getTwitterId } from '../common'
import Icon from './Icon'
import withI18n from './withI18n'

import '../styles/components/ResourceImage.pcss'

const ResourceImage = ({about, translate, className}) => {

  const twitterId = getTwitterId(about.sameAs)

  return (
    <div className={`ResourceImage ${className}`}>
      <div className="missingImg">
        <Icon type={about['@type']} />
      </div>

      {about.image &&
        <img
          className={about['@type']}
          src={about.image}
          alt={translate(about.name)}
          style={{
            visibility: 'hidden'
          }}
          onLoad={e => {
            e.target && (e.target.style.visibility = 'visible')
          }}
          onError={e => {
            e.target && (e.target.style.visibility = 'hidden')
          }}
          aria-label={translate(about.name)}
        />
      }

      {!about.image && twitterId && twitterId[1] &&
        <img
          src={`https://avatars.io/twitter/${twitterId[1]}`}
          alt={translate(about.name)}
          aria-label={translate(about.name)}
        />
      }
    </div>
  )
}

ResourceImage.propTypes = {
  translate: PropTypes.func.isRequired,
  about: PropTypes.objectOf(PropTypes.any).isRequired,
  className: PropTypes.string
}

ResourceImage.defaultProps = {
  className: undefined
}

export default withI18n(ResourceImage)
