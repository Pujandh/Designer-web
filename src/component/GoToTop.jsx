import React from 'react'
import { FaArrowUp } from "react-icons/fa6";
import './GoToTop.css'

const GoToTop = (props) => {
  return (
    <div className={props.showGoToTop} onClick={props.scrollUp}>
      <button className='GoTop'>Go to top<FaArrowUp /></button>
      
    </div>
  )
}

export default GoToTop
