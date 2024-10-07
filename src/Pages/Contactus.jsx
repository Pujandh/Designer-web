import React from 'react'
import './Contactus.css'
import Topcard from '../component/Topcard'
import CustomMap from '../component/Custommap';
import { APIProvider } from "@vis.gl/react-google-maps";
import SendMessage from '../component/SendMessage';
import { FaRegAddressCard } from "react-icons/fa6";
import RedCard from '../component/RedCard';
import { MdOutlineEmail } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import Footer from '../component/Footer';
import Footerbottom from '../component/Footerbottom';
import Contactform from '../component/Contactform';


const Contactus = () => {
  return (
    <div>
      <Topcard redtext='Contact ' whitetext='Us'/>
      <div className='contact-wrapper'>
        <div className='form-wrap'>
      <SendMessage className = 'send-wrapper'/>
      
      <Contactform/></div>
      <div className='contact-container'>
      <RedCard icon = {<FaRegAddressCard />} description = 'Mailing Address' location = 'Kathmandu,Nepal'/>
      <RedCard icon = {<MdOutlineEmail />} description = 'Email Address' location = 'information@company.com'/>
      <RedCard icon = {<RiCustomerService2Line />} description = 'Chat With Us' location = 'chat@company.com'/> 
      </div>

      </div>
      <Footer/>
      <Footerbottom/>
    </div>
  )
}

export default Contactus
