import React from 'react'
import { observer, inject } from 'mobx-react'

const ClientInput = inject('company')(observer((props) => {

    const { company } = props
    
    return (
        <div>
            <label>Client:</label>
            <input name='clientName' list="clients" value={props.input} onChange={props.handleChange} />
            <datalist id="clients">
                {company.clients.map(c => <option value={c.name} />)}
            </datalist>
        </div>
    )
}))

export default ClientInput