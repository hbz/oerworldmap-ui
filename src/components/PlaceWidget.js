import React from 'react'

import { Fieldset, Checkbox } from 'json-pointer-form'

class PlaceWidget extends Fieldset {

  constructor(props) {
    super(props)
    this.select = this.select.bind(this)
  }

  select(suggestion) {
    this.props.handleChange({
      target: {
        name: this.props.name,
        value: suggestion.target.value,
        type: 'custom'
      }
    })
  }

  render() {
    return (
      <div>
        <Checkbox
          errors={[]}
          getLabel={this.props.getLabel}
          getOptions={this.props.getOptions}
          handleChange={(suggestion) => this.select(suggestion)}
          name={this.props.name}
          parents={this.props.parents}
          property={this.props.property}
          schema={{properties: {mapzen: true}}}
        />
        {this.getChildren()}
      </div>
    )
  }

}

export default PlaceWidget
