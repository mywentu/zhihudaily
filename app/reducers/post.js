import {
  REQUEST_POST,
  RECEIVE_POST
} from '../actions/fetchPost'

const post = ( state={ isFetching:false}, action) => {
  switch (action.type) {
    case REQUEST_POST:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_POST:
      return {
        ...state,
        isFetching: false,
        title: action.postData.title,
        image: action.postData.image,
        body: action.postData.body
      }
    default:
      return state
  }
}
export default post;
