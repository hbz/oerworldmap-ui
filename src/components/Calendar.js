import React from 'react'
import PropTypes from 'prop-types'

import Link from './Link'

import withI18n from './withI18n'

import '../styles/components/Calendar.pcss'

const Calendar = ({entries, moment, translate}) => (
  <ul className="Calendar">
    {entries.map(month => (
      <li key={month.key} className="monthBlock">
        <h4>{moment(month.key_as_string).format('MMMM YYYY')}</h4>
        <ul>
          {month['about.@id'].hits.hits.map(hit => hit._source.about).reverse().map(event => (
            <li key={event['@id']}>
              <Link href={event['@id']}>
                <div className="sheet">
                  <div>
                    {moment(event.startDate).format('D')}
                  </div>
                  <div className="month">
                    {moment(event.startDate).format('MMM')}
                  </div>
                </div>
                <span>
                  {translate(event.name)}<br />
                  {moment(event.startDate).format('M') === moment(event.endDate).format('M')
                    ? moment(event.startDate).format('D')
                    : moment(event.endDate).format('D MMM')
                  } - {moment(event.endDate).format('D MMM')}
                  {event.location && event.location.address &&
                    <span className="subtitle">
                      &nbsp;&mdash;&nbsp;
                      {event.location.address.addressLocality &&
                        event.location.address.addressLocality.concat(',')
                      }
                      &nbsp;{event.location.address.addressCountry}
                    </span>
                  }
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </li>
    ))}
  </ul>
)

Calendar.propTypes = {
  translate: PropTypes.func.isRequired,
  moment: PropTypes.func.isRequired,
  entries: PropTypes.arrayOf(PropTypes.any).isRequired
}

export default withI18n(Calendar)
