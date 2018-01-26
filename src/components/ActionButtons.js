/* global document */
import React from 'react'
import PropTypes from 'prop-types'
import withI18n from './withI18n'
import Link from './Link'
import { triggerClick } from '../common'

import '../styles/components/ActionButtons.pcss'

class ActionButtons extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      showAddMenu: false
    }

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    document.addEventListener("click", this.handleClick)
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClick)
  }

  handleClick(e) {
    if (e.target !== this.addBtn)
      this.setState({showAddMenu:false})
  }

  render() {
    return (

      <div className="ActionButtons">
        {this.props.user &&
          <Link href="/user/groups" title={this.props.translate('ActionButtons.groups')}>
            <i className="fa fa-gear" />
          </Link>
        }

        {this.props.user &&
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
        }

        <Link href="/aggregation/" title={this.props.translate('ActionButtons.statistics')}>
          <i className="fa fa-pie-chart" />
        </Link>

        <Link href="/feed/" title={this.props.translate('ActionButtons.recentAdditions')}>
          <i className="fa fa-rss" />
        </Link>
        <Link
          href="?filter.about.objectIn.@type=LikeAction&sort=like_count:DESC"
          title={this.props.translate('ActionButtons.liked')}
        >
          <i className="fa fa-thumbs-up" />
        </Link>
        <Link
          href="/resource/?filter.about.objectIn.@type=LighthouseAction&sort=like_count:DESC"
          title={this.props.translate('ActionButtons.lighthouse')}
        >
          <img
            src='/assets/icon_lighthouse_static_transparent.svg'
            className="lighthouse"
            alt="Lighthouse"
          />
        </Link>
      </div>
    )
  }
}

ActionButtons.propTypes = {
  translate: PropTypes.func.isRequired,
  user: PropTypes.objectOf(PropTypes.any)
}

ActionButtons.defaultProps = {
  user: null,
}

export default withI18n(ActionButtons)
