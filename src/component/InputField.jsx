import React from 'react'
import './InputField.css'

const InputField = ({desc, className,type}) => {
  return (
    <div>
      <input className='input-form' placeholder={desc}></input>
    </div>
  )
}

export default InputField
