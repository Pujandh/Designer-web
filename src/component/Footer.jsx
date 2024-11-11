import React from 'react'
import './Footer.css'
import Discoverbutton from './Discoverbutton'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
        <div className='footerContainer'>
        <h1 className='footerText'>HIRE US TO WORK ON A PROJECT ?</h1>
        <Link  to = '/contactus'><Discoverbutton buttname='Contact Us Now'/></Link>
        </div>
        </div>
  )
}

export default Footer

