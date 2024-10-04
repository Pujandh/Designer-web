import React from 'react'
import { MdTopic } from "react-icons/md";
import './Topic.css';
import topicimage from '../../images/white-logo.png'

const Topic = () => {
  return (
    <div className='topic'>
     <p><img src={topicimage} className='designerlogo'></img></p>
    </div>
  )
}

export default Topic
