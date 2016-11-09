import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import './dailylist.scss'

export default class DailyList extends Component {
  constructor(props){
    super(props);
  }

  render(){
    let proxy = 'http://zhihu.garychang.cn/tiny-pic?img=';
    const zhihuToday = this.props.stories.map( story => (
      <ListItem className="item-box" key={story.id} onTouchTap={ this.props.handleTest.bind(this,story.id) }>
        <div className="item-box-setting">
          <h1>{story.title}</h1>
          <img src={proxy+story.images[0]} />
        </div>
      </ListItem>
    ))
    return(

      <List className="list-item">
        {zhihuToday}
      </List>
    )
  }
}
