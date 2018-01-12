import React from 'react'

import Icon from './Icon'
import translate from './translate'

const Label = (translate, value) => {
  console.log(typeof value === 'object')
  return typeof value === 'object' ? (
    <span>
      <Icon type={value["@type"]} />
      &nbsp;{value["name"] ? translate(value["name"]) : value["@id"]}
    </span>
  ) : (
    <span>{translate(value)}</span>
  )
}

export default translate(Label)
