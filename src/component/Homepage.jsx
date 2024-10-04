import React from 'react'
import Navbar from './navbar'
import Card from './Card'
import './Homepage.css'
import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import Searchbox from './searchbox'



const Homepage = () => {
  const fadeImages = [
    {
      url: '../../images/cozybedroom.png',
    },
    {
      url: '../../images/dark.jpg',
    },
    {
      url : "../../images/cozybedroom.png"
    }
  ];
  return (<div>
    <div className='homePage'>
    <Navbar/>
        <Card/>
        <Searchbox/>  
        <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <img style={{ width: '100%',height : '100vh' }} src={fadeImage.url} />
            <h2>{fadeImage.caption}</h2>
          </div>
        ))}
       
      </Fade>
      

      
       </div></div>
  )
}

export default Homepage
