import React from 'react'
import PropTypes from 'prop-types'

import Link from './Link'

import withI18n from './withI18n'

import '../styles/components/Calendar.pcss'

class Calendar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      showPastEvents: false
    }
  }

  render() {
    const { translate, moment, entries } = this.props
    return (
      <ul ref={node => this.calendarRef = node} className="Calendar">
        <label>
          <input
            type="radio"
            name="togglePastEvents"
            defaultChecked
            onChange={() => this.setState({showPastEvents: !this.state.showPastEvents})}
          />
          &nbsp;{translate('calendar.show.upcoming')}
          &nbsp;({entries
            .filter(month => moment(month.key).diff(moment().startOf('month')) >= 0)
            .reduce((count, month) => count + month['top_hits#about.@id'].hits.hits.length, 0)
          })
        </label>
        &nbsp;
        <label>
          <input
            type="radio"
            name="togglePastEvents"
            onChange={() => this.setState({showPastEvents: !this.state.showPastEvents})}
          />
          &nbsp;{translate('calendar.show.past')}
          &nbsp;({entries
            .filter(month => moment(month.key).diff(moment().startOf('month')) < 0)
            .reduce((count, month) => count + month['top_hits#about.@id'].hits.hits.length, 0)
          })
        </label>
        {entries.map(month => (
          <li
            key={month.key}
            className={`monthBlock ${
              this.state.showPastEvents
                || moment(month.key).diff(moment().startOf('month')) >= 0
                ? '' : 'hidden'}`}
          >
            <h4>{moment(month.key_as_string).format('MMMM YYYY')}</h4>
            <ul>
              {month['top_hits#about.@id'].hits.hits.map(hit => hit._source.about).map(event => (
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
                      {translate(event.name)}{event.alternateName ? ` (${translate(event.alternateName)})`: ''}<br />
                      {event.location && event.location.address &&
                        <span className="subtitle">
                          {moment(event.startDate).format('M') === moment(event.endDate).format('M')
                            ? moment(event.startDate).format('D')
                            : moment(event.endDate).format('D MMM')
                          } &ndash; {moment(event.endDate).format('D MMM')}
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
  }
}


Calendar.propTypes = {
  translate: PropTypes.func.isRequired,
  moment: PropTypes.func.isRequired,
  entries: PropTypes.arrayOf(PropTypes.any).isRequired
}

export default withI18n(Calendar)
