import React, { Component } from 'react'
import Cleave from "cleave.js/react"
import moment from "moment"

import withFormData from './withFormData'

const DateTime = ({name, value, setValue, errors, title, className, translate, formId, required, placeholder}) => {

  return (
    <div className={`DateTime ${className}`}>
     <label
      htmlFor={`${formId}-${name}`}
      dangerouslySetInnerHTML={{__html: translate(title) +
        (required
          ? `<span class="asterisk" title="${translate('This is a required field!')}">*</span>`
          : '') }}
      className={required ? 'required' : ''}
    />
    {errors.map((error, index) => (
      <div className="error" key={index}>{error.message}</div>
    ))}
    <div className="Inputs">
      <Cleave
        placeholder={placeholder}
        options={{
          date: true,
          datePattern: ["Y", "m", "d"],
        }}
        value={value}
        onChange={e => {
          const date = e.target.value.replace(/\//g, '-')
          setValue(date.endsWith("-") ? date.slice(0, -1) : date)
        }}
      />

      {value &&
        moment(value.split('T')[0], 'YYYY-MM-DD', true).isValid() &&
        <Cleave
          placeholder={`hh:mm ${translate('(Optional)')}`} // USE SECOND PLACEHOLDER?
          options={{
            time: true,
            timePattern: ["h", "m"]
          }}
          value={
            (value.includes('T') &&
            value.split('T')[1].split('.')[0]) || ""
          }
          onChange={e => {
            const time = e.target.value
            const date = `${value.split('T')[0]}${time ? 'T' + time : ''}`
            setValue(date)
          }}
        />
      }
    </div>
    <input
      type="hidden"
      name={name}
      value={value}
      id={`${formId}-${name}`}
    />
    </div>
  )
}

export default withFormData(DateTime)