import React, { useState, useEffect } from 'react';
import { observer, inject } from 'mobx-react'
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

const TopEmployee = inject('company')(observer((props) => {

  const { company } = props

  const [topEmployees, setTopEmployees] = useState([])

  const getTop = async function() {
    const top = await company.getTopEmployees()
    return top
  }

  useEffect(() => {
    getTop()
      .then(storeTopEmployees => setTopEmployees(storeTopEmployees))
  }, [])

    return (
      <ResponsiveContainer width="100%" height={400}>
          <BarChart
              data={topEmployees}
              layout="vertical"
              margin={{
              top: 5, right: 30, left: 20, bottom: 5,
              }}
          >
            <XAxis type='number'/>
            <YAxis type='category' dataKey="name"/>
            <Tooltip cursor={{ strokeWidth: 1 }} />
            <Legend />
            <Bar dataKey="sales" fill="#003f5c" barSize={40}/>
          </BarChart>
      </ResponsiveContainer>
    )
})) 

export default TopEmployee
