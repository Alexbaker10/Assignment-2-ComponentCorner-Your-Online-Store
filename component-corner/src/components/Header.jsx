import React from 'react';
import './Header.css';

function Header({ storeName }) {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">{storeName}</h1>
        <nav className="nav-menu">
          <a href="#" className="nav-link">Shop</a>
          <a href="#" className="nav-link">About</a>
          <a href="#" className="nav-link">Contact</a>
          <button className="cart-btn">Cart (0)</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;