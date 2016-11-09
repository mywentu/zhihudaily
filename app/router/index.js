import React from 'react'
import Main from '../container/Main/'
import TodayZhihuDaily from '../container/TodayZhihuDaily/'
import DetailZhihuDaily from '../container/DetailZhihuDaily/'

import { Router, Route, IndexRoute } from 'react-router'
export const routes = () => (


    <Route path="/" component={Main}>
      <IndexRoute component={TodayZhihuDaily}/>
     <Route path="accounts" component={DetailZhihuDaily}/>
   </Route>
)
