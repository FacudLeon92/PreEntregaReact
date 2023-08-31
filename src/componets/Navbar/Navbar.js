import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

function Navbar() {
  return (
    <div className='nav-container'>
      <nav className='navbar'>
      <h1 className='inicio'>Inicio</h1>
        <Link className='seeCarrito' to={""}>
          🛒
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
