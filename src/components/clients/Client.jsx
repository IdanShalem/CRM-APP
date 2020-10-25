import React from 'react'
import { observer } from 'mobx-react'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const StyledTableRow = withStyles((theme) => ({
    root: {
        cursor: 'pointer',
        '&:nth-of-type(even)': {
            backgroundColor: theme.palette.background.default,
        },
    }
}))(TableRow)

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell)

const useStyles = makeStyles({
    checkBox: {
        color: '#f50057',
    }
})

const Client = observer((props) => {

    const { client } = props
    const classes = useStyles()

    const [firstName, surName] = client.name.split(' ')

    const handleClick = function() {
        props.handleClickOpen(client.name)
    }

    return (
        <StyledTableRow onClick={handleClick} hover tabIndex={-1}>
            <StyledTableCell align="left">{firstName}</StyledTableCell>
            <StyledTableCell align="left">{surName}</StyledTableCell>
            <StyledTableCell align="left">{client.country}</StyledTableCell>
            <StyledTableCell align="left">{client.firstContact}</StyledTableCell>
            <StyledTableCell align="left">{client.emailType ? client.emailType : '-'}</StyledTableCell>
            <StyledTableCell align="left">
                {client.sold
                    ? <CheckBoxIcon className={classes.checkBox} />
                    : <CheckBoxOutlineBlankIcon className={classes.checkBox} />}
            </StyledTableCell>
            <StyledTableCell align="left">{client.owner}</StyledTableCell>
        </StyledTableRow>
    )
})

export default Client