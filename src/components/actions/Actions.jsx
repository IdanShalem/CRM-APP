import React from 'react'
import { observer, inject } from 'mobx-react'
import Add from './Add'
import Update from './Update'


const Actions = inject('company')(observer((props) => {

    return (
        <div>
            <Update />
            <Add />
        </div>
    )
}))

export default Actions