import React from 'react'

const Discoverbutton = ({buttname , onClick}) => {
  return (
    <div>
      <button className='discoverButton' onClick={onClick} >{buttname}</button>
    </div>
  )
}

export default Discoverbutton
