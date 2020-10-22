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
import TableBody from '@material-ui/core/TableBody'

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
})

const Clients = inject('company')(observer((props) => {

    const { company } = props
    const classes = useStyles()

    const [input, setInput] = useState('')

    const handleChange = function(e) {
        setInput(e.target.value)
    }

    return (
        <div>
            <ClientInput input={input} handleChange={handleChange}/>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <Headers />
                    </TableHead>
                    <Rows />
                </Table>
            </TableContainer>
        </div>
    )
}))

export default Clients