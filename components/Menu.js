import React, { Component } from 'react'

class MenuItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isHover: false
    }
  }

  toggleHover = () => {
    this.setState({isHover: !this.state.isHover})
  }

  render () {
    return (
      <div
        style={Object.assign({},
          style['MenuItem'],
          this.state.isHover && style['MenuItem--hover'],
        )}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
      >
        {this.props.children}
      </div>
    )
  }
}

class Menu extends Component {

  render () {
    return (
      <div style={style['Menu']}>
        <MenuItem>Compte</MenuItem>
        <MenuItem>Paramètres</MenuItem>
        <MenuItem>Déconnexion</MenuItem>
      </div>
    )
  }
}

const style = {
  'Menu': {
    padding: '8px 0',
    minWidth: 200,
    fontSize: 'medium',
  },
  'MenuItem': {
    padding: '8px 18px',    
    width: '100%',
    boxSizing: 'border-box',
    textAlign: 'left',
    cursor: 'pointer',
  },
  'MenuItem--hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
}

export default Menu
