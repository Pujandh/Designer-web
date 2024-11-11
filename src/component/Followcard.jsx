import React from 'react';
import Followlink from './followlink';
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import './Followcard.css';

const Followcard = () => {
  return (
    <div className='followus'>
      <h2>Follow Us</h2>
      <Followlink 
        icon={<FaFacebook />} 
        desc='Facebook' 
        url='https://www.facebook.com' 
      />
      <Followlink 
        icon={<FaTwitter />} 
        desc='Twitter' 
        url='https://www.twitter.com' 
      />
      <Followlink 
        icon={<FaLinkedin />} 
        desc='LinkedIn' 
        url='https://www.linkedin.com' 
      />
      <Followlink 
        icon={<FaSquareInstagram />} 
        desc='Instagram' 
        url='https://www.instagram.com' 
      />
    </div>
  );
};

export default Followcard;
