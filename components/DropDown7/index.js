import React, { Component } from 'react'
import { TransitionMotion, spring } from 'react-motion'

import Button from '../Button'
import './index.css'

const springConfig = {stiffness: 410, damping: 18}

const willEnter = () => ({
  opacity: 0,
  scale: 0.9,
})

const willLeave = () => ({
  opacity: spring(0, springConfig),
  scale: spring(0.9, springConfig),
})

class DropDown7 extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  toggleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  getStyles = () => {
    if(!this.state.isOpen) {
      return []
    }

    return [{
      style:  {
        opacity: spring(1, springConfig),
        scale: spring(1, springConfig),
      },
      key: 'dropdown-content',
    }]
  }

  render() {

    return (
      <div className="DropDown7">
        <div onClick={this.toggleOpen}>
          <Button active={this.state.isOpen}>
            {this.props.label}
          </Button>
        </div>

        <TransitionMotion
          styles={ this.getStyles() }
          willEnter={ willEnter }
          willLeave={ willLeave }
        >
          { (interpolatedStyles) =>
              <div>
                { interpolatedStyles.map(({style, key}) =>
                  <div
                    className="DropDown7__Content"
                    key={key}
                    style={{
                      opacity: style.opacity,
                      transform: `scale(${style.scale})`,
                    }}
                  >
                    {this.props.children}
                  </div>
                )}
              </div>
          }
        </TransitionMotion>

      </div>
    )
  }
}

export default DropDown7
