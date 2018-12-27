import React from 'react'

import Grid from '@material-ui/core/Grid'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import createStyled from '../../lib/createStyled'

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
          <FontAwesomeIcon className={classes.icon} icon={['fab', 'btc']} size="3x"/>
        </Grid>
        <Grid item xs={5}>
          <div className="classes.pair">{props.pair}</div>
          <span >{props.data[1]}</span>&nbsp;
          <span >{props.data[2]}</span>&nbsp;
          <span >{props.data[3]}</span>
        </Grid>
        <Grid item xs={5}>
          TICKER
        </Grid>
      </Grid>
    )}
  </Styled>
)

export default Ticker
