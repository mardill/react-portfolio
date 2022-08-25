import React from 'react';

import '../styles/Header.css';


function Header() {
  return (
    <header className="header">
        <h1>Mary Dillon</h1>
        <nav>
            <a href="#about">about</a>
            <a href="#work">work</a>
            <a href="#contact">contact</a>
        </nav>
    </header>
  );
}

export default Header;
