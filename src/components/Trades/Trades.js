import React from 'react'
import { connect } from 'react-redux'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import createStyled from '../createStyled'

const Styled = createStyled(theme => ({
  root: {
    // height: '80vh'
    overflow: 'hidden'
  },
  header: {}
}))

const head = [
  { id: 'period', numeric: false, disablePadding: false, label: 'TIME' },
  { id: 'price', numeric: true, disablePadding: false, label: 'PRICE' },
  { id: 'amount', numeric: true, disablePadding: false, label: 'AMOUNT' }
]

const Trade = props => (
  <Styled>
    {({ classes }) => (
      <div className={classes.root}>
        <Toolbar>
          <Typography variant="h5" className={classes.header}>
            TRADES <span className="classes.pair">{props.pair}</span>
          </Typography>
        </Toolbar>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              {head.map(row => {
                return (
                  <TableCell
                    key={row.id}
                    align={row.numeric ? 'right' : 'left'}
                    padding="none">
                    {row.label}
                  </TableCell>
                )
              }, this)}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data &&
              props.data.map((row, idx) => {
                return (
                  <TableRow key={idx}>
                    <TableCell align="right">{row[0]}</TableCell>
                    <TableCell align="right">{row[1]}</TableCell>
                    <TableCell align="right">{row[2]}</TableCell>
                  </TableRow>
                )
              })}
          </TableBody>
        </Table>
      </div>
    )}
  </Styled>
)

const mapStateToProps = state => {
  return {
    pair: state.app.pair,
    data: state.trades.data
  }
}

export default connect(mapStateToProps)(Trade)
