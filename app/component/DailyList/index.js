import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import './dailylist.scss'
export default class DailyList extends Component {
  render(){
    return(
      <div>
        <List>
          <ListItem>
            <h1>Hello World</h1>
          </ListItem>
        </List>
      </div>
    )
  }
}
