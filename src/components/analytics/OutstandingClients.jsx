import React from 'react'
import { observer, inject } from 'mobx-react'


const OutstandingClients = inject('company')(observer((props) => {

    const { company } = props

    return (
        <div>
            Outstanding Clients:
            {company.outstandingClients}
        </div>
    )
}))

export default OutstandingClients