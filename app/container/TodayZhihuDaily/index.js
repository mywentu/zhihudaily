import React, { Component } from 'react'
import Slide from '../../component/Slide/'
class TodayZhihuDaily extends Component {
  constructor(props){
    super(props)
    this.state = {
      isFetching: true
    }
  }
  componentWillMount() {
    this.props.fetchHandle()
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      isFetching: nextProps.latest.isFetching
    })
  }
  render(){
    if(this.state.isFetching) {
      return(
        <div>
          <div>asdada</div>
        </div>
      )
    }else {
      return (
        <Slide />
      )
    }

  }
}
export default TodayZhihuDaily;
