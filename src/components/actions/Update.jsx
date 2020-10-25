import React, { useState, useEffect } from 'react'
import { observer, inject } from 'mobx-react'
import ClientInput from './ClientInput'
import { Button, FormControl, Grid, InputAdornment, InputLabel, makeStyles, MenuItem, Select, TextField, Typography } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        marginBottom: '20px',
        marginTop: '10px'
    },
    title: {
        display: 'block',
    },
    element: {
        marginTop: '15px',
        display: 'flex',
        justifyContent: 'space-between'
    },
    buttons: {
        color: '#fbc02d',
        fontWeight: 'bold',
        '&:hover': {
            backgroundColor: '#FAF7E7',
            opacity: '90%'
        }
    }
})

const Update = inject('company')(observer((props) => {

    const classes = useStyles()

    const { company } = props

    const [input, setInput] = useState({
        clientName: '',
        owner: 'default',
        emailType: 'default',
        sold: true
    })

    const [disableInput, setDisableInput] = useState('true')

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const handleInputChange = function(value) {
        setInput({ ...input, clientName: value })
    } 

    useEffect(() => {
        findClient()
    }, [input.clientName])

    const findClient = function() {
        const clientFound = company.clients.find(c => c.name === input.clientName)
        if(clientFound) {
            setDisableInput(null)
            setInput({ ...input, owner: clientFound.owner, emailType: clientFound.emailType })
        } else {
            setDisableInput('true')
            setInput({ ...input, owner: 'default', emailType: 'default' })
        } 
    }

    const handleClickTransfer = function(e) {
        const {clientName} = input 
        company.updateClient(clientName, 'owner', input['owner'])
    }

    const handleClickEmail = function(e) {
        const {clientName} = input 
        company.updateClient(clientName, 'emailType', input['emailType'])
    }

    const handleClickSold = function(e) {
        const {clientName} = input 
        company.updateClient(clientName, 'sold', input['sold'])
    }

    return (
        <Grid item xs={5} container className={classes.root} align='start'>

            <Grid item xs={12}>
                <Typography variant="h5" component="h5" className={classes.title}>
                    Update
                </Typography>
            </Grid>

            <ClientInput input={input.clientName} handleChange={handleInputChange} />

            <Grid item xs={12} className={classes.element} container>
                <Grid item xs={5}>
                    <label>Transfer owenership to</label>
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        fullWidth
                        select
                        value={input.owner}
                        name='owner' 
                        onChange={handleChange} 
                        disabled={disableInput}
                        SelectProps={{
                            MenuProps: {
                              anchorOrigin: {
                                vertical: "bottom",
                                horizontal: "left"
                              },
                              getContentAnchorEl: null
                            }
                        }}
                    >
                        <MenuItem disabled value="default">Owner</MenuItem>
                        {company.allOwners.map(o => 
                            <MenuItem key={o} value={o}>{o}</MenuItem>
                        )}
                    </TextField>
                </Grid>
                <Grid item xs={3} align='end'>
                    <Button
                        onClick={handleClickTransfer} 
                        disabled={disableInput}
                        className={classes.buttons}
                    >
                        TRANSFER
                    </Button>
                </Grid>
            </Grid>

            <Grid item xs={12} className={classes.element} container>
                <Grid item xs={5}>
                    <label>Send email</label>
                </Grid>
                <Grid item xs={4}>
                    <TextField 
                        fullWidth
                        select
                        value={input.emailType}
                        name='emailType' 
                        onChange={handleChange} 
                        disabled={disableInput}
                        SelectProps={{
                            MenuProps: {
                              anchorOrigin: {
                                vertical: "bottom",
                                horizontal: "left"
                              },
                              getContentAnchorEl: null
                            }
                        }}
                    >
                        <MenuItem disabled value="default">Email Type</MenuItem>
                        {company.allEmailTypes.map(e => 
                            <MenuItem key={e} value={e}>{e}</MenuItem>
                    )}
                    </TextField>
                </Grid>
                <Grid item xs={3} align='end'>
                    <Button 
                        onClick={handleClickEmail} 
                        disabled={disableInput}
                        className={classes.buttons}
                    >
                        SEND
                    </Button>
                </Grid>
            </Grid> 

            <Grid item xs={12} className={classes.element}>
                <label>Declare Sale!</label>
                <Button 
                    onClick={handleClickSold} 
                    disabled={disableInput}
                    className={classes.buttons}
                >
                    DECLARE
                </Button>
            </Grid>
        </Grid>
    )
}))

export default Update