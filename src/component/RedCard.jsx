import React from 'react'
import './RedCard.css'

const RedCard = ({icon,description,location}) => {
  return (
    <div className='redbox'>
      <p className='icon-red'>{icon}</p>
      <p>{description}</p>
      <p>{location}</p>
    </div>
  )
}

export default RedCard