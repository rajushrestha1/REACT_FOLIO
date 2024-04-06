
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
            <img src='library_icon.png' alt='' />
        </div>
        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="#home" className="navbar-link">Home</a>
            </li>
            <li className="navbar-item">
              <a href="#about" className="navbar-link">About Me</a>
            </li>
            <li className="navbar-item">
              <a href="#portfolio" className="navbar-link">Portfolio</a>
            </li>
            <li className="navbar-item">
              <a href="#testimonial" className="navbar-link">Testimonial</a>
            </li>
            <li className="navbar-item">
             <button a href="#contact" className="navbar-link">Contact Me</button>
            </li>
          </ul>
        </div>
        <div className="navbar-toggle" onClick={toggleNavbar}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

