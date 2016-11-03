import React, {Component} from 'react';
import logo from './logo.png';
// import './Loading.css';
import './Loading.scss'


import Main from  '../../container/Main';


class Loading extends Component {
    constructor(props){
        super(props);
        this.state = {
            imgUrl: '',
            endStart: false
        }
    }
    componentDidMount() {
        this.props.fetchStartImg()
    }
    componentWillReceiveProps(nextProps) {

        var proxy = 'http://zhihu.garychang.cn/tiny-pic?img=';
        this.setState({
            imgUrl: proxy+nextProps.startimg.img
        })
        setTimeout(()=>{
            this.setState({
                endStart: true
            })
        },500)
    }
    render() {
        // if(this.state.endStart){
            return (
                <Main />
            )
        // }else{
        //         return (
        //         <div className="App">
        //             <div className="zh-img">
        //                 <img role="presentation" src={ this.state.imgUrl }/>
        //             </div>
        //             <div className="zh-quote">
        //                 <div className="zh-logo">
        //                     <img src={logo} alt="logo"/>
        //                 </div>
        //                 <div className="zh-zhihudaily">
        //                     <h1>知乎日报</h1>
        //                     <h3>每天三次，每次七分钟</h3>
        //                 </div>
        //             </div>
        //         </div>
        //     )
        // }
    }
}
export default Loading;
