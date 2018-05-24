import React from 'react'
import PropTypes from 'prop-types'
import MiniMap from './MiniMap'

import withI18n from './withI18n'
import Icon from './Icon'

const WebPageCover = ({feature, about, translate, mapboxConfig}) => (
  <div className="WebPageCover">

    <MiniMap
      mapboxConfig={mapboxConfig}
      features={feature && feature.geometry}
      country={about
        && about.location
        && about.location.address
        && about.location.address.addressCountry
      }
    />

    <div className="image">
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
    </div>

  </div>
)

WebPageCover.propTypes = {
  feature: PropTypes.objectOf(PropTypes.any),
  about: PropTypes.objectOf(PropTypes.any).isRequired,
  translate: PropTypes.func.isRequired,
  mapboxConfig: PropTypes.shape(
    {
      token: PropTypes.string,
      style: PropTypes.string,
      miniMapStyle: PropTypes.string,
    }
  ).isRequired
}

WebPageCover.defaultProps = {
  feature: null
}

export default withI18n(WebPageCover)
