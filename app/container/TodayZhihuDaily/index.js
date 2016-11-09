import React, { Component } from 'react'
import CircularProgress from 'material-ui/CircularProgress'; //wait
import Slide from '../../component/Slide/'
import DailyList from '../../component/DailyList/'
import { Link } from 'react-router'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as LatestActions from '../../actions/fetchLatest'

class TodayZhihuDaily extends Component {
  constructor(props){
    super(props)
    this.state = {
      isFetching: true
    }
  }
  componentDidMount() {
    this.props.fetchLatest()
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
           <Link to="/post">About</Link>
        </div>
      )
    }else {
      return (
        <div className="zhihu-daily" >
          <Slide top_stories={this.props.latest.top_stories}/>
          <h6 className="today-news">今日热闻</h6>
          <DailyList stories={this.props.latest.stories } onClick={this.handleScroll }/>
        </div>
      )
    }

  }
}

function mapStateToProps(state) {
  return {
    latest: state.latest
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(LatestActions, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(TodayZhihuDaily);
