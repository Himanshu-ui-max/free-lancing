import React from 'react'
import './OurMission.css'
import paperangleboardedited1 from '../images/paperangleboardedited1.jpg'
import esdbinedited2 from '../images/esdbinedited2.jpg'
import Paperangleboardedited2 from '../images/Paperangleboardedited2.jpg'

function OurMission() {
  return (
    <div className='d-flex ourmission'>
        <div className="ourmissiontext">
        <h1>Our Mission</h1>
            <p >Our mission is to give a customized range of packaging solutions so that our customers may minimize their transit damage and gain profits in their business with help of our specialized products.
            </p></div>
      <div className="ourmissionimg">
        <div className='ourmissionimg1' style={{height:'40%',width:'100%'}}>
        <img className='omimg1' style={{height:'90%',width:'84%'}} src={paperangleboardedited1} alt="" />
        </div>
        <div className='d-flex ourmissionimg2' style={{height:'40%',width:'100%',gap:'2rem'}}>
        <img className='omimg2' style={{height:'85%',width:'40%'}} src={esdbinedited2} alt="" />
        <img className='omimg2' style={{height:'85%',width:'40%'}} src={Paperangleboardedited2} alt="" />
        </div>
      </div>
    </div>
  )
}

export default OurMission
