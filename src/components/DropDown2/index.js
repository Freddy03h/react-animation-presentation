import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import Button from '../Button'
import './index.css'

class DropDown2 extends Component {
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
      <div className="DropDown2">
        <div onClick={this.toggleOpen}>
          <Button active={this.state.isOpen}>
            {this.props.label}
          </Button>
        </div>
        <ReactCSSTransitionGroup
          transitionName="DropDown2__Transiton"
          transitionEnterTimeout={100}
          transitionLeaveTimeout={100}
        >
        {
          this.state.isOpen && <div className="DropDown2__Content" key="dropdown-content">
            {this.props.children}
          </div>
        }
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

export default DropDown2
