import React, { useState } from 'react'
import { observer, inject } from 'mobx-react'
import ClientInput from './ClientInput'

const Update = inject('company')(observer((props) => {

    const { company } = props

    const [input, setInput] = useState({
        clientName: '',
        owner: '',
        emailType: '',
        sold: true
    })

    const handleChange = function(e) {
        setInput({...input, [e.target.name]: e.target.value})
    }

    const handleClick = function(e) {
        const {clientName} = input 
        company.updateClient(clientName, e.target.name, input[e.target.name])
    }

    return (
        <div>
            <h3>UPDATE</h3>
            <ClientInput input={input.clientName} handleChange={handleChange} />
            <div>
                <label>Transfer owenership to:</label>
                <select defaultValue='default' name='owner' onChange={handleChange}>
                    <option disabled value="default">Owner</option>
                    {company.allOwners.map(o => 
                        <option key={o} value={o}>{o}</option>
                    )}
                </select>
                <button onClick={handleClick} name='owner'>TRANSFER</button>
            </div>
            <div>
                <label>Send email:</label>
                <select defaultValue='default' name='emailType' onChange={handleChange}>
                    <option disabled value="default">Email Type:</option>
                    {company.allEmailTypes.map(e => 
                        <option key={e} value={e}>{e}</option>
                    )}
                </select>
                <button onClick={handleClick} name='emailType'>SEND</button>
            </div>
            <div>
                <label>Declare Sale!</label>
                <button onClick={handleClick} name='sold'>DECLARE</button>
            </div>
        </div>
    )
}))

export default Update