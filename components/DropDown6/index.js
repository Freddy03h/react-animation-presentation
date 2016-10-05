import React, { Component } from 'react'
import { Motion, spring } from 'react-motion'

import Button from '../Button'
import './index.css'

const springConfig = {stiffness: 410, damping: 18}

class DropDown6 extends Component {
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
      <div className="DropDown6">
        <div onClick={this.toggleOpen}>
          <Button active={this.state.isOpen}>
            {this.props.label}
          </Button>
        </div>

        <Motion
          defaultStyle={{scale: 0.9, opacity: 0}}
          style={{
            scale: spring(this.state.isOpen ? 1 : 0.9, springConfig),
            opacity: spring(this.state.isOpen ? 1 : 0, springConfig),
          }}
        >
          { ({opacity, scale}) =>
            <div
              className="DropDown6__Content"
              style={{
                opacity,
                transform: `scale(${scale})`,
                visibility: opacity ? 'visible' : 'hidden'
              }}>
              {this.props.children}
            </div>
          }
        </Motion>

      </div>
    )
  }
}

export default DropDown6
