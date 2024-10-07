import React from 'react'
import './navbar.css'
import Topic from './Topic'
import {NavLink } from 'react-router-dom'

const Navbar = () => {
  
  return (
<div className='navBar'>
    <Topic className = 'topic'/>
 <ul className='navigation'>
    <li ><NavLink to='/' className={({ isActive }) => (isActive ? "link active-link" : "link")}>Homepage</NavLink></li>
        <li><NavLink to = '/aboutus' className={({ isActive }) => (isActive ? "link active-link" : "link")}>About Us</NavLink></li>
        <li><NavLink to = '/explorework'className={({ isActive }) => (isActive ? "link active-link" : "link")}>Explore Work</NavLink></li>
        <li><NavLink to = '/trending' className={({ isActive }) => (isActive ? "link active-link" : "link")}>Trending</NavLink></li>
        <li><NavLink to = '/contactus' className={({ isActive }) => (isActive ? "link active-link" : "link")}>Contact Us</NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar
