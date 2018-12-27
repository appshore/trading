export const getOrderBook = ({ channel, symbol }) => async (
  dispatch,
  getState
) => {
  let socket = new WebSocket('wss://api.bitfinex.com/ws/2')

  let sub = JSON.stringify({
    event: 'subscribe',
    channel,
    symbol
  })

  socket.onopen = () => {
    socket.send(sub)
  }

  // lot of traffic on this channel
  // the cpu is going high
  socket.onmessage = msg => {
    let data = JSON.parse(msg.data)
    if (Array.isArray(data) && Array.isArray(data[1])) {
      let rows = getState().book.data
      rows.unshift(data[1])

      dispatch({
        type: 'GET_ORDER',
        payload: {
          data: rows.slice(0, 10)
        }
      })
    }
  }

  socket.onerror = msg => {
    console.error(`Socket ${channel} onerror`, msg)
  }

  dispatch({
    type: 'GET_ORDER_WAIT'
  })
}
