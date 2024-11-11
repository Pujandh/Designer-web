import React from 'react'
import { MdTopic } from "react-icons/md";
import './Topic.css';
import topicimage from '../../images/white-logo.png'
import { Link } from 'react-router-dom';

const Topic = () => {
  return (
    <div className='topic'>
    <Link  to = '/'> <p><img src={topicimage} className='designerlogo'></img></p></Link>
    </div>
  )
}

export default Topic
