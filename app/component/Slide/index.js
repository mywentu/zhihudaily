import React, { Component } from 'react'
import { Carousel } from 'antd'
import {List, ListItem} from 'material-ui/List';
import 'antd/dist/antd.css';
import './slide.scss';

export default class Slide extends Component {
  constructor(props){
    super(props)
        this.handleTest=this.handleTest.bind(this);
  }

  handleTest(){
    console.log('adasdasd');
  }

  render() {
    let proxy = 'http://zhihu.garychang.cn/tiny-pic?img=';
    const slideString = this.props.top_stories.map( story => (
        <div key={story.id} className="top-stories-img-box" >
          <img src={ proxy + story.image}  onTouchTap={ this.handleTest } />
          <div className="story-title">
            <a href="#"  >{story.title}</a>
          </div>
        </div>
        )
      );

     return (
         <Carousel >
           { slideString }
         </Carousel>

    )
  }
}
