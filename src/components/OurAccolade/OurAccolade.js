import React from 'react'
import './OurAccolade.css'
import image1 from "../images/TOI-SME Icons1-3.jpg"
import image4 from "../images/award2.jpg"
import image2 from "../images/Screenshot 2024-03-20 184337.png"
import image3 from "../images/TOI-SME Icons1-3 copy.JPG"
import image5 from "../images/PHOTO-2020-08-29-12-39-00.jpg"
function OurAccolade() {
  return (
    <>
    <div className="Accolade">
    <h1 style={{textAlign:"center"}}> Our Accolades</h1>
        <div className='iMageCont' style={{width : "1100px"}}>
          <div className='iMage1'><img className='imge1' alt='abc' src={image1} style={{height : "560px", width : "300px"}}></img></div>
          <div className='iMageCont2'>
            <div className='iMage2'><img className='imge2' alt='abc' src={image2} style={{height : "150px" ,width: "764px"}}></img></div>
            <div className='iMageCont3'>
              <div className='iMage3'><img className='imge3' alt='abc' src={image3} style={{height : "200px",width : "200px"}}></img></div>
              <div className='iMage3'><img className='imge4' alt='abc' src={image4} style={{height : "400px",width : "300px"}}></img></div>
              <div className='iMage3'><img className='imge5' alt='abc' src={image5} style={{height : "200px",width : "200px"}}></img></div>
            </div>
          </div>
        </div>
    </div>
      
    </>
  )
}

export default OurAccolade
