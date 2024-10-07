import React from 'react'
import './Topcard.css'

const Topcard = ({redtext,whitetext}) => {
  return (<div className='container-topcard'>
    <div className='topcard1' >
        <h1 style={{color:'rgb(202, 61, 61)',display:'inline'} }>{redtext}</h1>
        <h1 style={{display:'inline'}}>{whitetext}</h1></div>
        <div className='content'>Lorem ipsum dolor sit amet,<br></br> consectetur 
        adipiscing elit, sed do eiusmod keoi tempor<br></br>
         incididunt ut labore et dolore magna aliqua.</div>
      
    </div>
  )
}

export default Topcard
