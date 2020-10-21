import React, { useEffect } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import './App.css';
import clientsData from './data.json'
import NavBar from './components/layout/NavBar'
import Container from './components/layout/Container'

const App = inject('company')(observer((props) => {

  const { company } = props

  useEffect(() => {
    company.loadData(clientsData)
  }, [])

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Container />
      </div>
    </Router>
    
  );
}))

export default App;
