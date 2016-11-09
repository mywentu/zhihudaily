import { combineReducers } from 'redux'
import startImg from './startImg'
import latest from './latest'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  startImg,
  latest,
  routing: routerReducer
})

export default rootReducer;
