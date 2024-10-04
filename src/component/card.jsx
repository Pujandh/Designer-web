import React from 'react'
import './Card.css'
import Discoverbutton from './Discoverbutton'

const Card = () => {
  return (
    <div className='Card'>
      <h3>WE PROVIDE EVERYTHING</h3>
      <div className='interior-designer'>
      <h1 className='interior'>INTERIOR</h1> <h1 className='designer'>DESIGNER</h1>
      </div>
      <Discoverbutton className = 'discoverbutton' buttname='Discover Button'/>
      
    </div>
  )
}

export default Card

