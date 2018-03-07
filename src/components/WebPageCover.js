import React from 'react'
import PropTypes from 'prop-types'
import MiniMap from './MiniMap'

import withI18n from './withI18n'
import withEmitter from './withEmitter'
import Icon from './Icon'

const WebPageCover = ({geo, about, translate, mapboxConfig, view, emitter}) => (
  <div className="WebPageCover">

    {geo &&
      <MiniMap
        mapboxConfig={mapboxConfig}
        features={geo && geo.geometry}
        zoom={3}
        zoomable={view === 'edit'}
        draggable={view === 'edit'}
        onFeatureDrag={point => emitter.emit('setPoint', point)}
        center={(geo &&
          geo.geometry &&
          geo.geometry.coordinates) &&
          Array.isArray(geo.geometry.coordinates[0])
          ? [geo.geometry.coordinates[0][0]-1, geo.geometry.coordinates[0][1]]
          : [geo.geometry.coordinates[0]-1, geo.geometry.coordinates[1]]
        }
      />
    }

    <div className="image">
      {about.image ? (
        <img
          src={about.image}
          alt={translate(about.name)}
          onError={e => {
            e.target.parentElement.remove()
          }}
          aria-label={translate(about.name)}
        />
      ) : (
        <div className="missingImg">
          <Icon type={about['@type']} />
        </div>
      )
      }
    </div>

  </div>
)

WebPageCover.propTypes = {
  geo: PropTypes.objectOf(PropTypes.any),
  about: PropTypes.objectOf(PropTypes.any).isRequired,
  translate: PropTypes.func.isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
  mapboxConfig: PropTypes.shape(
    {
      token: PropTypes.string,
      style: PropTypes.string,
      miniMapStyle: PropTypes.string,
    }
  ).isRequired,
  view: PropTypes.string.isRequired
}

WebPageCover.defaultProps = {
  geo: null
}

export default withEmitter(withI18n(WebPageCover))
