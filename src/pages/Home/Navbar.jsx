import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import GitHubIcon from '@mui/icons-material/GitHub';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
      <div className="navbar-container">
        <input type="checkbox" checked={menuOpen} onChange={handleMenuToggle} id="menu-toggle" />
        <label htmlFor="menu-toggle" className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
          <span className="line line4"></span>
          <span className="line line5"></span>
        </label>
        <div className="menu-items">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/aboutme" className="nav-link">
            About Me
          </Link>
          <Link to="/portfolio" className="nav-link">
            Portfolio
          </Link>
          <Link to="/testimonial" className="nav-link">
            Testimonial
          </Link>
          <Link to="/contact" className="nav-link">
            ContactMe
          </Link>
          <div className="btn-github">
          <a href="https://github.com/rajushrestha1"><button>GitHub
            <GitHubIcon />
            </button></a>
          
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;