import React, { Component } from 'react'
import { browserHistory } from 'react-router'
export default class DetailZhihuDaily extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    return (
      <div onClick={browserHistory.goBack}>
        详情页
      </div>

    )
  }
}
