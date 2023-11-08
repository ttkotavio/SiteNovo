import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
  return (
    <header className="page-header">
      <nav>
        <ul>
        <Link className="links" to="/"><li>Home</li> </Link>
        <Link className="links" to="/misterio"><li>Supresa?</li></Link>
        <Link className="links" to="/tinder"><li>Tinder</li></Link>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderComponent;
