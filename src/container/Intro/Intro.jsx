import React from 'react';
import meal from '../../assets/meal.mp4'; // Adjust the path as per your project structure
import './Intro.css';

const Intro = () => (
  <div>
    <video style={{ width: "100%", height: "auto" }} controls>
      <source src={meal} type="video/mp4" />
      
    </video>
  </div>
);

export default Intro;
