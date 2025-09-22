import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='main_div'>
    <div className='left_div'>
      <h1 className='left_h1'> About Us </h1>
      <img src={images.spoon} alt='about_spoon' className='spoon_img_1'/>
      <p className='left_P'>
      Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. 
        Quis Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. 
        In Sed Odio Nec Aliquet Eu Proin Mauris Et.
      </p>
      <button className='about-btn'>Know more</button>

      
    </div>

    <div className='image-container'>
      <img src={images.G} className='g' alt='G'/>
      <div className='knife'>
      <img src={images.knife} alt='knife'/>
      </div>
    
    </div>

    <div className='left_div'>
      <h1 className='left_h1'> Our History </h1>
      <img src={images.spoon} alt='about_spoon' className='spoon_img_1'/>
      <p className='left_P'>
      Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. 
        Quis Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. 
        In Sed Odio Nec Aliquet Eu Proin Mauris Et.
      </p>
      <button className='about-btn'>Know more</button>

      
    </div>
  </div>
);

export default AboutUs;
