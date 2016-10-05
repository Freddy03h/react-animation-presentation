import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import ListItem from '../ListItem'
import './index.css'

class List1 extends Component {

  render () {
    return (
      <div className="List1">
        <ReactCSSTransitionGroup
          transitionName="List1__Transiton"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
        {
          this.props.dataList.map((data) =>
            <ListItem {...data} />
          )
        }
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

export default List1
