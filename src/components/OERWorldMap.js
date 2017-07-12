import React from 'react'
import Polyglot from 'node-polyglot'

class OERWorldMap extends React.Component {
  constructor (props) {
    super(props)
    this.polyglot = new Polyglot()
    this.polyglot.extend(require('../locale/' + props.language + '.json'))
    this.t = this.t.bind(this)
  }
  componentWillReceiveProps (nextProps) {
    if ('language' in nextProps && this.props.language !== 'language') {
      this.polyglot.replace(require('../locale/' + nextProps.language + '.json'))
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
