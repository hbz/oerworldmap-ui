import React from 'react'
import PropTypes from 'prop-types'

const Log = ({entries}) => (
  <pre>{JSON.stringify(entries, null, 2)}</pre>
)

export default Log
