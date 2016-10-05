import React, { Component } from 'react'
import { TransitionMotion, spring } from 'react-motion'

import ListItem from '../ListItem'
import './index.css'

const springConfig = {stiffness: 410, damping: 18}

const willEnter = () => ({
  opacity: 0,
  scale: 0.9,
})

const willLeave = () => ({
  opacity: spring(0, springConfig),
  scale: spring(0.9, springConfig),
})

class List3 extends Component {

  getStyles = (prevStyles) => {
    return this.props.dataList.map((data, index) => ({
      data,
      key: data.key,
      style:  {
        opacity: spring(1, springConfig),
        scale: spring(1, springConfig),
      },
    }))
  }

  render () {
    return (
      <div className="List3">
        <TransitionMotion
          styles={ this.getStyles }
          willEnter={ willEnter }
          willLeave={ willLeave }
        >
          { (interpolatedStyles) =>
              <div>
                { interpolatedStyles.map(({data, style, key}) =>
                  <ListItem
                    {...data}
                    style={{
                      opacity: style.opacity,
                      transform: `scale(${style.scale})`,
                    }}
                  />
                )}
              </div>
          }
        </TransitionMotion>
      </div>
    )
  }
}

export default List3
