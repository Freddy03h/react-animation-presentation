import React, { Component } from 'react'
import classNames from 'classnames'

import './index.css'

const playElement = (element, firstPosition) => {
  if (!element) {
    return
  }
  const lastPosition = element.getBoundingClientRect()

  let transformInvert, opacityInvert
  if(firstPosition) {
    transformInvert = `
      translateX(${firstPosition.left - lastPosition.left}px)
      translateY(${firstPosition.top - lastPosition.top}px)
      scaleX(${firstPosition.width / lastPosition.width})
      scaleY(${firstPosition.height / lastPosition.height})
    `
    opacityInvert = 1
  } else {
    transformInvert = 'initial'
    opacityInvert = 0
  }

  element.animate([
      {transform: transformInvert, opacity: opacityInvert},
      {transform: 'initial', opacity: 1},
    ], {
      duration: 300,
      ease: 'ease-in',
    })
}

class ItemTransform1 extends Component {
  constructor (props) {
    super(props)
    this.state = {
      previousBoundingClientRect: {},
    }
  }

  componentWillReceiveProps() {
    let previousBoundingClientRect = {}

    Object.keys(this.refs).forEach((key) => {
      let el = this.refs[key]
      previousBoundingClientRect[key] = el ? el.getBoundingClientRect() : null
    })

    this.setState({
      previousBoundingClientRect
    })
  }

  componentDidUpdate() {
    const allKeys =  [...new Set(Object.keys(this.state.previousBoundingClientRect).concat(Object.keys(this.refs)))]

    allKeys.forEach((key) => {
      playElement(this.refs[key], this.state.previousBoundingClientRect[key])
    })
  }

  render() {
    const classNameRoot = classNames(
      'ItemTransform1',
      { 'ItemTransform1--open': this.props.opened === true },
    )

    return (
      <div
        className={classNameRoot}
        onClick={this.props.onClick}
      >
        <img
          className="ItemTransform1__Img"
          src="http://ecx.images-amazon.com/images/I/51qnheKFVwL._SL270_.jpg"
          ref="image"
        />
        {
          this.props.opened &&
            <div className="ItemTransform1__Body" ref="body">
              <p className="ItemTransform1__Title1">Prophecy</p>
              <p className="ItemTransform1__Title2">Tome 1</p>
            </div>
        }
        <div className="ItemTransform1__Layer" ref="layer"></div>
      </div>
    )
  }
}

export default ItemTransform1
