import React, { Fragment, useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { inject, observer } from 'mobx-react';

const UpdatePopUp = inject('company')(observer((props) => {
    const { client, open } = props

    const [input, setInput] = useState({
        firstName: '',
        surName: '',
        country: '',
        email: ''
    })

    useEffect(() => {
        if (open){
            const [ firstName, surName ] = client.name.split(" ")
            setInput({
                firstName: firstName,
                surName: surName,
                country: client.country,
                email: client.email
            })
        }
    }, [client])

    const handleClose = () => props.handleClose(false)

    return (
        <Fragment>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Update Client</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="firstName"
                        value={input.firstName}
                        label="First Name"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="surName"
                        value={input.surName}
                        label="Surname"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="country"
                        value={input.country}
                        label="country"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        value={input.email}
                        label="Email Address"
                        type="email"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Update
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    )
}))

export default UpdatePopUp;