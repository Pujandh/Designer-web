import React from 'react'
import './followlink.css'

const Followlink = ({icon,desc}) => {
  return (
    <div className='followLink'>
        <p>{icon}</p>
        <p>{desc}</p>
      
    </div>
  )
}

export default Followlink
