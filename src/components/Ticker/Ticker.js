import React from 'react'
import { connect } from 'react-redux'

import Grid from '@material-ui/core/Grid'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import createStyled from '../createStyled'
import { getTicker } from '../../actions/tickerActions'

const Styled = createStyled(theme => ({
  root: {
    // minHeight: '10vh',
  }
}))

const Ticker = props => (
  <Styled>
    {({ classes }) => (
      <Grid container justify="center" className={classes.root}>
        <Grid item xs={2}>
          <FontAwesomeIcon
            className={classes.icon}
            icon={['fab', 'btc']}
            size="3x"
          />
        </Grid>
        <Grid item xs={5}>
          <div className="classes.pair">{props.pair}</div>
          <div>{props.data && props.data[1]}</div>
        </Grid>
        <Grid item xs={5}>
          <div>{props.data && props.data[2]}</div>
          <div>{props.data && props.data[3]}</div>
        </Grid>
      </Grid>
    )}
  </Styled>
)

const mapStateToProps = state => {
  return {
    pair: state.app.pair,
    data: state.ticker.data
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTicker: ({ channel, symbol }) => dispatch(getTicker({ channel, symbol }))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Ticker)
