import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) => {

    return (
        <div>
            <Link to='/'>Clients</Link>
            <Link to='/actions'>Actions</Link>
            <Link to='/analytics'>Analytics</Link>
        </div>
    )
}

export default NavBar