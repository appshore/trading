import React from 'react'
import { connect } from 'react-redux'

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import Grid from '@material-ui/core/Grid'

import indigo from '@material-ui/core/colors/indigo'
import pink from '@material-ui/core/colors/pink'
import red from '@material-ui/core/colors/red'

import { setApp } from './actions/appActions'
import { getOrderBook } from './actions/orderBookActions'
import { getTrades } from './actions/tradesActions'
import { getTicker } from './actions/tickerActions'

import OrderBook from './components/OrderBook'
import Ticker from './components/Ticker'
import Trades from './components/Trades'

import createStyled from './lib/createStyled'

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: pink,
    error: red
  }
})

const Styled = createStyled({
  app: {
    flexGrow: 1
  }
})

class App extends React.Component {
  socket = []

  state = {
    symbol: 'tBTCUSD'
  }

  componentWillMount() {
    this.props.setApp()
    this.props.getOrderBook({channel:'book', symbol: this.state.symbol})
    this.props.getTicker({ channel: 'ticker', symbol: this.state.symbol })
    this.props.getTrades({ channel: 'trades', symbol: this.state.symbol })
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Styled>
          {({ classes }) => (
            <div className={classes.app}>
              <Grid container>
                <Grid item xs={9}>
                  <OrderBook />
                </Grid>
                <Grid item xs={3}>
                  <Grid container direction="column">
                    <Grid item xs={12}>
                      <Ticker />
                    </Grid>
                    <Grid item xs={12}>
                      <Trades />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          )}
        </Styled>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = state => {
  return {
    app: state.app
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setApp: () => dispatch(setApp()),
    getOrderBook: ({ channel, symbol }) =>
      dispatch(getOrderBook({ channel, symbol })),
    getTicker: ({ channel, symbol }) =>
      dispatch(getTicker({ channel, symbol })),
    getTrades: ({ channel, symbol }) => dispatch(getTrades({ channel, symbol }))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
