/* global document */
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import '../styles/components/Accordion.pcss'

const Accordion = ({ title, children }) => {
  useEffect(() => {
  }, [])
  return (
    <div className="Accordion">
      <h2
        role="presentation"
        onClick={({ target }) => {
          const isActive = target.parentElement.classList.contains('active');
          [...document.querySelectorAll('.active')]
            .forEach((el) => el.classList.remove('active'))
          isActive
            ? target.parentElement.classList.remove('active')
            : target.parentElement.classList.add('active')
        }}
      >
        {title}
      </h2>
      <div className="accordionContent">
        {children}
      </div>
    </div>
  )
}

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Accordion
