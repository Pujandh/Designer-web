import React from 'react'
import './Searchbox.css'

const Searchbox = () => {
  return (<div>
    <div className='searchBox'>
     <div className='searchBar'> Search work by title<input name='Search '></input></div>
     <label>
      Choose Category
      <select>
        <option value='Interior Design'>Interior Design</option>
        <option value='Exterior Design'>Exterior Design</option>
        <option value='New Ideas'>New Ideas</option>
        <option value='Trendy Design'>Trendy Design</option>
      </select>
     </label>
     <label>
      Price Range
      <select>
        <option value='Interior Design'>Choose price</option>
        <option value='Exterior Design'>100$-250$</option>
        <option value='New Ideas'>250$-500$</option>
        <option value='Trendy Design'>500$-1000$</option>
      </select>
     </label>
     <label>
      Pick a plan<select>
      <option value='Interior Design'>Choose plan</option>
        <option value='Exterior Design'>Standard</option>
        <option value='New Ideas'>Professional</option>
        <option value='Trendy Design'>Premium</option>
      </select>
     </label></div>
     <button className='searchButton'>Search Now</button>
    </div>
  )
}

export default Searchbox
