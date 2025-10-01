import React from 'react'
import './Navbar.css'
import logo from '../assets/logo.png' 

const Navbar = () => {
  return (
    <div className='navbar-navigator'>
        <img src={logo} alt="" className='logo' />
        <ul className='nav-menu'>
            <li className='nav-item'>Home</li>
            <li className='nav-item'>About</li>
            <li className='nav-item'>Rules</li>
            <li className='nav-item'>Vote</li>
            <li className='nav-item'>Staff</li>
            <li className='nav-item'>Store</li>
        </ul>
    </div>
  )
}

export default Navbar