import React from 'react'
import PropTypes from 'prop-types'
import translate from './translate'
import withEmitter from './withEmitter'
import Link from './Link'

import '../styles/ActionButtons.pcss'

const triggerClick = (e) => {
  if (e.keyCode === 32) {
    e.target.click()
  }
}

class ActionButtons extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      showAddMenu: false
    }
  }

  componentDidMount() {
    this.props.emitter.on("click", (e) => {
      if (e.target !== this.addBtn)
        this.setState({showAddMenu:false})
    })
  }

  render() {
    return (
      <div className="ActionButtons">
        <div
          title={this.props.translate('ActionButtons.addEntry')}
          tabIndex="0"
          role="button"
          onClick={() => this.setState({showAddMenu:!this.state.showAddMenu})}
          onKeyDown={triggerClick}
          ref={el => this.addBtn = el}
        >
          <i className="fa fa-plus" />

          <ul className={this.state.showAddMenu ? '' : 'noDisplay'}>
            <li>
              <Link href="#addOrganization">
                + {this.props.translate('Organization')} <i className="fa fa-users" />
              </Link>
            </li>

            <li>
              <Link href="#addService">
                + {this.props.translate('Service')} <i className="fa fa-desktop" />
              </Link>
            </li>

            <li>
              <Link href="#addProject">
                + {this.props.translate('Project')} <i className="fa fa-gears" />
              </Link>
            </li>

            <li>
              <Link href="#addStory">
                + {this.props.translate('Story')} <i className="fa fa-comment" />
              </Link>
            </li>

            <li>
              <Link href="#addEvent">
                + {this.props.translate('Event')} <i className="fa fa-calendar" />
              </Link>
            </li>

            <li>
              <Link href="#addPublication">
                + {this.props.translate('Publication')} <i className="fa fa-book" />
              </Link>
            </li>

            <li>
              <Link href="#addTool">
                + {this.props.translate('Tool')} <i className="fa fa-folder" />
              </Link>
            </li>

          </ul>
        </div>

        <Link href="/user/newsletter" title={this.props.translate('ActionButtons.subscribeToNewsletter')}>
          <i className="fa fa-envelope" />
        </Link>

        <Link href="/aggregation/" title={this.props.translate('ActionButtons.statistics')}>
          <i className="fa fa-pie-chart" />
        </Link>

        <Link href="/feed/" title={this.props.translate('ActionButtons.recentAdditions')}>
          <i className="fa fa-rss" />
        </Link>
        <Link href="#liked" title={this.props.translate('ActionButtons.liked')}>
          <i className="fa fa-thumbs-up" />
        </Link>
        <Link href="/resource/?filter.about.objectIn.@type=LighthouseAction&sort=like_count:DESC" title={this.props.translate('ActionButtons.lighthouse')}>
          <i className="fa fa-lightbulb-o" />
        </Link>
      </div>
    )
  }
}

ActionButtons.propTypes = {
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
  translate: PropTypes.func.isRequired
}

export default withEmitter(translate(ActionButtons))
