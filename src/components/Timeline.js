/* global localStorage */
import React from 'react'
import PropTypes from 'prop-types'
import withI18n from './withI18n'
import withEmitter from './withEmitter'
import TimelineBlock from './TimelineBlock'

class Timeline extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      entries: props.entries,
    }
  }

  componentDidMount() {
    const { emitter } = this.props
    const { entries } = this.state

    entries.length && localStorage.setItem('lastActivity', entries[0].id)

    emitter.emit('clearActivity')
    emitter.on('newActivity', (activities) => {
      this.setState({ entries: activities.concat(entries) })
    })
  }

  render() {
    const { translate } = this.props
    const { entries } = this.state

    return (
      <div className="Timeline">
        <h2 className="title">
          {translate('Activity')}
        </h2>
        <div className="Timeline">
          {entries ? (
            entries.map(entry => (
              <TimelineBlock
                key={`${entry.id}-${entry.action.time}`}
                withBorder
                entry={entry}
              />
            ))
          ) : (
            translate('No entries')
          )}
        </div>
      </div>
    )
  }
}


Timeline.propTypes = {
  translate: PropTypes.func.isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
  entries: PropTypes.arrayOf(PropTypes.any).isRequired,
}

export default withEmitter(withI18n(Timeline))
