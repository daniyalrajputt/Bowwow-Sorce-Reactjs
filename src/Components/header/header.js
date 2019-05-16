import React from 'react';
import './header.css';

function Header() {
    return (
        <div className="header-img">
            <img src={require('./../../assets/images/header.png')} alt=""/>
        </div>
    );
}

export default Header;
