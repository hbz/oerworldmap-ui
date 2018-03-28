/* eslint no-use-before-define: 0 */
import jsonPointer from 'json-pointer'
import merge from 'deepmerge'

const JsonSchema = (schema) => {

  const cloneSchema = (schema) => JSON.parse(JSON.stringify(schema))

  const get = (ptr) => expandSchema(
    cloneSchema(jsonPointer.get(schema, ptr.slice(1)))
  )

  const expandSchema = (schema) => {
    schema = resolveRefs(schema)
    if ('items' in schema) {
      schema.items = expandSchema(schema.items)
    }
    if ('allOf' in schema) {
      let schemas = {}
      schema.allOf.forEach(allOf => schemas = merge(schemas, expandSchema(allOf)))
      schema = merge(schemas, schema)
      delete schema.allOf
    }
    if ('oneOf' in schema) {
      schema = merge(schema, schema.oneOf.shift())
      delete schema.oneOf
    }
    if ('properties' in schema) {
      Object.keys(schema.properties).forEach((property) => {
        schema.properties[property] = expandSchema(
          schema.properties[property]
        )
      })
    }
    return schema
  }

  const resolveRefs = (schema) => {
    if ('$ref' in schema) {
      schema = merge(get(schema['$ref']), schema)
      delete schema['$ref']
    }
    return schema
  }

  return {
    get
  }

}

export default JsonSchema
