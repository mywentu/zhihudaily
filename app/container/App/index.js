import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Loading from '../../component/Loading'
import * as StartImgActions from '../../actions/'

class App extends Component{
  render(){
    const { fetchStartImg, startimg } = this.props
    return (
      <div>
        <Loading fetchStartImg={fetchStartImg} startimg={ startimg }  />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    startimg: state.startImg
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(StartImgActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
