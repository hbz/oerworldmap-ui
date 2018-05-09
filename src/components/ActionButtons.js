/* global document */
import React from 'react'
import PropTypes from 'prop-types'
import withI18n from './withI18n'
import Link from './Link'
import Icon from './Icon'
import { triggerClick } from '../common'
import expose from '../expose'

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
        {expose('groupAdmin', this.props.user) &&
          <Link href="/user/groups" title={this.props.translate('ClientTemplates.app.groups')}>
            <i className="fa fa-gear" />
          </Link>
        }

        {expose('addEntry', this.props.user) &&
          <div
            title={this.props.translate('ClientTemplates.app.add')}
            tabIndex="0"
            role="button"
            onClick={() => this.setState({showAddMenu:!this.state.showAddMenu})}
            onKeyDown={triggerClick}
            ref={el => this.addBtn = el}
          >
            <i className="fa fa-plus" />

            <ul className={this.state.showAddMenu ? '' : 'noDisplay'}>
              {['Organization', 'Service', 'Action', 'Article', 'Event', 'WebPage', 'Product'].map(type => (
                <li key={type}>
                  <Link href={`?add=${type}`}>
                    + {this.props.translate(type)} <Icon type={type} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        }

        <Link href="/aggregation/" title={this.props.translate('ClientTemplates.app.statistics')}>
          <i className="fa fa-pie-chart" />
        </Link>

        <Link href="/feed/" title={this.props.translate('ClientTemplates.app.recentAdditions')}>
          <i className="fa fa-rss" />
        </Link>
        <Link
          href="?filter.about.objectIn.@type=LikeAction&sort=like_count:DESC"
          title={this.props.translate('ClientTemplates.app.likes')}
        >
          <i className="fa fa-thumbs-up" />
        </Link>
        <Link
          className="lighthouse"
          href="/resource/?filter.about.objectIn.@type=LighthouseAction&sort=lighthouse_count:DESC"
          title={this.props.translate('ClientTemplates.app.lighthouses')}
        >
          <span>Lighthouse</span>
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
