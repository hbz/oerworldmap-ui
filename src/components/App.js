import React from 'react'
import OERWorldMap from './OERWorldMap'

import '../styles/ItemList.less'
import url from '../assets/computer_problems.png'

class App extends OERWorldMap {
  render () {
    return (
      <div>
        <h1>{this.t('hello.world', {source: this.props.source})}</h1>
        <img src={url} />
      </div>
    )
  }
}

export default App
