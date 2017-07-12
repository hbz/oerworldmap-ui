import React from 'react'
import { translate } from 'react-polyglot'

import '../styles/ItemList.less'
import url from '../assets/computer_problems.png'

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>{this.props.t('hello.world')} {this.props.source}</h1>
        <img src={url} />
      </div>
    )
  }
}

export default translate()(App)
