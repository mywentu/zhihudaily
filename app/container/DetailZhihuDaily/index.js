import React, { Component } from 'react'
import * as PostActions from '../../actions/fetchPost'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import CircularProgress from 'material-ui/CircularProgress'; //wait
import PostBody from '../../component/PostBody/'


class DetailZhihuDaily extends Component {
  constructor(props) {
    super(props)
    this.state={
      isFetching: true
    }
  }
  componentDidMount(){
    this.props.fetchPost(this.props.params.id)
    this.setState({
      isFetching: false
    })
  }


  render(){
    if(this.state.isFetching){
      return (
        <div className="circular-parent">
           <CircularProgress />
        </div>
      )
    }else{
      return (
        <PostBody
          title={this.props.post.title}
          image={this.props.post.image}
          body={this.props.post.body}
          />
      )
    }
  }
}
function mapStateToProps(state) {
  return {
    post: state.post
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(PostActions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(DetailZhihuDaily);
