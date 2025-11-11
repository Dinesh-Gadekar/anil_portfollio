import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';
import { Link } from "react-scroll";

const Experience = () => (
   <div id="about">
  <div id="experience" className="experience">
    <div className="experience__container">

      {/* ===== Experience Section ===== */}
      <div className="experience__content">
        <h1 className="experience__title">Experience</h1>
        <img src={images.experience} alt="experience_icon" className="experience__icon" />

        <div className="experience__list">
          <div className="experience__item">
            <h3>Graphic Designer</h3>
            <p className="experience__company">JSPM, Katraj, Pune</p>
            <p className="experience__date">October 2022 – July 2025</p>
            <p className="experience__desc">
              Worked on branding, digital design, and promotional materials for college events, 
              enhancing visual identity and user engagement.
            </p>
          </div>

          <div className="experience__item">
            <h3>Freelance Designer</h3>
            <p className="experience__company">Remote / Independent</p>
            <p className="experience__date">August 2025 – Present</p>
            <p className="experience__desc">
              Collaborating with clients to create professional designs for print, web, and 
              social media—helping brands communicate visually.
            </p>
          </div>
        </div>

        <button className="experience__btn"><Link to="projects" smooth={true} duration={500}>View Projects</Link></button>
      </div>

      {/* ===== Right Image / Graphic ===== */}
      <div className="experience__image">
        <img src={images.G} alt="G letter" className="experience__bg" />
        <div className="experience__overlay">
          {/* <img src={images.knife} alt="decorative" /> */}
        </div>
      </div>
    </div>
  </div>
  </div>
);

export default Experience;
