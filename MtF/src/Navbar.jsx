import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
      <Link to="/" className="nav-logo">Max the Fotograf</Link>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/portfolio" className="nav-link" onClick={closeMenu}>Portfolio</Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link" onClick={closeMenu}>Usługi</Link>
          </li>
          <li className="nav-item">
            <Link to="/prints" className="nav-link" onClick={closeMenu}>Wydruki</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={closeMenu}>Kontakt</Link>
          </li>
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
