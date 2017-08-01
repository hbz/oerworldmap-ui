import React from 'react'
import PropTypes from 'prop-types'

import PagedCollection from './PagedCollection'
import WebPage from './WebPage'

const components = {
  'PagedCollection': PagedCollection,
  'WebPage': WebPage
}

const App = ({data}) => {
  const Component = components[data['@type']]
  return <Component {...data} />
}

App.propTypes = {
  translate: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
}

export default App
