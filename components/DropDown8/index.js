import React, { Component } from 'react'
import FlipMove from 'react-flip-move'

import Button from '../Button'
import './index.css'

class DropDown8 extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  toggleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }


  render() {

    return (
      <div className="DropDown8">
        <div onClick={this.toggleOpen}>
          <Button active={this.state.isOpen}>
            {this.props.label}
          </Button>
        </div>
        <FlipMove
          easing="ease-in"
          duration={100}
          enterAnimation={{
            from: {
              transform: 'scale(0.9)',
              opacity: 0,
            },
            to: {
              transform: 'scale(1)',
              opacity: 1,
            }
          }}
          leaveAnimation={{
            from: {
              transform: 'scale(1)',
              opacity: 1,
            },
            to: {
              transform: 'scale(0.9)',
              opacity: 0,
            }
          }}
        >
          {
            this.state.isOpen && <div className="DropDown8__Content" key="dropdown-content">
              {this.props.children}
            </div>
          }
        </FlipMove>
      </div>
    )
  }
}

export default DropDown8
