import React from 'react'
import { observer, inject } from 'mobx-react'
import NewClients from './NewClients'
import EmailsSents from './EmailsSents'
import HottestCountry from './HottestCountry'
import OutstandingClients from './OutstandingClients'


const Analytics = inject('company')(observer((props) => {

    const { company } = props

    return (
        <div>
            <NewClients />
            <EmailsSents />
            <OutstandingClients />
            <HottestCountry />
        </div>
    )
}))

export default Analytics