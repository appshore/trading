export const getTrades = ({ channel, symbol }) => async (dispatch, getState) => {
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
    if (Array.isArray(data) && Array.isArray(data[2])) {

      let rows = getState().trades.data
      rows.unshift(data[2])

      dispatch({
        type: 'GET_TRADES',
        payload: {
          data: rows.slice(0,10)
        }
      })
    }
  }

  dispatch({
    type: 'GET_TRADES_WAIT'
  })
}
