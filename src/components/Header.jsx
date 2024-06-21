import React, { useState } from 'react'
import { headerNav } from '../constants/data';
import { Link } from "react-router-dom";

console.log(headerNav);
const Header = () => {
  
  const [show, setShow] = useState(true);
  const toggleMenu = ()=>{
    // setShow(true)
    setShow(prevShow =>(!prevShow));
  }

  return (
    <header id='header'>
      <div className='header__inner'>
        <div className='header__logo'>
          <h1>portfolio</h1>
        </div>
        
        <nav className={`header__nav ${show ? "show" : ""}`}>
          <ul>
            {
              headerNav.map((nav, idx)=>(
                <li key={idx}>
                  <a href={nav.url}>{nav.title}</a>
                </li>
              ))
            }
          </ul>
        </nav>
        <div className='header__nav__mobile' id='headerToggle' tabIndex="0" onClick={toggleMenu}><span></span></div>
      </div>
    </header>
  )
}

export default Header