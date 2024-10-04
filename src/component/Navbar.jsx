import React from 'react'
import './navbar.css'
import Topic from './Topic'
import {Link } from 'react-router-dom'

const Navbar = () => {
  
  return (
<div className='navBar'>
    <Topic className = 'topic'/>
 <ul className='navigation'>
    <li ><Link to = '/' className='link'>Homepage</Link></li>
        <li><Link to = '/aboutus' className='link'>About Us</Link></li>
        <li><Link to = '/explorework'className='link'>Explore work</Link></li>
        <li><Link to = '/trending' className='link'>Trending</Link></li>
        <li><Link to = '/contactus' className='link'>Contact Us</Link></li>
        </ul>
    </div>
  )
}

export default Navbar
