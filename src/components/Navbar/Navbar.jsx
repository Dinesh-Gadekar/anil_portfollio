import React, { useState } from "react";
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

      {/* Navbar Links (Hidden in Mobile View) */}
      <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/awards">Awards</a></li>
        <li><a href="/contact">Contact</a></li>
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
