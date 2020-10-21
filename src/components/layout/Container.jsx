import React, { Fragment } from 'react'
import {Route} from 'react-router-dom'
import { observer } from 'mobx-react'
import Clients from '../clients/Clients'
import Actions from '../actions/Actions'
import Analytics from '../analytics/Analytics'

const Container = observer((props) => {

    return (
        <Fragment>
            <Route exact path='/' 
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
})

export default Container