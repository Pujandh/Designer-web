import React from 'react';
import './Trending.css';
import Topcard from '../component/Topcard';
import Footer from '../component/Footer';
import Footerbottom from '../component/Footerbottom';

const Trending = () => {
  return (
    <div>
      {/* Topcard component */}
      <Topcard redtext='Check ' whitetext='Trending Work' />

      {/* Grid layout for displaying images */}
      <div className='gridContainer'>
        <img src='../../images/bedroom.jpeg' className='grid-image' alt='Bedroom' onError={(e) => e.target.src = '/images/default.jpg'} />
        <img src='../../images/chair.jpg' className='grid-image' alt='Chair' onError={(e) => e.target.src = '/images/default.jpg'} />
        <img src='../../images/circlemirror.jpg' className='grid-image' alt='Circle Mirror' onError={(e) => e.target.src = '/images/default.jpg'} />
        <img src='../../images/dinnertable.jpg' className='grid-image' alt='Dinner Table' onError={(e) => e.target.src = '/images/default.jpg'} />
        <img src='../../images/exteriordesign.jpeg' className='grid-image' alt='Exterior Design' onError={(e) => e.target.src = '/images/default.jpg'} />
        <img src='../../images/interiorbed.jpg' className='grid-image' alt='Interior Bed' onError={(e) => e.target.src = '/images/default.jpg'} />
        <img src='../../images/specificinterior.jpg' className='grid-image' alt='Specific Interior' onError={(e) => e.target.src = '/images/default.jpg'} />
        <img src='../../images/cozydark.jpeg' className='grid-image' alt='Cozy Dark' onError={(e) => e.target.src = '/images/default.jpg'} />
      </div>

      {/* Footer and bottom footer components */}
      <Footer />
      <Footerbottom />
    </div>
  );
}

export default Trending;

