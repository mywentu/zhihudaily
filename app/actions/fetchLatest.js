export const REQUEST_LATEST = 'REQUEST_LATEST'
export const RECEIVE_LATEST = 'RECEIVE_LATEST';

export const requestLatest = () => ({
  type: REQUEST_LATEST

})

export const receiveLatest = (json) => ({
  type: RECEIVE_LATEST,
  lastData: json
})

export const fetchLatest = () => dispatch => {
  dispatch(requestLatest())
  return fetch('http://news-at.zhihu.com/api/4/news/latest')
    .then( response => response.json() )
    .then( json => dispatch( receiveLatest(json)))
}
