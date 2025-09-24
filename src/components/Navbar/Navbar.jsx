import React, { useState } from "react";
import { Link } from "react-scroll";

import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <img src="/logo.png" alt="FineDine Logo" />
      </div>

      {/* Hamburger Menu Button (Visible in Mobile) */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

     <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
  <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
  <li><Link to="about" smooth={true} duration={500}>About</Link></li>
  <li><Link to="menu" smooth={true} duration={500}>Projects</Link></li>
  <li><Link to="chef" smooth={true} duration={500}>Chef</Link></li>
  <li><Link to="gallery" smooth={true} duration={500}>Gallery</Link></li>
  <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
</ul>

      {/* Auth & Booking (Moves to Center on Mobile) */}
      <div className="navbar-auth">
        <a href="/login">Log In / Register</a>
        <span className="divider">|</span>
        <a href="/book-table">Book Table</a>
      </div>
    </nav>
  );
};

export default Navbar;
