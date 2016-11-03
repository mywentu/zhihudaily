import {
  REQUEST_STARTIMG,
  RECEIVE_STARTIMG
} from '../actions/'

const startImg = (state = { isFetching:false }, action ) => {
  switch (action.type) {
    case REQUEST_STARTIMG:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_STARTIMG:
      return {
        ...state,
        img: action.receiveStartImgData.img,
        text: action.receiveStartImgData.text
      }
    default:
      return state
  }
}
export default startImg;
