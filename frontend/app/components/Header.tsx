'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <a href="/" className="header-logo" onClick={closeMenu}>
            ReparandoPC
          </a>
          
          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className={`menu-icon ${isMenuOpen ? 'menu-icon-open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>

          <nav className={`header-nav ${isMenuOpen ? 'header-nav-open' : ''}`}>
            <a href="/" className="nav-link" onClick={closeMenu}>
              Inicio
            </a>
            <a href="/servicios" className="nav-link" onClick={closeMenu}>
              Servicios
            </a>
            <a href="/sobre-mi" className="nav-link" onClick={closeMenu}>
              Sobre mí
            </a>
            <a href="/contacto" className="nav-link" onClick={closeMenu}>
              Contacto
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

