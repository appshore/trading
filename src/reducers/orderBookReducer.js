const initState = {
  data: []
}

const orderBookReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GET_ORDER':
      return {
        ...state,
        ...action.payload
      }
      
    case 'DATA_ERROR':
      console.log('login error', action)
      return state

    default:
      return state
  }
}

export default orderBookReducer
