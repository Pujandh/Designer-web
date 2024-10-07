import React from 'react'
import './Contactform.css'
import InputField from './InputField'

const Contactform = () => {
  return (
    <div >
      <form className='form'>
        <div className='grid-form'>
        <div className='grid-item'><InputField desc='First Name*'  /></div>
        <div className='grid-item'><InputField desc = 'Last Name*'/></div>
        <div className='grid-item'><InputField desc = 'Your Email' type='email'/></div>
        <div className='grid-item'><InputField desc='Subject*'/></div>
        </div>
        <textarea placeholder='Message' rows={5} cols={77} className='message'></textarea>
        <button className='form-button'>Send Message</button>
        </form>
    </div>
  )
}

export default Contactform
