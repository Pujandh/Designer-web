import React from 'react'
import './InteriorDesign.css'

const Interiordesign = ({title,address,date,description}) => {
  return (
    <div className='interior-design-container'>
      <h2>{title}</h2>
      <p>📅{date}</p>
      <p>🏠{address}</p>
      <p>{description}</p>
      <br></br>
    </div>
  )
}

export default Interiordesign
