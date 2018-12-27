import React from 'react'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import createStyled from '../../lib/createStyled'

const Styled = createStyled(theme => ({
  root: {
    // height: '80vh'
    overflow: 'hidden'
  },
  header: {}
}))

const head = [
  { id: 'time', numeric: false, disablePadding: false, label: 'TIME' },
  { id: 'price', numeric: true, disablePadding: false, label: 'PRICE' },
  { id: 'amount', numeric: true, disablePadding: false, label: 'AMOUNT' }
]

const Trade = props => (
  <Styled>
    {({ classes }) => (
      <div className={classes.root}>
        <Toolbar>
          <Typography variant="subheading" className={classes.header}>
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
                    padding="none"
                  />
                )
              }, this)}
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.isArray(props.data) && props.data.map((row, idx) => {
              return (
                <TableRow role="checkbox" tabIndex={-1} key={idx}>
                  <TableCell align="right">{row.time}</TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                  <TableCell align="right">{row.amount}</TableCell>
                </TableRow>
              )
            }, this)}
          </TableBody>
        </Table>
      </div>
    )}
  </Styled>
)

export default Trade
