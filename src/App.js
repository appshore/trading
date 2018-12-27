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
    symbol: 'tBTCUSD',
    orderBook: [],
    ticker: {},
    trades: []
  }

  componentWillMount() {
    this.props.setApp()
    this.props.getOrderBook()
    this.props.getTicker()
    this.props.getTrades()
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Styled>
          {({ classes }) => (
            <div className={classes.app}>
              <Grid container>
                <Grid item xs={9}>
                  <OrderBook
                    pair={this.props.app.pair}
                    data={this.state.orderBook.data}
                  />
                </Grid>
                <Grid item xs={3}>
                  <Grid container direction="column">
                    <Grid item xs={12}>
                      <Ticker
                        pair={this.props.app.pair}
                        data={this.props.ticker.data}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Trades
                        pair={this.props.app.pair}
                        data={this.props.trades.data}
                      />
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
    app: state.app,
    orderBook: state.orderBook,
    ticker: state.ticker,
    trades: state.trades
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setApp: () => dispatch(setApp()),
    getOrderBook: () => dispatch(getOrderBook()),
    getTicker: () => dispatch(getTicker()),
    getTrades: () => dispatch(getTrades())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
