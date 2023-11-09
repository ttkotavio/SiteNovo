import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const HeaderComponent = ({ style }) => {
  // Determina a classe CSS com base na propriedade "style"
  const headerClass = style === 1 ? 'header-style-1' : 'header-style-2';

  return (
    <header className={`page-header ${headerClass}`}>
      <nav>
        <ul>
          <Link className="links" to="/"><li>Home</li></Link>
          <Link className="links" to="/lista"><li>Lista</li></Link>
          <Link className="links" to="/tinder"><li>Tinder</li></Link>
          <Link className="links" to="/misterio"><li>Surpresa?</li></Link>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderComponent;
