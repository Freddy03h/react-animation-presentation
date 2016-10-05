import React, { Component } from 'react'

class OpenBehavior extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }

  toggleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return React.cloneElement(this.props.children, {
      opened: this.state.isOpen,
      onClick: this.toggleOpen,
    })
  }
}

export default OpenBehavior
