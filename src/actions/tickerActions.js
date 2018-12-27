
export const getTicker = ({channel, symbol}) => async (dispatch, getState) => {
  let socket = new WebSocket('wss://api.bitfinex.com/ws/2')

  let sub = JSON.stringify({
    event: 'subscribe',
    channel,
    symbol
  })

  socket.onopen = () => {
    socket.send(sub)
  }

  socket.onmessage = msg => {
    let data = JSON.parse(msg.data)
    if (Array.isArray(data) && Array.isArray(data[1])) {
      dispatch({
        type: 'GET_TICKER',
        payload: {
          data: data[1]
        }
      })
    }
  }

  dispatch({
    type: 'GET_TICKER_WAIT'
  })
}
