import React, { useState, useEffect, Fragment } from 'react';
import { observer, inject } from 'mobx-react'
import {
  LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import { Typography } from '@material-ui/core';

const SalesByDay = inject('company')(observer((props) => {

  const { company } = props

  const [salesByDay, setSalesByDay] = useState([])

  const getSales = async function() {
    const sales = await company.getSalesByDay()
    return sales
  }

  useEffect(() => {
    getSales()
      .then(sales => setSalesByDay(sales))
  }, [])

    return (
      <Fragment>
        <Typography variant='h6'>
          Sales by day of the month
        </Typography>
        <ResponsiveContainer width="100%" height="85%">
          <LineChart
            data={salesByDay}
            margin={{
              top: 5, right: 30, left: 20, bottom: 5,
            }}
          >
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="sales" stroke="#ff6e54" activeDot={{ r: 4 }} barSize={200} />
          </LineChart>
        </ResponsiveContainer>
      </Fragment>
    )
})) 

export default SalesByDay