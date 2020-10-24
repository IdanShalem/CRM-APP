import React from 'react'
import { observer, inject } from 'mobx-react'
import { Grid } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete'

const ClientInput = inject('company')(observer((props) => {

    const { company } = props
    
    const handleChange = function(e) {
        props.handleChange(e)
    }

    return (
        <Grid item >
            <label>Client:</label>
            <Autocomplete
                id="combo-box-demo"
                options={company.clients}
                getOptionLabel={(option) => option.name}
                style={{ width: 300 }}
                renderInput={(params) => 
                    <TextField 
                        {...params} 
                        label="Search" 
                        name='clientName' 
                        list="clients" 
                        value={props.input} 
                        onChange={handleChange} 
                    />
                }
            />
        </Grid>
    )
}))

export default ClientInput