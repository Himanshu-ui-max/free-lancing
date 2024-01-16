import React from 'react'
import './footer.css'
function footer() {
  return (
    <div className='d-flex footer'>
    <div className='infofooter'>
      <div className='footerheading'>Sai Super Pack</div>
      <div className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
    </div>
    <div className='contactusfooter'>
        <div className="contactheading d-flex" style={{gap:'0.7rem'}}>
        <div className='rect'></div>
        <div className='footerheading'>Contact Info</div>
        </div>
        <div className='contactfooter'>
        <ul>
            <li>Phone : 1234567890</li>
            <li>Email : saipackaging@gmail.com</li>
        </ul>
        </div>
    </div>
    </div>
  )
}

export default footer
