import React, { Component } from 'react'
import CircularProgress from 'material-ui/CircularProgress'; //wait
import Slide from '../../component/Slide/'
import DailyList from '../../component/DailyList/'
class TodayZhihuDaily extends Component {
  constructor(props){
    super(props)
    this.state = {
      isFetching: true
    }
  }
  componentDidMount() {
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
           <CircularProgress />
        </div>
      )
    }else {
      return (
        <div>
          <Slide top_stories={this.props.latest.top_stories}/>
          <DailyList />
        </div>
      )
    }

  }
}
export default TodayZhihuDaily;
