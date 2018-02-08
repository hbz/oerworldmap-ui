/* global document */
import React from 'react'
import DropdownMenu from './DropdownMenu'
import { triggerClick } from '../common'

import '../styles/components/DropdownButton.pcss'

class DropdownButton extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      showing : false
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
    if (e.target !== this.dropdownButton)
      this.setState({showing:false})
  }

  render() {
    return (
      <div className="DropdownButton">
        <i
          role="button"
          tabIndex="0"
          className="fa fa-gear"
          onClick={() => {this.setState({showing:!this.state.showing})}}
          onKeyDown={triggerClick}
          ref={el => this.dropdownButton = el}
        >
          { this.state.showing &&
            <DropdownMenu />
          }
        </i>
      </div>
    )
  }
}

export default DropdownButton