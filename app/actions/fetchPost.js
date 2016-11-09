export const REQUEST_POST = 'REQUEST_POST';
export const RECEIVE_POST = 'RECEIVE_POST';

export const requestPost = () => ({
  type: REQUEST_POST
})
export const receivePost = (json) => ({
  type: RECEIVE_POST,
  postData: json
})

export const fetchPost = (id) => dispatch => {
  dispatch(requestPost())
  return fetch(`http://news-at.zhihu.com/api/4/news/${id}`)
    .then( response => response.json() )
    .then( json => dispatch( receivePost(json)))
}
