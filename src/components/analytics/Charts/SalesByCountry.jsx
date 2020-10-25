import React, { useState, useEffect } from 'react';
import { observer, inject } from 'mobx-react'
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
} from 'recharts';
import { Grid, Typography } from '@material-ui/core';

const SalesByCountry = inject('company')(observer((props) => {

  const { company } = props

  const [salesByCountries, setSalesByCountries] = useState([])

  const getCountries = async function() {
    const countries = await company.getSalesByCountry()
    return countries
  }

  useEffect(() => {
    getCountries()
      .then(countries => setSalesByCountries(countries))
  }, [])

    return (
      <Grid item xs={7} >
        <Typography variant='h6'>
          Sales by country
        </Typography>
        <ResponsiveContainer width="100%" height="85%">
              <BarChart
                  data={salesByCountries}
                  margin={{
                  top: 5, right: 30, left: 20, bottom: 5,
                  }}
              >
                  <XAxis type='category' dataKey="name"/>
                  <YAxis type='number'/>
                  <Tooltip cursor={{ strokeWidth: 1 }} />
                  <Bar dataKey="sales" fill="#955196" barSize={70}/>
              </BarChart>
          </ResponsiveContainer>
        </Grid>
    )
})) 

export default SalesByCountry