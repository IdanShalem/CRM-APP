import React, { useState, useEffect } from 'react'
import { observer, inject } from 'mobx-react'
import ClientInput from './ClientInput'

const Update = inject('company')(observer((props) => {

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

    useEffect(() => {
        findClient()
    }, [input.clientName])

    const findClient = function() {
        const clientFound = company.clients.find(c => c.name === input.clientName)
        if(clientFound) {
            setDisableInput(null)
            setInput({ ...input, owner: clientFound.owner, emailType: clientFound.emailType })
            console.log(disableInput)
        } else {
            setDisableInput('true')
            setInput({ ...input, owner: 'default', emailType: 'default' })
        } 
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
                <select 
                    value={input.owner}
                    name='owner' 
                    onChange={handleChange} 
                    disabled={disableInput}
                >
                    <option disabled value="default">Owner</option>
                    {company.allOwners.map(o => 
                        <option key={o} value={o}>{o}</option>
                    )}
                </select>
                <button 
                    onClick={handleClick} 
                    name='owner' 
                    disabled={disableInput}
                >
                    TRANSFER
                </button>
            </div>
            <div>
                <label>Send email:</label>
                <select 
                    value={input.emailType}
                    name='emailType' 
                    onChange={handleChange} 
                    disabled={disableInput}
                >
                    <option disabled value="default">Email Type:</option>
                    {company.allEmailTypes.map(e => 
                        <option key={e} value={e}>{e}</option>
                    )}
                </select>
                <button 
                    onClick={handleClick} 
                    name='emailType' 
                    disabled={disableInput}
                >
                    SEND
                </button>
            </div>
            <div>
                <label>Declare Sale!</label>
                <button 
                    onClick={handleClick} 
                    name='sold'
                    disabled={disableInput}
                >
                    DECLARE
                </button>
            </div>
        </div>
    )
}))

export default Update