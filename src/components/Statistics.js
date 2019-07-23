import React from 'react'
import PropTypes from 'prop-types'
import Link from './Link'
import withI18n from './withI18n'
import '../styles/components/Statistics.pcss'

const Statistics = ({ translate }) => (
  <div className="Statistics">
    <h1 className="title">{translate('Global Statistics')}</h1>
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

Statistics.propTypes = {
  translate: PropTypes.func.isRequired,
}

export default withI18n(Statistics)
