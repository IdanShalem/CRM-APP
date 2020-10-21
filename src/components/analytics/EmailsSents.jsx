import React from 'react'
import { observer, inject } from 'mobx-react'


const EmailsSents = inject('company')(observer((props) => {

    const { company } = props

    return (
        <div>
            Emails Sents:
            {company.emailsSents}
        </div>
    )
}))

export default EmailsSents