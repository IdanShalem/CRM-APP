import React, { useEffect } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import './App.css';
import NavBar from './components/layout/NavBar'
import Container from './components/layout/Container'
import Grid from '@material-ui/core/Grid'

const App = inject('company')(observer((props) => {

  const { company } = props

  useEffect(() => {
    company.loadData()
  }, [])

  return (
    <Router>
      <Grid className="App" container justify='center'>
        <NavBar />
        <Container />
      </Grid>
    </Router>
  )
}))

export default App;
