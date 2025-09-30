import React, { useState } from 'react'
import { Button } from './Button';
import { Link } from 'react-router-dom'
import './Navigation.css';

function Navigation() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  };

  window.addEventListener('resize', showButton)

  return (
    <>
      <nav className='navbar'>
          <div className='navbar-navigator'>
              <Link to="/" className="navbar-logo">
                  <i className="fab fa-typo3" onClick={closeMobileMenu}></i> AuroraCraft
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
      </nav>
    </>
  )
}

export default Navigation