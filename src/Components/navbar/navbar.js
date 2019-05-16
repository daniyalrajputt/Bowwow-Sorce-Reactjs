import React from 'react';
import './navbar.css';

function Navbar() {
  return (

    <div>
      <div className="navigation-bar">
        <div className="icon-box">
          <div className="icon"><img src={require('./../../assets/images/icon.png')} alt="Bow wow" /></div>
        </div>
        <div className="nav-menu">
          <div className="items"><a href="#">Home</a></div>
          <div className="items"><a href="#">Shop</a></div>
          <div className="items"><a href="#">Blog</a></div>
          <div className="items"><a href="#">About</a></div>
          <div className="items"><a href="#">Contact</a></div>
          <div className="nav-icons"><i className="fas fa-search"></i></div>
          <div className="nav-icons"><i className="fas fa-shopping-cart"></i></div>
          <div className="nav-icons"><i className="far fa-user"></i></div>
        </div>
      </div>
    </div>

  );
}

export default Navbar;
