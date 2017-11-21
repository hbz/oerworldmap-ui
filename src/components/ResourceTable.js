import React from 'react'
import PropTypes from 'prop-types'
import pointer from 'json-pointer'
import Link from './Link'

import translate from './translate'

class ResourceTable extends React.Component {

  constructor(props) {
    super(props)
    this.process = this.process.bind(this)
    this.property = this.property.bind(this)
    this.getSchema = this.getSchema.bind(this)
  }

  getSchema(ptr) {
    return ptr.charAt(0) === '#'
      ? pointer.get(this.props.schema, ptr.slice(1))
      : { "type" : "string", "remote": ptr }
  }

  property(name, definition, value) {

    if ('$ref' in definition) {
      Object.assign(definition, this.getSchema(definition['$ref']))
    }

    if ('allOf' in definition) {
      const allOf = {}
      definition.allOf.map(function(definition) {
        if ('$ref' in definition) {
          Object.assign(allOf, this.getSchema(definition['$ref']))
        } else {
          Object.assign(allOf, definition)
        }
      }, this)
      definition = allOf
    }

    let label = false
    if (definition.remote) {
      definition.type = 'string'
      definition.format = 'uri'
      label = this.props.translate(value.name)
      value = value['@id']
    } else if (definition.translate) {
      definition.type = 'string'
      value = this.props.translate(value)
    }

    if (!definition.type && definition.enum) {
      definition.type = 'string'
    }

    switch(definition.type) {
    case 'array': {
      const itemsDefinition = definition.items['$ref']
        ? this.getSchema(definition.items['$ref'])
        : definition.items
      return (
        <ul>
          {value.map(value => {
            return (
              <li key={JSON.stringify(value)}>
                {this.property(name, itemsDefinition, value)}
              </li>
            )
          })}
        </ul>
      )
    }
    case 'string':
    case 'number':
    case 'integer':
    case 'boolean':
      return (
        <span>
          {definition.format === 'uri' ? <Link href={value}> {label ? label : value}</Link> : value}
        </span>
      )
    case 'object':
      return this.process(definition, value)
    default:
      console.warn("Unkown property type", name, definition)
    }

  }

  process(schema, value) {
    return (
      <table className="ResourceTable">
        <tbody>
          {Object.keys(schema.properties).map(property => {
            if (value[property]) {
              const definition = schema.properties[property]
              const className = definition._display ? definition._display.className : null
              return (
                <tr key={property} className={className}>
                  <td>{property}</td>
                  <td>{this.property(property, definition, value[property])}</td>
                </tr>
              )
            }
          })}
        </tbody>
      </table>
    )
  }

  render() {
    const type = this.props.value['@type']
    const schema = this.getSchema('#/definitions/' + type)
    return this.process(schema, this.props.value)
  }

}

ResourceTable.propTypes = {
  value: PropTypes.objectOf(PropTypes.any).isRequired,
  schema: PropTypes.objectOf(PropTypes.any).isRequired,
  translate: PropTypes.func.isRequired
}

export default translate(ResourceTable)
