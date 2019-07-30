import React from 'react'
import PropTypes from 'prop-types'

import '../styles/components/Log.pcss'

const Log = ({ entries }) => (
  <div className="Log">
    <pre>{JSON.stringify(entries, null, 2)}</pre>
  </div>
)

Log.propTypes = {
  entries: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default Log
