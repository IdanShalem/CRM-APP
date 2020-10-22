import React from 'react'
import { observer, inject } from 'mobx-react'
import Headers from './Headers'
import Client from './Client'

const Clients = inject('company')(observer((props) => {

    const { company } = props

    return (
        <div>
            <input type='text' placeholder='Search' />
            <button>Submit</button>
            <Headers />
            {company.clients.length > 0
                ? company.clients.map( c =>  <Client key={c.id} client={c} /> )
                : 'HELLO WORLD'
            }
        </div>
    )
}))

export default Clients