import React from 'react'
import { observer, inject } from 'mobx-react'

const Client = inject('company')(observer((props) => {

    const { company, client } = props

    const [firstName, surName] = client.name.split(' ')

    return (
        <div>
            <span>{firstName}</span>&ensp;
            <span>{surName}</span>&ensp;
            <span>{client.country}</span>&ensp;
            <span>{client.firstContact}</span>&ensp;
            <span>{client.emailType ? client.emailType : '-'}</span>&ensp;
            <span>{client.sold ? 'V' : 'X'}</span>&ensp;
            <span>{client.owner}</span>
        </div>
    )
}))

export default Client