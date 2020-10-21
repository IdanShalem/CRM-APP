import React from 'react'
import { observer, inject } from 'mobx-react'

const Clients = inject('company')(observer((props) => {

    const { company, client } = props

    const [firstName, surName] = client.name.split(' ')

    return (
        <div>
            <span>{firstName}</span>
            <span>{surName}</span>
            <span>{client.country}</span>
            <span>{client.firstContact}</span>
            <span>{client.emailType ? client.emailType : '-'}</span>
            <span>{client.sold ? 'V' : 'X'}</span>
            <span>{client.owner}</span>
        </div>
    )
}))

export default Clients