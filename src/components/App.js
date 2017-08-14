import React from 'react'
import PropTypes from 'prop-types'
import 'font-awesome/css/font-awesome.css'
import PagedCollection from './PagedCollection'
import WebPage from './WebPage'
import Header from './Header'
import Filters from './Filters'

const App = ({ data, emitter }) => (
  <main className="main">

    <Header />

    <div className="content">

      <Filters />
      {data['@type'] === 'PagedCollection' &&
        <PagedCollection emitter={emitter} {...data} />
      }
      {data['@type'] === 'WebPage' &&
        <WebPage emitter={emitter} {...data} />
      }

    </div>

  </main>
)

App.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired
}

export default App
