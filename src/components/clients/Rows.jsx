import React, { Fragment, useState } from 'react'
import { observer, inject } from 'mobx-react'
import Client from './Client'
import { makeStyles } from '@material-ui/core/styles'
import TableBody from '@material-ui/core/TableBody'
import UpdatePopUp from './UpdatePopUp'

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
})

const Rows = inject('company')(observer((props) => {

    const { company } = props;
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
            <TableBody>
                {company.clients.length > 0
                    ? company
                        .clients
                        .map(c => <Client key={c.id} client={c} handleClickOpen={handleClickOpen} />)
                    : 'HELLO WORLD'
                }
                <UpdatePopUp open={open} handleClose={handleClose} client={client} />
            </TableBody>
        </Fragment>
    )
}))

export default Rows