/* global localStorage */
import React from 'react'
import PropTypes from 'prop-types'
import withI18n from './withI18n'
import withEmitter from './withEmitter'
import FullModal from './FullModal'
import Link from './Link'
import TimelineBlock from './TimelineBlock'

class Timeline extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      entries: props.entries
    }
  }

  componentDidMount() {

    const entries = this.state.entries
    entries.length && localStorage.setItem('lastActivity', entries[0].id)

    this.props.emitter.emit('clearActivity')
    this.props.emitter.on('newActivity', (activities) => {
      this.setState({entries: activities.concat(entries)})
    })
  }

  render() {
    const entries = this.state.entries
    const translate = this.props.translate
    return (
      <FullModal closeLink={Link.home}>
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
            translate("No entries")
          )}
        </div>
      </FullModal>
    )
  }
}


Timeline.propTypes = {
  translate: PropTypes.func.isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
  entries: PropTypes.arrayOf(PropTypes.any).isRequired,
}

export default withEmitter(withI18n(Timeline))