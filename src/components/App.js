import React from 'react'
import OERWorldMap from './OERWorldMap'
import ItemList from './ItemList'

import testdata from '../../test/resources/ItemList.json'

class App extends OERWorldMap {
  render () {
    return (
      <div>
        <h1>{this.t('hello.world', {source: this.props.source})}</h1>
        <ItemList listItems={testdata} />
      </div>
    )
  }
}

export default App
