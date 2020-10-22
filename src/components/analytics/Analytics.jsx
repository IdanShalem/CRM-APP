import React from 'react'
import { observer, inject } from 'mobx-react'
import NewClients from './NewClients'
import EmailsSents from './EmailsSents'
import HottestCountry from './HottestCountry'
import OutstandingClients from './OutstandingClients'
import TopEmployee from './Charts/TopEmployee'
import SalesByCountry from './Charts/SalesByCountry'
import SalesByDay from './Charts/SalesByDay'


const Analytics = inject('company')(observer((props) => {

    const { company } = props

    return (
        <div>
            <NewClients />
            <EmailsSents />
            <OutstandingClients />
            <HottestCountry />
            <TopEmployee />
            <SalesByCountry />
            <SalesByDay />
        </div>
    )
}))

export default Analytics