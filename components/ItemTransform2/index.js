import React, { Component } from 'react'
import classNames from 'classnames'
import { FlipMoveItem } from '../../lib/react-flip-move'

import './index.css'

class ItemTransform2 extends Component {
  constructor (props) {
    super(props)
    this.state = {
      previousBoundingClientRect: {},
    }
  }

  render() {
    const { volume } = this.props
    const classNameRoot = classNames(
      'ItemTransform2',
      volume.key,
      { 'ItemTransform2--open': this.props.opened === true },
    )

    return (
      <FlipMoveItem
        className={classNameRoot}
        onClick={this.props.onClick}
        easing="ease-in"
        duration={300}
        enterAnimation={{
          from: {
            transform: 'translate(-195px) scale(0.74)',
            opacity: 0,
          },
          to: {
            transform: 'initial',
            opacity: 1,
          }
        }}
        leaveAnimation={{
          from: {
            transform: 'initial',
            opacity: 1,
          },
          to: {
            transform: 'translate(-195px) scale(0.74)',
            opacity: 0,
          }
        }}
      >
        <img
          className="ItemTransform2__Img"
          src={ volume.img }
          key="image"
        />
        {
          this.props.opened &&
            <div className="ItemTransform2__Body" key="body">
              <p className="ItemTransform2__Title1">{ volume.title }</p>
              <p className="ItemTransform2__Title2">{ volume.subtitle }</p>
              <p className="ItemTransform2__Resume">{ volume.resume }</p>
            </div>
        }
        <div className="ItemTransform2__Layer" key="layer"></div>
      </FlipMoveItem>
    )
  }
}

export default ItemTransform2
