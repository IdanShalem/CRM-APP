import React from 'react'
import { observer, inject } from 'mobx-react'
import { faChartLine, 
    faEnvelope, 
    faGlobeAmericas, 
    faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Typography } from '@material-ui/core';

const EmailsSents = inject('company')(observer((props) => {

    const { company, title, data, badge, color } = props

    const badgesData = {
        chart: <FontAwesomeIcon icon={faChartLine} className='badge'/>,
        email: <FontAwesomeIcon icon={faEnvelope} className='badge'/>,
        client: <FontAwesomeIcon icon={faUserCircle} className='badge'/>,
        globe: <FontAwesomeIcon icon={faGlobeAmericas} className='badge'/>
    }

    return (
        <div className='badges-card'>
            <div className='badges-circle' style={{backgroundColor: color}}>
                {badgesData[badge]}
            </div>
            <Typography variant='h4' className='badge-data'>
                {company[data]}
            </Typography>
            <Typography variant='h6' className='badge-title'>
                {title}
            </Typography>
            
            
        </div>
    )
}))

export default EmailsSents