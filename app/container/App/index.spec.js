import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import Loading from '../../component/Loading'
import * as StartImgActions from '../../actions/'


class App extends Component{
  render(){
    return (
      <div>
        <h1>ada</h1>    
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
