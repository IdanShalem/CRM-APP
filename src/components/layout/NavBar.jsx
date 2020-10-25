import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'
import { Grid } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
      top: 0,
      zIndex: 9999,
      marginBottom: '80px'
    },
    bar:{
        backgroundColor: '#0a1612',
    },
    button: {
        marginRight: theme.spacing(2),
        color: 'inherit'
    },
    links: {
        textDecoration: 'none',
        color: 'grey'
    },
      pressed: {
          color: 'white'
    }
}))

const NavBar = () => {

    const classes = useStyles()
    let location = useLocation().pathname

    return (
        <Grid item xs={12} container className={classes.root}>
            <AppBar position='fixed' className={classes.bar}>
                <Toolbar>
                    <MenuItem>
                        <Button className={classes.button}>
                            <Link to='/' className={`${classes.links} ${location.includes('/clients') && classes.pressed}`}>
                                Clients
                            </Link>
                        </Button>
                    </ MenuItem>
                    <MenuItem>
                        <Button className={classes.button}>
                            <Link to='/actions' className={`${classes.links} ${location === '/actions' && classes.pressed}`}>
                            Actions
                            </Link>
                        </Button>
                    </ MenuItem>
                    <MenuItem>
                        <Button className={classes.button}>
                            <Link to='/analytics' className={`${classes.links} ${location === '/analytics' && classes.pressed}`}>
                                Analytics
                            </Link>
                        </Button>
                    </ MenuItem>
                </Toolbar>
            </AppBar>
        </Grid>
    )
}

export default NavBar