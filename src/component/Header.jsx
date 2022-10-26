import React from 'react'
import "../assets/css/header.css"
export default function Header() {
  return (
    <div className='header'>
        <h1 className="title">MY TO DO LIST</h1>
        <input type="text" className='input__value' placeholder='Enter New Todo'/> 
        <button className='btn add'>Add</button><br />
        <input className='input__value' type="text" placeholder='Search Your Todo'/>
        <button className='btn search' >Search</button><br />
        <span>____________________________________________________________________________</span>
    </div>
  )
}
