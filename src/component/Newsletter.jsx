import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div><div className='wrapper'>
      <h2 className='newsletter'>Subscribe To Our NewsLetter</h2>
      <div className='input-wrapper'>
      <input className='newsletter-input' placeholder='Type your email..'></input>
      <button className='newsletter-button'>Search &rarr;</button>
      </div>
      </div>
    </div>
  )
}

export default Newsletter
