import { combineReducers } from 'redux'
import startImg from './startImg'
import latest from './latest'

const rootReducer = combineReducers({
  startImg,
  latest
})

export default rootReducer;
