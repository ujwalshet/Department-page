import React from 'react'
import {link} from "react-router-dom";

function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar-logo'>
                Devtamin
            </div>
            <ul className='navbar-menu'>
                <li><a href="/">home</a></li>
            </ul>
        </div>
    )
}

export default Navbar