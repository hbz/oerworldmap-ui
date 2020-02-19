import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import withI18n from './withI18n'
import withEmitter from './withEmitter'

import '../styles/components/MapLeyend.pcss'

const MapLeyend = ({ emitter, translate, iso3166 }) => {
  const [colors, setColors] = useState(null)
  const [max, setMax] = useState(0)

  useEffect(() => {
    const updateColors = ({ colors, max }) => {
      setColors(colors)
      setMax(max)
    }
    emitter.on('updateColors', updateColors)
    return () => emitter.off('updateColors', updateColors)
  }, [])

  return (
    colors && (
      <div className="MapLeyend">
        <div className="infoContainer">
          <span className="min">0</span>

          <span className="description">
            {iso3166 ? translate('Map.entriesPerRegion') : translate('Map.entriesPerCountry')}
          </span>

          <span className="max">
            {max}
          </span>
        </div>

        <div className="stepsContainer">
          {colors.map(color => (
            <div key={color} style={{ backgroundColor: color }} className="step" />
          ))}
        </div>
      </div>
    ))
}

MapLeyend.propTypes = {
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
  translate: PropTypes.func.isRequired,
  iso3166: PropTypes.string,
}

MapLeyend.defaultProps = {
  iso3166: undefined,
}

export default withEmitter(withI18n(MapLeyend))
