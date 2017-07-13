import React from 'react'
import PropTypes from 'prop-types'

import ItemList from './ItemList'

import translate from './translate'

import testdata from '../../test/resources/ItemList.json'

const App = ({translate, source}) => {
  return (
    <div>
      <h1>{translate('hello.world', {source})}</h1>
      <ItemList listItems={testdata} />
    </div>
  )
}

App.propTypes = {
  source: PropTypes.string.isRequired,
  translate: PropTypes.func.isRequired
}

export default translate(App)
