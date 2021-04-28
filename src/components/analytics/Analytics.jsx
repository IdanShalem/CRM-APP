import React from 'react'
import { Grid } from '@material-ui/core'
import Badges from './Badges'
import Charts from './Charts'

const Analytics = () => {

    return (
        <Grid item xs={11} container>
            <Badges />
            <Charts />
        </Grid>
    )
}

export default Analytics