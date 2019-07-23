import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import '../styles/components/Switch.pcss'

const Switch = ({ title, onChange, checked }) => {
  const [isChecked, setIsChecked] = useState(checked)

  useEffect(() => {
    onChange(isChecked)
  })

  return (
    <div className="Switch">
      <span className="switchTitle">
        {isChecked ? title.checked : title.unchecked}
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
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool,
  title: PropTypes.shape(
    {
      checked: PropTypes.string,
      unchecked: PropTypes.string,
    },
  ).isRequired,
}

Switch.defaultProps = {
  checked: false,
}

export default Switch
