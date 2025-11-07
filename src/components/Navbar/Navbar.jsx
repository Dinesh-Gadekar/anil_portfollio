import React, { useState } from "react";
import { Link } from "react-scroll";
import { images } from '../../constants';

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
  <li><Link to="services" smooth={true} duration={500}>Services</Link></li>

  <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
  <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
</ul>

     
       <div className='site_logo_img'>
            <img src={images.site_logo} className='site_logo_img' alt='hsite_logo_img'>
            </img>
          </div>
    </nav>
  );
};

export default Navbar;
