import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar-container'>
      <div className='navbar-brand'>
        <Link to="/">Brand-Name</Link>
      </div>

      <div className='navbar-items'>
        <Link>Home</Link>
        <Link>About</Link>
        <Link>Company</Link>
        <Link>Services</Link>
        <Link>Contact</Link>
      </div>
    </nav>

  );
};

export default Navbar;
