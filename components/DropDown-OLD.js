import React, { Component } from 'react'
import Button from './Button'

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
      <div style={style['DropDown']}>
        <div onClick={this.toggleOpen}>
          <Button active={this.state.isOpen}>
            {this.props.label}
          </Button>
        </div>
        <div style={Object.assign({},
          style['DropDown__Content'],
          this.state.isOpen && style['DropDown__Content--open']
        )}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

const style = {
  'DropDown': {
    display: 'inline-block',
    position: 'relative',
  },
  'DropDown__Content': {
    position: 'absolute',
    visibility: 'hidden',
    marginTop: 5,
    opacity: 0,
    zIndex: 10,

    transform: 'scale(.9)',
    transformOrigin: '0% 0%',

    transitionDelay: '0ms, 0ms, 100ms',
    transitionDuration: '100ms, 100ms, 0ms',
    transitionProperty: 'opacity, transform, visibility',
    transitionTimingFunction: 'ease-in, ease-in, linear',
    
    backgroundColor: '#FFF',
    borderRadius: 3,
    boxShadow: '0 2px 6px rgba(0, 0, 0, .35), 0 0 1px rgba(0, 0, 0, .25)',
  },
  'DropDown__Content--open': {
    opacity: 1,
    transform: 'scale(1)',
    transitionDelay: '0ms',
    visibility: 'visible',
    overflow: 'hidden',
  },
}

export default DropDown2
