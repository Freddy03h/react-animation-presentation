import React, { Component } from 'react'
import ReactTransitionGroup from 'react-addons-transition-group'
import { TweenLite } from "gsap"

import Button from '../Button'
import './index.css'

class DropDownContent extends Component {
  componentWillEnter (done) {
    const el = this.refs.root
    TweenLite.fromTo(el, 0.1, {scale: 0.9, opacity: 0}, {scale: 1, opacity: 1, onComplete: done})
  }


  componentWillLeave (done) {
    const el = this.refs.root
    TweenLite.fromTo(el, 0.1, {scale: 1, opacity: 1}, {scale: 0.9, opacity: 0, onComplete: done})
  }

  render() {
    return(
      <div className="DropDown4__Content" ref="root">
        {this.props.children}
      </div>
    )
  }
}

class DropDown4 extends Component {
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
      <div className="DropDown4">
        <div onClick={this.toggleOpen}>
          <Button active={this.state.isOpen}>
            {this.props.label}
          </Button>
        </div>
        <ReactTransitionGroup>
        {
          this.state.isOpen && <DropDownContent key="dropdown-content">
            {this.props.children}
          </DropDownContent>
        }
        </ReactTransitionGroup>
      </div>
    )
  }
}

export default DropDown4
