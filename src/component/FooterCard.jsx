import React from 'react'
import './FooterCard.css'

const FooterCard = ({header,first,second,third}) => {
  return (
    <div className='footercard'>
      <h2>{header}</h2>
      <p>{first}</p>
      <p>{second}</p>
      <p>{third}</p>

    </div>
  )
}

export default FooterCard
