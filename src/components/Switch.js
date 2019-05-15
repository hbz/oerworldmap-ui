import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import '../styles/components/Switch.pcss'

const Switch = ({title, onChange, checked}) => {

  const [isChecked, setIsChecked] = useState(checked)

  useEffect(() => {
    onChange(isChecked)
  })

  return (
    <div className="Switch">
      <span className="switchTitle">
        {title}
      </span>
      <label>
        <input
          onChange={() => {
            setIsChecked(!isChecked)
          }}
          type="checkbox"
          checked={isChecked}
        />
        <span className="switchSlider" />
      </label>
    </div>
  )
}

Switch.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool
}

Switch.defaultProps = {
  checked: false
}

export default Switch
