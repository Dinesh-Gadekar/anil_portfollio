import React from 'react';
import { images } from '../../constants';
import './Chef.css';
import { SubHeading } from '../../components';
import "./Chef.css"
import { RiDoubleQuotesL } from "react-icons/ri";
const Chef = () => (
  <div className='chef'>
    <div className='chef_img'>
      <img src={images.chef} alt='chef'></img>
    </div>
    <div className='sub_head'>
      <SubHeading title="Chef's World" style={{}}/>
      <h1 className='heading'> What We Believe In</h1>
      <p className='paragraph'>
      <RiDoubleQuotesL style={{fontSize:"35px"}} /> Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Auctor Sit.
Auctor Sit Iaculis In Arcu. Vulpate Nulla Lobortis Mauris Eget Sit. Nulla Scelerisque
Scelerisque Congue Ac Consequat, Aliquam Molestie Lectus Eu. Congue Iaculis Integer
Curabitur Semper Sit Nunc.
      </p>
      <p className='sec_p'>
        KeVin Luo
      </p>
      <h4 className='heading_2'>Chef & Founder<br/></h4>
    </div>
    
    <div className='sign_img'>
      <img src={images.sign} alt="sign"  style={{width:"500%", paddingTop:"500px",marginLeft:-400}}/>
    </div>
  </div>
);

export default Chef;
