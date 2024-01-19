import React from 'react'
import './Certificate.css'
import iso from '../images/iso.png'
import jas from '../images/jas.png'
import img3 from '../images/3.png'
import img4 from '../images/4.png'
import tick   from '../images/tick.png'
const Certificate = () => {
  return (
    <>
    <div className="certiPage">
         <div className='certiContent'>
             <p50> 100% recyclable products with our guarantee of safe and tested assured performance of our products which comply with international authoritative standards.</p50>
         </div>
         <div className="certiImg"> 
         
          <img  style={{height:"35%",width:"9vw"}} src={jas} alt="" />
         <img  style={{height:"35%",width:"9vw"}} src={iso} alt="" />
         <img  style={{height:"35%",width:"9vw"}} src={img3} alt="" />
         <img  style={{height:"35%",width:"9vw"}} src={img4} alt="" />
         <img  style={{height:"35%",width:"9vw"}} src={tick} alt="" />
           </div>
    </div>

      
    </>
  )
}

export default Certificate
