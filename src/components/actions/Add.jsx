import React, { useState } from 'react'
import { observer, inject } from 'mobx-react'
import { Button, Grid, makeStyles, TextField, Typography } from '@material-ui/core'

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
        alignItems: 'end'
    },
    button: {
        marginTop: '20px',
        backgroundColor: '#fbc02d',
        width:'100%'
    }
})

const Add = inject('company')(observer((props) => {

    const classes = useStyles()

    const { company } = props

    const [input, setInput] = useState({
        firstName: '',
        surName: '',
        country: '',
        email: '',
        owner: ''
    })

    const handleChange = function(e) {
        setInput({...input, [e.target.name]: e.target.value})
    }

    const handleSubmit = function(){
        company.addClient(input)
    } 

    return (
        <Grid item xs={5} container className={classes.root} direction='column' align='start'>
            <Grid item xs={12}>
                <Typography variant="h5" component="h5" className={classes.title}>
                    Add Client
                </Typography>
            </Grid>
            <Grid item xs={12} container className={classes.element}>
                <Grid item xs={2}>
                    <Typography variant="subtitle1" component='span' >
                        First name:
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <TextField 
                        fullWidth
                        type="text" 
                        name='firstName' 
                        value={input.firstName} 
                        onChange={handleChange} 
                    />
                </Grid>
            </Grid>
            <Grid item xs={12} container className={classes.element}>
                <Grid item xs={2}>
                    <Typography variant="subtitle1" component='span' >
                        Surname:
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        fullWidth
                        type="text" 
                        name='surName' 
                        value={input.surName} 
                        onChange={handleChange} 
                    />
                </Grid>
            </Grid>
            <Grid item xs={12} container className={classes.element}>
                <Grid item xs={2}>
                    <Typography variant="subtitle1" component='span' >
                        Country:
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <TextField 
                        fullWidth
                        type="text" 
                        name='country' 
                        value={input.country} 
                        onChange={handleChange} 
                    />
                </Grid>
            </Grid>
            <Grid item xs={12} container className={classes.element}>
                <Grid item xs={2}>
                    <Typography variant="subtitle1" component='span' >
                        Email:
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <TextField 
                        fullWidth
                        type="text" 
                        name='email' 
                        value={input.email} 
                        onChange={handleChange} 
                    />
                </Grid>
            </Grid>
            <Grid item xs={12} container className={classes.element}>
                <Grid item xs={2} justify='flex-end'>
                    <Typography variant="subtitle1" component='span' >
                        Owner:
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <TextField 
                        fullWidth
                        type="text" 
                        name='owner' 
                        value={input.owner} 
                        onChange={handleChange} 
                    />
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <Button 
                    variant="contained" 
                    onClick={handleSubmit} 
                    className={classes.button}
                >
                    Add New Client
                </Button>
            </Grid>
        </Grid>
    )
}))

export default Add