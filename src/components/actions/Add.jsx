import React, { useState } from 'react'
import { observer, inject } from 'mobx-react'

const Add = inject('company')(observer((props) => {

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
        <div>
            <h3>ADD CLIENT</h3>
            <div>
                <label htmlFor="">First name:</label>
                <input type="text" name='firstName' value={input.firstName} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="">Surname:</label>
                <input type="text" name='surName' value={input.surName} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="">Country:</label>
                <input type="text" name='country' value={input.country} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="">Email:</label>
                <input type="text" name='email' value={input.email} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="">Owner:</label>
                <input type="text" name='owner' value={input.owner} onChange={handleChange} />
            </div>
            <button onClick={handleSubmit}>Add New Client</button>
        </div>
    )
}))

export default Add