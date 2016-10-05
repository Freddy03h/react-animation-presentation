import React, { Component } from 'react'

class Button extends Component {

  render () {
    return (
      <button
        style={Object.assign({},
          style['Button'],
          this.props.active && style['Button--active'],
          this.props.disabled && style['Button--disabled'],
          this.props.style,
        )}
        onClick={this.props.onClick}
        disabled={this.props.disabled}
      >
        {this.props.children}
      </button>
    )
  }
}

const style = {
  'Button': {
    display: 'inline-block',
    height: 32,
    padding: '0 18px',

    backgroundColor: '#FFFFFF',
    border: 'solid #D8D8D8 1px',
    borderRadius: 3,
    boxShadow: '0 1px 1px rgba(0, 0, 0, .2)',
    color: '#555555',
    fontSize: 17,
    fontFamily: 'BlinkMacSystemFont, sans-serif',
    outline: 0,
    
    transition: 'opacity 200ms ease-out',
    cursor: 'pointer',
  },
  'Button--active': {
    backgroundColor: '#F9F9F9',
    boxShadow: 'inset 0 2px 2px 0 rgba(0, 0, 0, .1)',
    color: '#268bd2',
  },
  'Button--disabled': {
    opacity: .5,
    cursor: 'not-allowed',
  },
}

export default Button
