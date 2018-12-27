export const setApp = (pair = 'BTC/USD') => {
  return dispatch => {
    dispatch({
      type: 'SET_APP',
      payload: {
        pair
      }
    })
  }
}
