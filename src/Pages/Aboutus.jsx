import React from 'react'
import './Aboutus.css'
import AboutUsCard from '../component/Aboutuscard'
import { AiFillCustomerService } from "react-icons/ai";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdDashboardCustomize } from "react-icons/md";
import Footer from '../component/Footer';
import image from '../../images/sampleimage.jpg'
import Topcard from '../component/Topcard';
import Footerbottom from '../component/Footerbottom';

const Aboutus = () => {
  return (
    <div className='container'>
     <Topcard redtext='About ' whitetext='Us'/>
         <div className='cards'>
          <div className='card1'><AboutUsCard className = 'card' desc = 'Customer Care' icon={<AiFillCustomerService />}/></div>
         <div className='card2'><AboutUsCard className = 'card' desc = 'Active support 24/7' icon = {<RiCustomerService2Fill />}/></div>
         <div className='card3'><AboutUsCard className = 'card' desc= 'Easy to Customize' icon = {<MdDashboardCustomize />}/></div>
      </div>
      <div className='text-container'>
      <div><h2 className='headerAbout-2'>A company which specializes in<div className='header-interior-design'> interior design </div></h2>
      <img src={image} className='sampleimage'></img>
      </div>
      <div className='text-container-2'>Over fact all son tell this any his. No insisted confined of weddings to returned to debating rendered.<br></br>
        Keeps order fully so do party means young. Table nay him jokes quick. In felicity up to graceful mistaken<br></br> horrible consider
        . Abode never think to at. 
        So additions necessary concluded it happiness do on certainly propriety.<br></br>
         On in green taken do offer witty of.
         <br></br><br></br>
         <h3>How it works?</h3>
         <p>
         Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel cilisis lorem ipsum dolor sit amet,
          consectetur
          adipiscingii elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         </p>

         </div>
      </div>
      <Footer/>
      <Footerbottom/>
    </div>
  )
}

export default Aboutus
