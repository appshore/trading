export const getTicker = () => dispatch => {
  let socket = null
  let channel = 'ticker'
  let symbol = 'tBTCUSD'

  socket = new WebSocket('wss://api.bitfinex.com/ws/2')

  let sub = JSON.stringify({
    event: 'subscribe',
    channel,
    symbol
  })

  socket.onopen = () => {
    socket.send(sub)
  }

  socket.onmessage = msg => {
    if (Array.isArray(msg.data) && Array.isArray(msg.data[1])) {
      dispatch({
        type: 'GET_TICKER',
        payload: {
          data: msg.data[1]
        }
      })
    }
  }

  dispatch({
    type: 'GET_TICKER_WAIT'
  })
}
