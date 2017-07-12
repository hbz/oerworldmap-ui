import React from 'react'
import Polyglot from 'node-polyglot'

class OERWorldMap extends React.Component {
  constructor (props) {
    super(props)
    if (props.languages !== undefined) {
      OERWorldMap.languages = props.languages
    } else if (OERWorldMap.languages === undefined) {
      OERWorldMap.languages = ['en']
    }
    this.polyglot = new Polyglot()
    this.polyglot.extend(require('../locale/' + OERWorldMap.languages[0] + '.json'))
    this.t = this.t.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    if ('language' in nextProps && this.languages !== nextProps.languages) {
      OERWorldMap.languages = nextProps.languages
      this.polyglot.replace(require('../locale/' + OERWorldMap.languages[0] + '.json'))
    }
  }

  /**
   * returns a localized string
   * @param {String | Array} key either for polyglot or an array of JSON-LD language objects
   */
  t (key, interpolationOptions) {
    if (typeof key === 'string') {
      return this.polyglot.t(key, interpolationOptions)
    } else if (Array.isArray(key)) {
      let localeString = false
      for (let i = 0; i < OERWorldMap.languages.length; i++) {
        localeString = key.find(value => {
          return value['@language'] === OERWorldMap.languages[i]
        })
        if (localeString) {
          break
        }
      }
      return localeString ? localeString['@value'] : key[0]['@value']
    }
  }

  render () {
    return null
  }
}

export default OERWorldMap
