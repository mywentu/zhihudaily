import React, {Component} from 'react';
import logo from './logo.png';
import './Loading.scss'
import Main from '../../container/Main';
import TodayZhihuDaily from '../../container/TodayZhihuDaily/'

class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgUrl: '',
            endStart: false
        }
    }
    componentDidMount() {
        this.props.fetchStartImg()
        setTimeout(() => {
            this.setState({endStart: true})
            this.props.callbackApp(this.state.endStart)

        }, 5000)
    }
    componentWillReceiveProps(nextProps) {
        var proxy = 'http://zhihu.garychang.cn/tiny-pic?img=';
        this.setState({
            imgUrl: proxy + nextProps.startimg.img
        })

    }
    render() {
        return (
            <div className="App">
                <div className="zh-img">
                    <img role="presentation" src={this.state.imgUrl}/>
                </div>
                <div className="zh-quote">
                    <div className="zh-logo">
                        <img src={logo} alt="logo"/>
                    </div>
                    <div className="zh-zhihudaily">
                        <h1>知乎日报</h1>
                        <h3>每天三次，每次七分钟</h3>
                    </div>
                </div>
            </div>
        )
    }
}
export default Loading;
