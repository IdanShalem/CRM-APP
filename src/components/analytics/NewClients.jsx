import React from 'react'
import { observer, inject } from 'mobx-react'


const NewClients = inject('company')(observer((props) => {

    const { company } = props

    return (
        <div>
            New Clients:
            {company.newClients}
        </div>
    )
}))

export default NewClients