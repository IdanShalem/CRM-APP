import React from 'react'
import moment from 'moment'
import Badge from './Badge'
import { Grid, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    badges: {
        marginBottom: '15px',
        height: '15vh'
    }
})

const Badges = () => {

    const date = `${moment().format('MMMM')}`.toLowerCase()

    const classes = useStyles()

    return (
        <Grid item xs={12} container className={classes.badges}>
            <Grid item xs={12} sm={6} md={3}>
                <Badge 
                    color='#2ecc71' 
                    title={`New ${date} clients`} 
                    data='newClients' 
                    badge='chart' 
                />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Badge 
                    color='#3498db' 
                    title={`Emails sent`} 
                    data='emailsSents' 
                    badge='email' 
                />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Badge 
                    color='#e74c3c' 
                    title={`Outstanding clients`} 
                    data='outstandingClients' 
                    badge='client' 
                />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Badge 
                    color='#f1c40f' 
                    title={`Hottest country`} 
                    data='hottestCountry' 
                    badge='globe' 
                />
            </Grid>
        </Grid>
    )
}

export default Badges