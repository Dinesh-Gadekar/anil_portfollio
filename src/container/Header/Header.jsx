import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

import { Mail } from 'lucide-react';

const Header = () => (
    <div id="home">
  <div className='header_class'>
    <div className="app_class">
      <h1 className='app_header_one'>Anil Mane</h1>
      <SubHeading title="Graphic Designer"/>
        <p className="app_email">
        <a href="mailto:nilmane1013@gmail.com">
          <Mail className="mail_icon" /> 
          nilmane1013@gmail.com
        </a>
      </p>
     <p className='app_paragraph'>
  Hi, I’m <strong>Anil Mane</strong>, a passionate <strong>Graphic Designer</strong> with experience in creating visually compelling designs for digital and print media. I specialize in <strong>branding, UI/UX, and illustrations</strong>, turning ideas into impactful visual experiences.
</p>

      <button type='button' className='header_btn'>
        Explore Menu..
      </button>
    </div>

    <div className='header_class_img'>
      <img src={images.welcome} className='header_img' alt='header img'>
      </img>
    </div>
  </div>
  </div>
);

export default Header;
