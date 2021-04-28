import React, { Fragment, useState } from 'react'
import { observer, inject } from 'mobx-react'
import Client from './Client'
import TableBody from '@material-ui/core/TableBody'
import UpdatePopUp from './UpdatePopUp'

const Rows = inject('company')(observer((props) => {

    const { company, input, page, rowsPerPage } = props
    
    const [client, setClient] = useState('')

    const [open, setOpen] = useState(false);

    const handleClickOpen = (clientName) => {
        const clientfound = company.clients.find(c => c.name === clientName)
        setClient(clientfound)
        setOpen(true);
    }
    const handleClose = () => setOpen(false);

    return (
        <Fragment>
            <TableBody >
                {company
                    .clients
                    .filter(c => c.name.toLowerCase().includes(input.toLowerCase()))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map(c => <Client key={c.id} client={c} handleClickOpen={handleClickOpen} />)

                }
                <UpdatePopUp open={open} handleClose={handleClose} client={client} />
            </TableBody>
        </Fragment>
    )
}))

export default Rows