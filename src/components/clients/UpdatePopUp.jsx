import React, { Fragment, useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { inject, observer } from 'mobx-react';

const UpdatePopUp = inject('company')(observer((props) => {
    const { client, open, company } = props

    const [input, setInput] = useState({
        name: ['', ''],
        country: '',
        email: ''
    })

    useEffect(() => {
        if (open){
            const name = client.name.split(" ")
            setInput({
                name,
                country: client.country,
                email: client.email
            })
        }
    }, [client])

    const handleChange = function(e) {
        if(e.target.name === 'firstName') {
            const surName = input.name[1]
            setInput({...input, name: [e.target.value, surName]})
        } else if(e.target.name === 'surName') {
            const firstName = input.name[0]
            setInput({...input, name: [firstName, e.target.value]})
        } else {
            setInput({ ...input, [e.target.name]: e.target.value })
        }
    }

    const handleClose = () => props.handleClose(false)

    const handleUpdate = function() {  
        for(let key in input) {
            key === 'name'
                ?   company.updateClient(client.name, key, input.name.join(' '))
                :   company.updateClient(client.name, key, input[key])
        }
        handleClose()
    }

    return (
        <Fragment>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Update Client</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="firstName"
                        name='firstName'
                        value={input.name[0]}
                        label="First Name"
                        type="text"
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="surName"
                        name='surName'
                        value={input.name[1]}
                        label="Surname"
                        type="text"
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="country"
                        name='country'
                        value={input.country}
                        label="country"
                        type="text"
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        name='email'
                        value={input.email}
                        label="Email Address"
                        type="email"
                        onChange={handleChange}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleUpdate} color="primary">
                        Update
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    )
}))

export default UpdatePopUp;