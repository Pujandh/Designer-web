import React from 'react'
import './Aboutuscard.css'

const AboutUsCard = ({icon, desc}) => {
  return (
    <div className='about-wrap'>
      <p>{icon}</p>
      <p>{desc}</p>
    </div>
  )
}

export default AboutUsCard
