import { combineReducers } from 'redux'
import startImg from './startImg'
import latest from './latest'
import post from './post'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  startImg,
  latest,
  post,
  routing: routerReducer
})

export default rootReducer;
