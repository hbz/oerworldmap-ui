import React from 'react'

import pointer from 'json-pointer'
import { Fieldset, Checkbox } from 'json-pointer-form'

class PlaceWidget extends Fieldset {

  constructor(props) {
    super(props)
    this.select = this.select.bind(this)
    this.state.collapsed = props.collapsed
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
    const name = pointer.compile(this.getParentPath())
    return (
      <fieldset className={`${this.props.property} ${this.props.className || ''}`}>
        <legend className={this.props.errors[name] ? "error" : "title"}>
          {this.props.errors[name]
            ? this.props.getLabel(this.props.errors[name])
            : this.props.getLabel(this.props.title || this.props.property)}
        </legend>
        <p className={this.state.collapsed ? null : 'hidden'}>
          <em>{this.props.getLabel(this.props.description)}</em>
          <button className="btn btn-default" type="button" onClick={() => this.setState({collapsed: false})}>
            {this.props.getLabel('Place.show')}
          </button>
        </p>
        <div className={this.state.collapsed ? 'hidden' : null}>
          <Checkbox
            errors={[]}
            getLabel={this.props.getLabel}
            getOptions={this.props.getOptions}
            handleChange={(suggestion) => this.select(suggestion)}
            name={this.props.name}
            parents={this.props.parents}
            property={this.props.property}
            placeholder={this.props.getLabel('Foobar')}
            schema={{properties: {mapzen: true}}}
          />
          {this.getChildren()}
        </div>
      </fieldset>
    )
  }

}

PlaceWidget.defaultProps = {
  collapsed: false
}

export default PlaceWidget
