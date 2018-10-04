import React from 'react'
import PropTypes from 'prop-types'
import withI18n from './withI18n'
import withEmitter from './withEmitter'

import '../styles/components/Timeline.pcss'
import TimelineBlock from './TimelineBlock'

class Timeline extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      entries: props.entries
    }
  }

  componentDidMount() {

    // TODO: SET COUNTER TO 0
    // this.props.emitter.emit('clearActivity')

    this.props.emitter.on('newActivity', (activities) => {
      this.setState({entries: activities.concat(this.state.entries)}, () => {
        // localStorage.setItem('lastActivity', this.state.entries[0].id);
        // window.lastActivity = this.state.entries[0].id
      })
    })
  }

  render() {
    const entries = this.state.entries
    const translate = this.props.translate
    return (
      <div className="Timeline">
        <div className="timelineContainer">
          <section className="timelineContainerMain">
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

          </section>
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