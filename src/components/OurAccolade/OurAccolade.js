import React from 'react'
import './OurAccolade.css'
import award1 from '../images/award1.jpg'
import award2 from '../images/award2.jpg'
import award3 from '../images/award3.jpg'
function OurAccolade() {
  return (
    <>
    <div className="Accolade">
    <h1 style={{textAlign:"center"}}> Our Accolade</h1>
        <div className="IMG1">
        <img className='topIMG' src={award3}  alt='123' style={{height:"200px",width:"1000px",objectFit:"contain"}}></img>
        </div>
        <div className="IMGcont1">
            <div className='IMG2'>
            <img className='botIMG' src={award1}  alt='123'style={{height:"500px",width:"500px",objectFit:"cover"}}></img>
            </div>
            <div className='IMG3'>
            <img className='botIMG' src={award2}  alt='123'style={{height:"500px",width:"500px",objectFit:"cover"}}></img>  
            </div>
        </div>
    </div>
      
    </>
  )
}

export default OurAccolade
