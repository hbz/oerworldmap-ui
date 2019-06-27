/* global fetch */
/* global Headers */
import React from 'react'
import PropTypes from 'prop-types'
import linkHeader from 'http-link-header'

const toJson = response => {
  return response.json().then(json => {
    if (response.headers.has('Link')) {
      json._links = linkHeader.parse(response.headers.get('Link'))
    }
    if (response.headers.has('Location')) {
      json._location = response.headers.get('Location')
    }
    json._self = (new URL(response.url)).href
    json._status = response.statusText
    return json
  })
}

class LoadData extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: null
    }
    this.fetchData = this.fetchData.bind(this)
  }

  componentDidMount() {
    const { url } = this.props
    this.fetchData(url)
  }

  componentWillReceiveProps(nextProps) {
    const { url } = nextProps
    this.fetchData(url)
  }

  async fetchData(url) {
    console.log("%cFetching data again", "color: red; font-weight: bold")
    try {
      const headers = new Headers({
        'Accept': 'application/json'
      })
      const response = await fetch(url, {
        headers,
        method: 'GET',
        mode: 'cors',
      })

      const data = await toJson(response)
      this.setState({ data })
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    const { children } = this.props
    const { data } = this.state

    return children(data)
  }
}

LoadData.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default LoadData