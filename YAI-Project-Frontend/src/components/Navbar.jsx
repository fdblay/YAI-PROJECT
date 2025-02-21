import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
import { BiMenu } from 'react-icons/bi';


const Navbar = () => {
const [showNavbar, setShowNabar] = useState(false)

const handleShowNavbar = () => {
  setShowNabar(!showNavbar)
}

  return (
    <nav className='navbar'>
      <div className='container'>
        <div className='navbar-brand'>
          <Link to="/" id='logo'>Fatimush-Natural Spices</Link>
        </div>
        <div className='menu-icon' onClick={handleShowNavbar}>
          <BiMenu />
        </div>

        <div
          className={`navbar-items ${showNavbar && 'active'}`}
        >
          <ul>
            <li><NavLink to="/hero">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/company">Company</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          {/* <Link id='items'>Home</Link>
        <Link id='items'>About</Link>
        <Link id='items'>Company</Link>
        <Link id='items'>Services</Link>
        <Link id='items'>Contact</Link> */}
        </div>
        {/* <button aria-labelledby='Menu Toggle Button'>
          
          <BiMenu />
        </button> */}
      </div>

    </nav>

  );
};

export default Navbar;
