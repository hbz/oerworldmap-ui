/* global window */
import React from 'react'
import PropTypes from 'prop-types'
import Link from './Link'
import withI18n from './withI18n'
import withEmitter from './withEmitter'
import { getURL } from '../common'
import '../styles/components/Statistics.pcss'

// const charts = [
//   "sterms#about.@type",
//   "sterms#about.primarySector.@id",
//   "sterms#about.secondarySector.@id",
//   "sterms#about.isFundedBy.isAwardedBy.@id",
//   "sterms#about.availableChannel.availableLanguage",
//   "sterms#feature.properties.location.address.addressCountry",
//   "sterms#about.license.@id",
//   "sterms#about.about.@id",
//   "sterms#about.keywords",
//   "sterms#about.agent.location.address.addressCountry",
//   "sterms#about.audience.@id"
// ]

class Statistics extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { emitter } = this.props
    window.addEventListener("message", (msg) => {
      if (msg.data.filter && msg.data.key) {
        emitter.emit('navigate', getURL({
          path: '/resource/',
          params: {[`filter.${msg.data.filter}`] : msg.data.key}
        }))
      }
    }, false)
  }

  render() {
    const { translate } = this.props

    return (
      <div className="Statistics">
        <h1 className="title">{translate("Global Statistics")}</h1>
        {/* <div className="links">
          {charts.map(typed_aggregation => {
            const [, aggregation] = typed_aggregation.split('#')
            return (
              <Link key={aggregation} href={`#${aggregation}`}>
                {translate(aggregation)}
              </Link>
            )
          })}
        </div>
          */}
        <iframe
          title="aggregations"
          src="https://oerworldmap.org/kibana/app/kibana#/dashboard/1d8ea400-f246-11e8-84be-cde38ed05345?embed=true&_g=()"
          height="800"
          width="100%"
        />
        <br />
        <a href={Link.home} className="btn">{translate('close')}</a>
      </div>
    )
  }
}

Statistics.propTypes = {
  translate: PropTypes.func.isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default withEmitter(withI18n(Statistics))
