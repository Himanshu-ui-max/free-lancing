import React from 'react'
import './footer.css'
function footer() {
  return (
    <div className='d-flex footer'>
    <div className='infofooter'>
      <h3>Sai Super Pack</h3>
      <div className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
    </div>
    <div>
        <h3>Contact Info</h3>
        <div className='contactfooter'>
        <ul>
            <li>Phone:1234567890</li>
            <li>Email:saipackaging@gmail.com</li>
        </ul>
        </div>
    </div>
    </div>
  )
}

export default footer
