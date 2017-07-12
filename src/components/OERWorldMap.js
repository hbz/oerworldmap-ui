import React from 'react'
import App from './App'
import { I18n } from 'react-polyglot'
import I18nStrings from '../locale/es/ItemList.json'

class OERWorldMap extends React.Component {
  render () {
    return (
      <I18n locale='es' messages={I18nStrings}>
        <App {...this.props} />
      </I18n>
    )
  }
}

export default OERWorldMap
