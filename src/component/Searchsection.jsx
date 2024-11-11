import React from 'react'
import Dropdown from './Dropdown'
import Searchbox from './searchbox'
import './Searchsection.css'
import { ColorScheme } from '@vis.gl/react-google-maps'

const Searchsection = () => {
    const categoryOptions = ['Interior Design' , 'Exterior Design' , 'New Ideas' , 'Trendy Design']
    const priceOptions = ['$100-$250' , '$250-$500','$500-$1000']
    const planOptions = ['Standard' , 'Proffesional' , 'Golden' , 'Premium']
  return (
    <div className="search-section">
        <div className='search-container'>
      <div className="dropdowns-container">
        <Searchbox/>
        <Dropdown className="dropdown-home"  label="Category" options={categoryOptions} />
        <Dropdown className='dropdown-home' label="Plan" options={planOptions} />
        <Dropdown className='dropdown-home' label="Price" options={priceOptions} />
      </div>
      <button className='search-btn'>Search Now</button>
      </div>
    </div>
  )
}

export default Searchsection