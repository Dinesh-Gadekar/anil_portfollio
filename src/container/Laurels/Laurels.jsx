import React from 'react';
import { images } from '../../constants';
import './Laurels.css';
import { SubHeading } from '../../components';

const Laurels = () => (
  <div className='laurels'>
    <div className='left_div'>
    <SubHeading title="Awards & recognition"  />
    <h1>Our Laurels</h1>
    <table>
      <tr>
        <td><img src={images.award01 }alt="award01"></img></td>
        <td><p><h2>Bib Gourmond </h2>Lorem ipsum dolor sit amet, consectetur.</p></td>
        <td><img src={images.award02} alt='award02'/></td>
        <td><p><h2>Rising Star</h2> Lorem ipsum dolor sit amet, consectetur.</p></td>
      </tr>
      <tr>
        <td><img src={images.award03} alt="award03" /></td>
        <td><p><h2>AA Hospitality</h2> Lorem ipsum dolor sit amet, consectetur.</p></td>
        <td><img src={images.award05} alt="award05" /></td>
        <td><p><h2>Outstanding Chef</h2> Lorem ipsum dolor sit amet, consectetur.</p></td>
      </tr>
    </table>
    </div>
    
    <div className='right_div'>
    <img src={images.laurels} alt='lauraels'/>
    </div>
  </div>
);

export default Laurels;
