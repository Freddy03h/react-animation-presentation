import React, { Component } from 'react'
import classNames from 'classnames'

import Button from '../Button'
import './index.css'

class DropDown1 extends Component {
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
    const classNameContent = classNames(
      'DropDown1__Content',
      { 'DropDown1__Content--open': this.state.isOpen === true },
    )

    return (
      <div className='DropDown1'>
        <div onClick={this.toggleOpen}>
          <Button active={this.state.isOpen}>
            {this.props.label}
          </Button>
        </div>
        <div className={classNameContent}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default DropDown1
