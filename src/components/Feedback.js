import React from 'react'
import PropTypes from 'prop-types'

import '../styles/components/Feedback.pcss'

const Feedback = ({children}) => (
  <div className="Feedback">
    {children}
  </div>
)

Feedback.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Feedback