const initState = {
  data: []
}

const tickerReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GET_TICKER':
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

export default tickerReducer
