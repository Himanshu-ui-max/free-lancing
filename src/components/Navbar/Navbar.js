import React, { useState } from 'react'
import logo from '../images/logo.png'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [visibility, setVisibility] = useState({'display':'none'});
const handlePaperDivision =(e) =>{
  e.preventDefault();
  if(visibility.display == 'none'){
    setVisibility({'display' : 'flex'})
  }
  else
  {
    setVisibility({'display':'none'})
  }
  console.log('onclick woprked')
}
  return (
    <div className='navbar'>
      <img src={logo}></img>
      <div className='navMenu'>
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li onClick={handlePaperDivision}>Paper Division
            <div className='dropdown' style={visibility}>
              <ul>
                <li>Paper angle Board</li>
                <li>Paper angle protector</li>
                <li>paper edge protector</li>
                <li>LCD specialized</li>
              </ul>
            </div>
          </li>
          <li>Plastic Division</li>
          <li> <Link to={'/companyProfile'}>About Us</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
