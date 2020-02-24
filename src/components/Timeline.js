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
    this.newActivity = this.newActivity.bind(this)
  }

  componentDidMount() {
    const { emitter } = this.props
    const { entries } = this.state

    entries.length && localStorage.setItem('lastActivity', entries[0].id)

    emitter.emit('clearActivity')
    emitter.on('newActivity', this.newActivity)
  }

  componentWillUnmount() {
    const { emitter } = this.props
    emitter.off('newActivity', this.newActivity)
  }

  newActivity(activities) {
    const { entries } = this.state
    this.setState({ entries: activities.concat(entries) })
  }

  render() {
    const { translate } = this.props
    const { entries } = this.state

    return (
      <div className="Timeline">
        <h2 className="title">
          {translate('Timeline.activity')}
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
            translate('Timeline.noEntries')
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
