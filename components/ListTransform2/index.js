import React, { Component } from 'react'
import classNames from 'classnames'

import FlipMove from 'react-flip-move'
import ItemTransform2 from '../ItemTransform2'

import { prophecyList } from '../../data'
import './index.css'

class ListTransform2 extends Component {
  constructor (props) {
    super(props)
    this.state = {
      itemOpened: null,
    }
  }

  openItem = (key) => {
    this.setState({ itemOpened: key === this.state.itemOpened ? null : key })
  }

  render() {
    return (
      <FlipMove
        className="ListTransform2"
        easing="ease-in"
        duration={300}
      >
       {
          prophecyList.map((volume) => {
            return (
              <ItemTransform2
                key={volume.key}
                onClick={this.openItem.bind(this, volume.key)}
                opened={this.state.itemOpened === volume.key}
                volume={volume}
              />
            )
          })
       }
      </FlipMove>
    )
  }
}

export default ListTransform2
