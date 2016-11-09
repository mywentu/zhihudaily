import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import './news_qa.auto.css'
export default class PostBody extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            image: '',
            body: ''
        }
    }
    componentWillReceiveProps(nextProps) {
      this.setState({
        title: nextProps.title,
        image: nextProps.image.replace(/http/g,'http://zhihu.garychang.cn/tiny-pic?img=http'),
        body: nextProps.body.replace(/http/g,'http://zhihu.garychang.cn/tiny-pic?img=http')
      })
      ReactDOM.findDOMNode(this.refs.post_body).innerHTML = this.state.body;

    }
    componentDidUpdate() {
      ReactDOM.findDOMNode(this.refs.post_body).innerHTML = this.state.body;

    }
    render() {
        return (
            <div>
                <img style={{width:'100%',height:'35vh',display:'block',backgroundImage:`url(${this.state.image})`, backgroundPosition:'center center'   }}/>
                <div ref="post_body">
                </div>
            </div>
        )
    }

}
