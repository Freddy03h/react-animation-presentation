import React, { Component } from 'react'
import ReactTransitionGroup from 'react-addons-transition-group'

import ListItem from '../ListItem'
import './index.css'

const ListItemHeight = 128

class ListItemWrapper extends Component {

  componentWillReceiveProps(nextProps) {
    if(this.props.index !== nextProps.index) {
      const el = this.refs.root
      el.animate([
        {transform: `translateY(${ListItemHeight * (this.props.index - nextProps.index)}px)`},
        {transform: 'translateY(0)'},
      ], {
        duration: 300,
        ease: 'ease-in',
      })
    }
  }

  componentWillEnter (done) {
    const el = this.refs.root

    const animation = el.animate([
      {opacity: 0, transform: 'scale(0.3)'},
      {opacity: 1, transform: 'scale(1)'},
    ], {
      duration: 300,
    })
    animation.onfinish = done
  }


  componentWillLeave (done) {
    const el = this.refs.root

    const animation = el.animate([
      {opacity: 1, transform: 'scale(1)'},
      {opacity: 0, transform: 'scale(0.3)'},
    ], {
      duration: 300,
    })
    animation.onfinish = done
  }

  render() {
    return(
      <div ref="root">
        {this.props.children}
      </div>
    )
  }
}

class List2 extends Component {

  render () {
    return (
      <div className="List2">
        <ReactTransitionGroup>
        {
          this.props.dataList.map((data, index) =>
            <ListItemWrapper key={data.key} index={index}>
              <ListItem {...data} />
            </ListItemWrapper>
          )
        }
        </ReactTransitionGroup>
      </div>
    )
  }
}

export default List2
