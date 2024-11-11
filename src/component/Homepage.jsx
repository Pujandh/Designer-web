import React, { useRef } from 'react';
import './Homepage.css';
import Card from './Card';
import Footerbottom from './Footerbottom';
import image from '../../images/chair.jpg';
import Searchsection from './Searchsection';
import InteriorDesignCard from './InteriorDesignCard';

const Homepage = () => {
  const buttonRef = useRef(null); // Initialize useRef properly

  return (
    <div>
      <div className='homepage'>
        <Card buttonRef={buttonRef} /> {/* Pass ref to Card */}
      </div>
      <Searchsection />
      <div className='interior-container' ref={buttonRef}>
        <div className='home-image-container'>
          <h2 className='home-headerAbout-2'>
            EXPLORE SOME OF OUR LATEST
            <div className='home-interior'>INTERIOR DESIGN WORK</div>
          </h2>
          <img src={image} className='sampleimage' alt='Interior Design Sample' /> {/* Add alt attribute */}
        </div>
        <div className='home-interior-card'>
          <InteriorDesignCard />
        </div>
      </div>
      <Footerbottom />
    </div>
  );
};

export default Homepage;
