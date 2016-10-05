import React, { Component } from 'react'
import ReactTransitionGroup from 'react-addons-transition-group'

import Button from '../Button'
import './index.css'

class DropDownContent extends Component {
  componentWillEnter (done) {
    const el = this.refs.root

    const animation = el.animate([
      {opacity: 0, transform: 'scale(0.9)'},
      {opacity: 1, transform: 'scale(1)'},
    ], {
      duration: 100,
    })
    animation.onfinish = done
  }


  componentWillLeave (done) {
    const el = this.refs.root

    const animation = el.animate([
      {opacity: 1, transform: 'scale(1)'},
      {opacity: 0, transform: 'scale(0.9)'},
    ], {
      duration: 100,
    })
    animation.onfinish = done
  }

  render() {
    return(
      <div className="DropDown5__Content" ref="root">
        {this.props.children}
      </div>
    )
  }
}

class DropDown5 extends Component {
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
      <div className="DropDown5">
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

export default DropDown5
