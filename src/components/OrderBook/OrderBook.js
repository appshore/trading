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
    // height: '100%',
    // width: '100%',
    overflow: 'hidden'
  },
  header: {},
  table: {},
  tableWrapper: {
    overflowX: 'auto'
  }
}))

const head = [
  { id: 'count1', numeric: false, disablePadding: false, label: 'COUNT' },
  { id: 'amount1', numeric: true, disablePadding: false, label: 'AMOUNT' },
  { id: 'total1', numeric: true, disablePadding: false, label: 'TOTAL' },
  { id: 'price1', numeric: true, disablePadding: false, label: 'PRICE' },
  { id: 'price2', numeric: true, disablePadding: false, label: 'PRICE' },
  { id: 'total2', numeric: true, disablePadding: false, label: 'TOTAL' },
  { id: 'amount2', numeric: true, disablePadding: false, label: 'AMOUNT' },
  { id: 'count2', numeric: true, disablePadding: false, label: 'COUNT' }
]

const OrderBook = props => (
  <Styled>
    {({ classes }) => (
      <div className={classes.root}>
        <Toolbar>
          <Typography variant="h5" className={classes.header}>
            ORDER BOOK <span className="classes.pair">{props.pair}</span>
          </Typography>
        </Toolbar>
        <Table className={classes.table}>
          <TableHead className={classes.header}>
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
                    <TableCell align="right">{row[3]}</TableCell>
                    <TableCell align="right">{row[4]}</TableCell>
                    <TableCell align="right">{row[5]}</TableCell>
                    <TableCell align="right">{row[6]}</TableCell>
                    <TableCell align="right">{row[7]}</TableCell>
                  </TableRow>
                )
              }, this)}
          </TableBody>
        </Table>
      </div>
    )}
  </Styled>
)

const mapStateToProps = state => {
  return {
    pair: state.app.pair,
    data: state.book.data
  }
}

export default connect(mapStateToProps)(OrderBook)
