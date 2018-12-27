const initState = {
  pair: 'BTC/USD'
}

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_APP':
      return {
        ...state,
        ...action.payload
      }

    default:
      return state
  }
}

export default appReducer
