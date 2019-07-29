import React from 'react'
import PropTypes from 'prop-types'
import MiniMap from './MiniMap'
import centroids from '../json/centroids.json'
import ResourceImage from './ResourceImage'

import '../styles/components/WebPageCover.pcss'

const WebPageCover = ({ feature, about, mapboxConfig, view }) => {
  const country = (about
    && about.location
    && about.location[0]
    && about.location[0].address
    && about.location[0].address.addressCountry) || null

  const geometry = feature && feature.geometry

  return (
    <div className="WebPageCover">

      <MiniMap
        mapboxConfig={mapboxConfig}
        geometry={geometry}
        center={geometry ? undefined : (country && centroids[country])}
      />

      <ResourceImage about={about} className="webPageCoverImage" view={view} />
    </div>
  )
}

WebPageCover.propTypes = {
  feature: PropTypes.objectOf(PropTypes.any),
  about: PropTypes.objectOf(PropTypes.any).isRequired,
  mapboxConfig: PropTypes.shape(
    {
      token: PropTypes.string,
      style: PropTypes.string,
      miniMapStyle: PropTypes.string,
    },
  ).isRequired,
  view: PropTypes.string.isRequired,
}

WebPageCover.defaultProps = {
  feature: null,
}

export default WebPageCover
