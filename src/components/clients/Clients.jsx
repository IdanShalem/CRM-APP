import React, { useState } from 'react'
import { observer, inject } from 'mobx-react'
import Headers from './Headers'
import Rows from './Rows'
import ClientInput from '../actions/ClientInput'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination';
import { useHistory } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'


const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    table: {
        minWidth: 700,
    },
    container: {
        maxHeight: 550
    },
})

const Clients = inject('company')(observer((props) => {

    const [input, setInput] = useState('')

    const history = useHistory()

    const { company, match } = props

    let { page, rowsPerPage } = match.params
    page = parseInt(page)
    rowsPerPage = parseInt(rowsPerPage)

    const classes = useStyles()

    const handleChangePage = (event, newPage) => {
        history.push(`/clients/${newPage}/${rowsPerPage}`)
    }

    const handleChangeRowsPerPage = (event) => {
       history.push(`/clients/0/${event.target.value}`)
    }

    const handleChange = function(e) {
        setInput(e.target.value)
    }

    return (
        <Grid item xs={11} container className={classes.root}>
            <ClientInput key='clientInput' input={input} handleChange={handleChange} />
            <TablePagination
                rowsPerPageOptions={[10, 25, 50, 100]}
                component="div"
                count={company.clients.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
            <TableContainer component={Paper} className={classes.container}>
                <Table stickyHeader className={classes.table} aria-label="customized table">
                    <TableHead>
                        <Headers />
                    </TableHead>
                    <Rows input={input} page={page} rowsPerPage={rowsPerPage} />
                </Table>
            </TableContainer>
        </Grid>
    )
}))

export default Clients