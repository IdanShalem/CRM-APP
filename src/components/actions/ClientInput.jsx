import React from 'react'
import { observer, inject } from 'mobx-react'
import { Grid, makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    label: {
        alignSelf: 'flex-end',
        textSize: '1.5em'
    }
})

const ClientInput = inject('company')(observer((props) => {

    const { company } = props

    const classes = useStyles()

    const handleInputChange = function(e, val) {
        props.handleChange(val)
    }

    return (
        <Grid item xs={5} alignItems='flex-start'>
            <Autocomplete
                id="combo-box-demo"
                SelectProps={{
                    MenuProps: {
                      anchorOrigin: {
                        vertical: "bottom",
                        horizontal: "left"
                      },
                      getContentAnchorEl: null
                    }
                }}
                className={classes.input}
                options={company.clients}
                getOptionLabel={(option) => option.name}
                name='clientName' 
                inputValue={props.input} 
                onInputChange={handleInputChange} 
                renderInput={(params) => 
                    <TextField 
                        {...params} 
                        label="Search" 
                        name='clientName' 
                    />
                }
            />
        </Grid>
    )
}))

export default ClientInput