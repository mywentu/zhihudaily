import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Loading from '../../component/Loading'
import Main from '../Main/'
import * as StartImgActions from '../../actions/fetchStartImg'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            endStart: false
        }
        this.onLoadingChanged = this.onLoadingChanged.bind(this);
    }

    onLoadingChanged(newStateFromChild) {
        this.setState({endStart: newStateFromChild})
    }

    render() {
          const {fetchStartImg, startimg} = this.props
  
          if (this.state.endStart) {
            return (
              <Main children={ this.props.children } />
            )
          }else{
            return  <Loading fetchStartImg={fetchStartImg} startimg={ startimg } callbackApp={ this.onLoadingChanged } />
          }

        }
    }

    function mapStateToProps(state) {
        return {startimg: state.startImg}
    }
    function mapDispatchToProps(dispatch) {
        return bindActionCreators(StartImgActions, dispatch)
    }

    export default connect(mapStateToProps, mapDispatchToProps)(App);
