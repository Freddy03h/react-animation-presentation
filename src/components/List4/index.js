import React, { Component } from 'react'
import FlipMove from 'react-flip-move'

import ListItem from '../ListItem'
import './index.css'

class List4 extends Component {

  render () {
    return (
      <div className="List4">
        <FlipMove
          easing="ease-in"
          duration={300}
          enterAnimation={{
            from: {
              transform: 'scale(0.3)',
              opacity: 0,
            },
            to: {
              transform: 'scale(1)',
              opacity: 1,
            }
          }}
          leaveAnimation={{
            from: {
              transform: 'scale(1)',
              opacity: 1,
            },
            to: {
              transform: 'scale(0.3)',
              opacity: 0,
            }
          }}
        >
        {
          this.props.dataList.map((data, index) =>
            <ListItem {...data} />
          )
        }
        </FlipMove>
      </div>
    )
  }
}

export default List4
