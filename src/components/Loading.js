import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import withEmitter from './withEmitter'

import '../styles/components/Loading.pcss'

const Loading = ({ emitter }) => {
  const [loading, setloading] = useState(false)

  const updateLoader = (state) => {
    setloading(state)
  }

  useEffect(() => {
    emitter.on('setLoading', updateLoader)
    return () => emitter.off('setLoading', updateLoader)
  }, [])

  return (
    <div>
      {loading && (
        <div className="Loading">
          <div className="loadingCircle" />
        </div>
      )}
    </div>
  )
}

Loading.propTypes = {
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default withEmitter(Loading)
