import React, { useState } from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import logo from '../assets/logo.png' 

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        setButton(window.innerWidth <= 960)
    }

    window.addEventListener('resize', showButton)

    return (
        <div className='navbar-navigator'>
            <Link to="/" className="navbar-logo">
                <img src={logo} alt="" className='logo' /> <b>AuroraCraft SMP</b>
            </Link>

            <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                    About
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/rules' className='nav-links' onClick={closeMobileMenu}>
                    Rules
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/vote' className='nav-links' onClick={closeMobileMenu}>
                    Vote
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/staff' className='nav-links' onClick={closeMobileMenu}>
                    Staff
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/store' className='nav-links' onClick={closeMobileMenu}>
                    Store
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar