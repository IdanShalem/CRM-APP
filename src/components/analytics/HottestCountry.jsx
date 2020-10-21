import React from 'react'
import { observer, inject } from 'mobx-react'


const hottestCountry = inject('company')(observer((props) => {

    const { company } = props

    return (
        <div>
            Hottest Country:
            {company.hottestCountry}
        </div>
    )
}))

export default hottestCountry