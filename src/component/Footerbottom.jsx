import React from 'react'
import image1 from '../../images/footer-logo.png'
import './Footerbottom.css'
import FooterCard from './FooterCard'
import Followcard from './Followcard'
import Newsletter from './Newsletter'

const Footerbottom = () => {
  return (
    <div className='container'>
        <div className='flex-cont'>
      <div className='container-1'>
        <img src = {image1} className='designer-image'></img>
      <div className='textContainer'>Designer is free Bootstrap v5.1.3 CSS website 
        template.<br></br> Everyone can get the best HTML CSS templates<br></br>
         from TemplateMo website.</div>
         <div className='copyright-text'>Copyright © 2022 Designer Co., Ltd. All Rights Reserved.<br></br>
         Design: Pujan Dhungana</div>
         </div>
         <div className='footerBox'>
         <div className='footerCard-1'>
            <FooterCard header='Our Location' first = 'Imadol' second='Lalitpur' third = 'Nepal'/>
            <FooterCard header = 'Customer Care' first = '01-2344556' second='01-321303' third = 'information@company'/>
            <Followcard/>
            </div>
            <Newsletter/>
            </div>
            </div>
            
    </div>
  )
}

export default Footerbottom
