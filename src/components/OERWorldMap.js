import React from 'react'
import Polyglot from 'node-polyglot'

class OERWorldMap extends React.Component {
  constructor (props) {
    super(props)
    if (props.language !== undefined) {
      OERWorldMap.language = props.language
    } else if (OERWorldMap.language === undefined) {
      OERWorldMap.language = 'en'
    }
    this.polyglot = new Polyglot()
    this.polyglot.extend(require('../locale/' + OERWorldMap.language + '.json'))
    this.t = this.t.bind(this)
  }
  componentWillReceiveProps (nextProps) {
    if ('language' in nextProps && this.language !== nextProps.language) {
      OERWorldMap.language = nextProps.language
      this.polyglot.replace(require('../locale/' + OERWorldMap.language + '.json'))
    }
  }
  t (key, interpolationOptions) {
    return this.polyglot.t(key, interpolationOptions)
  }
  render () {
    return null
  }
}

export default OERWorldMap
