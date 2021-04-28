import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import TopEmployee from './Charts/TopEmployee'
import SalesByCountry from './Charts/SalesByCountry'
import SalesByDay from './Charts/SalesByDay'

const useStyles = makeStyles({
    topCharts: {
        height: '32vh',
        marginTop: '15px'
    },
    bottomCharts: {
        height: '32vh',
        marginTop: '15px'
    }
})

const Charts = () => {

    const classes = useStyles()

    return (
        <Grid item xs={12} container>
            <Grid item xs={12} container className={classes.topCharts}>
                <TopEmployee/>
                <SalesByCountry />
            </Grid>
            <Grid item xs={12} className={classes.bottomCharts}>
                    <SalesByDay />
            </Grid>
        </Grid>
    )
}

export default Charts