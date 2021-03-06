import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; //provider 部分
import getMuiTheme from 'material-ui/styles/getMuiTheme'; //配置Theme的主要部分
import { lightBlue400 } from 'material-ui/styles/colors'; //AppBar 颜色

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'; //夜间模式
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'; //白天模式
//大组件
import AppBar from 'material-ui/AppBar';
import TodayZhihuDaily from '../TodayZhihuDaily/'
//小组件
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back'
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

import { browserHistory } from 'react-router'

class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
      open: false,
      theme: lightBaseTheme,
      leftIcon: <IconButton><NavigationMenu /></IconButton>,
      leftHandle: this.handleToggle,
      title: '首页'
    }
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.locationWhere==="/"){
      this.setState({
        leftIcon: <IconButton><NavigationMenu /></IconButton>,
        leftHandle: this.handleToggle,
        title: '首页'
      })
    }else{
      this.setState({
        leftIcon: <IconButton><ArrowBack /></IconButton>,
        leftHandle: browserHistory.goBack,
        title: ''
      })
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
            <AppBar title={this.state.title}
                onLeftIconButtonTouchTap = { this.state.leftHandle }
                iconElementLeft={ this.state.leftIcon  } //改变appbar 的图标

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

              { this.props.children }
          </div>

        </MuiThemeProvider>
    )
  }
}


export default Main;
