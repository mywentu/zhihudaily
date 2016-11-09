import React, { Component } from 'react'
import { Carousel } from 'antd'
import {List, ListItem} from 'material-ui/List';
import 'antd/dist/antd.css';
import './slide.scss';

export default class Slide extends Component {
  constructor(props){
    super(props)
  }

  render() {
    let proxy = 'http://zhihu.garychang.cn/tiny-pic?img=';
    const slideString = this.props.top_stories.map( story => (
        <div key={story.id} className="top-stories-img-box" onTouchTap={ this.props.handleTest.bind(this, story.id) } >
          <img src={ proxy + story.image}   />
          <div className="story-title">
            <h3>{story.title}</h3>
          </div>
        </div>
        )
      );

     return (
         <Carousel autoplay>
           { slideString }
         </Carousel>

    )
  }
}
