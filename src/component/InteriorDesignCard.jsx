import React from 'react'
import Interiordesign from './InteriorDesign'

const InteriorDesignCard = () => {
    const CardComponents = [
        {title:'Interior Design' , date : 'January 10 ,2022',address : "Kathmandu,Nepal" ,description : 
            'This design is provided by designer Website'  }, {title:'The Waterfront Cafe and Restaurant ' , 
                date : 'June 23 ,2021' , address : 'New Jersey,USA',description:"This design was created using designer website"},
                {title : 'Building & Developing' , date :"May 12 ,2021", address :"Florida,USA", 
                    description: "This design was created using designer website"}]
                   
                    


                    
  return (
    <div className='Card'>
      { CardComponents.map((Cardcomponent,index)=>(
                        <Interiordesign key={index}
                        date = {Cardcomponent.date} address = {Cardcomponent.address}
                        description = {Cardcomponent.description} title = {Cardcomponent.title}/>  
       ))}
    </div>
  )
}

export default InteriorDesignCard
