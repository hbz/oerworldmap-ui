import React from 'react'
import PropTypes from 'prop-types'
import MiniMap from './MiniMap'

import withI18n from './withI18n'

const WebPageCover = ({geo, about, translate, mapboxConfig}) => (
  <div className="WebPageCover">
    {geo &&
      <MiniMap
        mapboxConfig={mapboxConfig}
        features={geo && geo.geometry}
        zoom={7}
        center={(geo &&
          geo.geometry &&
          geo.geometry.coordinates) &&
          Array.isArray(geo.geometry.coordinates[0])
          ? [geo.geometry.coordinates[0][0]-1, geo.geometry.coordinates[0][1]]
          : [geo.geometry.coordinates[0]-1, geo.geometry.coordinates[1]]
        }
      />
    }

    {about.image &&
      <img
        src={about.image}
        alt={translate(about.name)}
        onError={e => {
          if (Object.keys(geo.geometry).length <= 0) {
            e.target.parentElement.remove()
          }
          e.target.remove()
        }}
        aria-label={translate(about.name)}
      />
    }
  </div>
)

WebPageCover.propTypes = {
  geo: PropTypes.objectOf(PropTypes.any),
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
  geo: null
}

export default withI18n(WebPageCover)
