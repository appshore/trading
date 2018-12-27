const initState = {
  data: []
}

const tradesReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GET_TRADES':
      return {
        ...state,
        ...action.payload
      }


    default:
      return state
  }
}

export default tradesReducer
