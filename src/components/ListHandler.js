import React, { Component } from 'react'

import Button from './Button'
import { mangaList } from '../data'

class ListHandler extends Component {
  constructor (props) {
    super(props)
    this.state = {
      dataList: mangaList.slice(0, 3),
    }
  }

  suffle = () => {
    this.setState({
      dataList: this.state.dataList.concat().sort(() => Math.random() > 0.5 ? -1 : 1)
    })
  }

  add = () => {
    const newDataList = this.state.dataList.concat()
    newDataList.splice(~~(Math.random() * newDataList.length+1), 0, mangaList[newDataList.length])

    if(this.state.dataList.length < mangaList.length) {
      this.setState({
        dataList: newDataList
      })
    }
  }

  remove = () => {
    if(this.state.dataList.length > 0) {
      const last = mangaList[this.state.dataList.length-1]
      this.setState({
        dataList: this.state.dataList.filter((data) => data.key !== last.key)
      })
    }
  }

  render () {
    return (
      <div style={style['ListHandler']}>
        <div>
          {
            React.cloneElement(this.props.children, {dataList: this.state.dataList})
          }
        </div>
        <div>
          <Button
            onClick={this.suffle}
            style={style['ListHandler__Button']}
          >
            Shuffle
          </Button>
          <Button
            onClick={this.add}
            disabled={this.state.dataList.length >= mangaList.length}
            style={style['ListHandler__Button']}
          >
            Add
          </Button>
          <Button
            onClick={this.remove}
            disabled={this.state.dataList.length <= 0}
            style={style['ListHandler__Button']}
          >
            Remove
          </Button>
        </div>
      </div>
    )
  }
}

const style = {
  'ListHandler': {
    display: 'flex',
    width: 360,
    margin: '0 auto',
  },
  'ListHandler__Button': {
    margin: 12,
    display: 'block',
    width: '100%',
  },
}

export default ListHandler
