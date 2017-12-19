import React from 'react'
import PropTypes from 'prop-types'

const Log = ({entries}) => (
  <pre>{JSON.stringify(entries, null, 2)}</pre>
)

Log.propTypes = {
  entries: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default Log
