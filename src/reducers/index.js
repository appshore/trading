import { combineReducers } from 'redux'

import appReducer from './appReducer'
import orderBookReducer from './orderBookReducer'
import tickerReducer from './tickerReducer'
import tradesReducer from './tradesReducer'

export default combineReducers({
  app: appReducer,
  book: orderBookReducer,
  ticker: tickerReducer,
  trades: tradesReducer
})
