import React, { Fragment } from 'react'
import {Redirect, Route} from 'react-router-dom'
import Clients from '../clients/Clients'
import Actions from '../actions/Actions'
import Analytics from '../analytics/Analytics'

const Container = () => {

    return (     
        <Fragment>
            <Route exact path='/'>
                <Redirect to='/clients/0/10' />
            </Route>
            <Route exact path='/clients/:page/:rowsPerPage' 
                render={({ match }) => 
                    <Clients 
                        match={match} 
                    />
                }
            />
            <Route exact path='/actions' 
                render={({ match }) => 
                    <Actions 
                        match={match} 
                    />
                }
            />
            <Route exact path='/analytics' 
                render={({ match }) => 
                    <Analytics 
                        match={match} 
                    />
                }
            />
        </Fragment>
    )
}

export default Container