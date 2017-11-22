import React from 'react'
import DropdownMenu from './DropdownMenu'

import '../styles/DropdownButton.pcss'

class DropdownButton extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      showing : false
    }
  }

  render() {
    return (
      <div className="DropdownButton">
        <i
          role="button"
          tabIndex="0"
          className="fa fa-gear"
          onClick={() => {this.setState({showing:!this.state.showing})}}
          onKeyDown={null}
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