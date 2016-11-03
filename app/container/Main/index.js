import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; //provider 部分
import getMuiTheme from 'material-ui/styles/getMuiTheme'; //配置Theme的主要部分
import { lightBlue400 } from 'material-ui/styles/colors'; //AppBar 颜色

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'; //夜间模式
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'; //白天模式

import AppBar from 'material-ui/AppBar';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import './Main.scss'
injectTapEventPlugin();

export default class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
      open: false,
      theme: darkBaseTheme
    }
  }
  handleToggle = () => this.setState({ open: !this.state.open });
  handleToChangeTheme = (event, child) => {
    if(child.key ==='changeTheme'){
      this.setState({ theme: this.state.theme === lightBaseTheme?darkBaseTheme:lightBaseTheme })
    }
  }
  render(){
    return (
        <MuiThemeProvider muiTheme={getMuiTheme(this.state.theme)} >
          <div>
            <AppBar title="首页"
                onLeftIconButtonTouchTap = { this.handleToggle }
                iconElementRight={
                  <IconMenu
                      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                      targetOrigin={{horizontal: 'left', vertical: 'top'}}
                      onItemTouchTap={(event, child)=>{ this.handleToChangeTheme(event, child)} } //给item 添加事件
                      >
                      <MenuItem primaryText="夜间模式" key="changeTheme"/>
                      <MenuItem primaryText="设置选项" />
                    </IconMenu>
                }
            />
              <Drawer open={this.state.open} docked={false}  onRequestChange={(open) => this.setState({open})} >
                <MenuItem>日常心理学</MenuItem>
                <MenuItem>用户推荐日报</MenuItem>
              </Drawer>
          </div>
        </MuiThemeProvider>
    )
  }
}
