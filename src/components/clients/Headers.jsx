import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import TableCell from '@material-ui/core/TableCell'

import TableRow from '@material-ui/core/TableRow'

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: '#fbc02d',
        color: theme.palette.common.black
    },
    body: {
        fontSize: 14,
    },
}))(TableCell)

const Headers = (props) => {

    const titles = ['Name', 'Surname', 'Country', 'First Contact', 'Email', 'Sold', 'Owner']
    return (
            <TableRow>
                {titles.map(t => <StyledTableCell key={t} align="left">{t}</StyledTableCell>)}
            </TableRow>
    )
}

export default Headers