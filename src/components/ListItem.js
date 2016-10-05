import React, { Component } from 'react'

class ListItem extends Component {

  render () {
    const {title, subtitle, img} = this.props
    return (
      <div style={Object.assign({}, style['ListItem'], this.props.style)}>
        <div>
          <div style={style['ListItem__Title']}>{title}</div>
          <div style={style['ListItem__Subtitle']}>{subtitle}</div>
        </div>
        <img src={img} />
      </div>
    )
  }
}

const style = {
  'ListItem': {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 14,
    boxSizing: 'border-box',
    margin: 12,

    backgroundColor: '#FFFFFF',
    //border: 'solid #D8D8D8 1px',
    borderRadius: 4,
    boxShadow: '0 1px 10px rgba(0, 0, 0, .2)',
    color: '#555555',
    fontSize: 22,
    fontFamily: 'BlinkMacSystemFont, sans-serif',
    textAlign: 'left',
    lineHeight: '1.6em',
    
    //transition: 'opacity 200ms ease-out',
    cursor: 'pointer',
  },
  'ListItem__Title': {
    fontSize: 26,
  },
  'ListItem__Subtitle': {
    
  },
}

export default ListItem
