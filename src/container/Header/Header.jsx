import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

import { Mail } from 'lucide-react';

const Header = () => (
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
      "Our restaurant, nestled in the heart of Pune, 
      offers a culinary journey through diverse flavors.
       Experience a symphony of tastes with our expertly crafted dishes, 
       prepared using fresh, local ingredients."

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
);

export default Header;
