import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
    <div id="about">
  <div className='main_div'>
    <div className='left_div'>
      <h1 className='left_h1'> About Us </h1>
      <img src={images.about} alt='about_spoon' className='spoon_img_1'/>
      <p className='left_P'>
     Hi! I’m Anil Mane, a passionate graphic designer with a 
     love for creating visually
      compelling and meaningful designs. I specialize in
       branding, digital illustrations, UI/UX, and print design,
        helping businesses and individuals bring their ideas to life.
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
      <h1 className='left_h1'> Our Experience </h1>
      <img src={images.experience} alt='about_spoon' className='spoon_img_1'/>
      <p className='left_P'>
      <h3>Graphic Designer<br></br>
JSPM, Katraj, Pune</h3>
</p>
<p className='left_para'>October 2022 – July 2025</p>
      
      <button className='about-btn'>Know more</button>

      
    </div>
  </div>
  </div>
);

export default AboutUs;
