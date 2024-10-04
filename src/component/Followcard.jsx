import React from 'react'
import Followlink from './followlink'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import './Followcard.css'

const Followcard = () => {
  return (
    <div className='followus'>
        <h2>Follow Us</h2>
        <Followlink icon = {<FaFacebook />} desc='Facebook'/>
        <Followlink icon={<FaTwitter />} desc = 'Twittwer'/>
        <Followlink icon = {<FaLinkedin />} desc = 'Linkedin'/> 
        <Followlink icon = {<FaSquareInstagram />} desc = 'Instagram'/>
        
      
    </div>
  )
}

export default Followcard
