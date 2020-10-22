import React from 'react'
import { observer, inject } from 'mobx-react'

const ClientInput = inject('company')(observer((props) => {

    const { company } = props
    
    const handleChange = function(e) {
        props.handleChange(e)
    }

    return (
        <div>
            <label>Client:</label>
            <input name='clientName' list="clients" value={props.input} onChange={handleChange} />
            <datalist id="clients">
                {company.clients.map(c => <option value={c.name} />)}
            </datalist>
        </div>
    )
}))

export default ClientInput