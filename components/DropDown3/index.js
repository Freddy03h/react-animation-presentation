import React, { Component } from 'react'
import ReactTransitionGroup from 'react-addons-transition-group'

import Button from '../Button'
import './index.css'

class DropDownContent extends Component {
  componentWillEnter (done) {
    const el = this.refs.root

    el.addEventListener('transitionend', (e) => {
      if(e.propertyName !== 'opacity') return

      el.classList.remove('DropDown3__Transiton-enter')
      el.classList.remove('DropDown3__Transiton-enter-active')
      done()
    })

    requestAnimationFrame(() => {
      el.classList.add('DropDown3__Transiton-enter')

      requestAnimationFrame(() => {
        el.classList.add('DropDown3__Transiton-enter-active')
      })
    })
  }


  componentWillLeave (done) {
    const el = this.refs.root

    el.addEventListener('transitionend', (e) => {
      if(e.propertyName !== 'opacity') return

      el.classList.remove('DropDown3__Transiton-leave')
      el.classList.remove('DropDown3__Transiton-leave-active')
      done()
    })

    requestAnimationFrame(() => {
      el.classList.add('DropDown3__Transiton-leave')

      requestAnimationFrame(() => {
        el.classList.add('DropDown3__Transiton-leave-active')
      })
    })
  }

  render() {
    return(
      <div className="DropDown3__Content" ref="root">
        {this.props.children}
      </div>
    )
  }
}

class DropDown3 extends Component {
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
      <div className="DropDown3">
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

export default DropDown3
