import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <nav className="navbar">
        <a href="home" className="nav-logo">Max the Fotograf</a>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="portfolio" className="nav-link" onClick={closeMenu}>Portfolio</a>
          </li>
          <li className="nav-item">
            <a href="services" className="nav-link" onClick={closeMenu}>Usługi</a>
          </li>
          <li className="nav-item">
            <a href="prints" className="nav-link" onClick={closeMenu}>Wydruki</a>
          </li>
          <li className="nav-item">
            <a href="contact" className="nav-link" onClick={closeMenu}>Kontakt</a>
          </li>
          {/* <li className="nav-item">
            <a href="blog" className="nav-link" onClick={closeMenu}>Blog</a>
          </li> */}
        </ul>
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
