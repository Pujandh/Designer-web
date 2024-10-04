import React from 'react'
import './Trending.css'
import Topcard from '../component/Topcard'
const Trending = () => {
  return (
    <div>
      <Topcard redtext='Check ' whitetext = 'Trending Work'/>
      <div className='gridContainer'>
      <img src='../../images/bedroom.jpeg' className='grid-image'></img>
      <img src='../../images/chair.jpg' className='grid-image'></img>
      <img src='../../images/circlemirror.jpg' className='grid-image'></img>
      <img src='../../images/dinnertable.jpg' className='grid-image'></img>
      <img src='../../images/exteriordesign.jpeg' className='grid-image'></img>
      <img src='../../images/interiorbed.jpg' className='grid-image'></img>
      <img src='../../images/specificinterior.jpg' className='grid-image'></img>
      <img src='../../images/cozydark.jpeg' className='grid-image'></img>
      </div>
    </div>
  )
}

export default Trending
