export const REQUEST_STARTIMG = 'REQUEST_STARTIMG'
export const RECEIVE_STARTIMG = 'RECEIVE_STARTIMG'

export const requestStartImg = () => ({
  type: REQUEST_STARTIMG,
})

export const receiveStartImg = (json) => {

  return {
    type: RECEIVE_STARTIMG,
    receiveStartImgData: json
  }

}

export const fetchStartImg = () => dispatch => {
  dispatch(requestStartImg())
  return fetch('http://news-at.zhihu.com/api/4/start-image/1920*1080')
    .then( response => response.json() )
    .then(json => dispatch( receiveStartImg(json) )
  )
}
