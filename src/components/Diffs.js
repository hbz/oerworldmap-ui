import React from 'react'
import PropTypes from 'prop-types'

const Diffs = ({log, compare, to}) => (
  <div>
    <h1>Log</h1>
    <pre>{JSON.stringify(log, null, 2)}</pre>
    <h1>Compare</h1>
    <pre>{JSON.stringify(compare, null, 2)}</pre>
    <h1>To</h1>
    <pre>{JSON.stringify(to, null, 2)}</pre>
  </div>
)

export default Diffs
