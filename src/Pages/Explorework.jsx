import React from 'react'
import './Explorework.css'
import image from '../../images/exploreitem.jpg'
import image1 from '../../images/explore-item-02.jpg'
import image2 from '../../images/explore-item-03.jpg'
import Topcard from '../component/Topcard'

const Explorework = () => {
  return (
    <div>
      <Topcard redtext='Explore ' whitetext='Our Work'/>
      <div className='container-2'>
      <h2 className='exploreHeader'>Minimalist design for 2 Bedrooms</h2>
      <img src={image} className='explore-image-1'></img>
      <p className='content-2'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
         totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto toril beatae
          vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
           sed quia consequuntur magni dolores eos qui ratione voluptatem sequida nesciunt. Neque porro quisquam est, qui dolorem
         ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut 
         labore et dolore magnam aliquam quaerat voluptatem.</p>
         <p className='content-3'>This is an Interior Designer HTML5 Template that is 100% totally free to download,
           edit and use for your commercial or business websites. You are NOT allowed to redistribute the downloadable
            ZIP file of this template on any other website. Please contact TemplateMo website for more information. Thank you.
             Sed ut perspiciatis unde 
          omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
           inventore veritatis.</p>
      
      </div>
      <div className='image-container'>
        <img src = {image1} className='explore-image-2'></img>
        <img src = {image2} className='explore-image-3'></img>
      </div>
      
    </div>
  )
}

export default Explorework
