import React from 'react'
import './AboutUsPage.css'
import image1 from "../images/ssp front.jpg"
import { Link } from 'react-router-dom'
const AboutUsPage = () => {
  return (

    <section id='aboutus' className='aboutus' >
      <div className='d-flex justify-content-center'>
      <div className="abtimage d-flex justify-content-center" style={{width:'60%',flexDirection:'column',alignItems:'center'}} >
        
        <div className="flip-box">
  <div className="flip-box-inner" >
    <div className="flip-box-front">
      <img src={image1} alt="Paris" style={{ height:'400px',width:'500px',borderRadius: '6px'}} />
    </div>
    <div className="flip-box-back">
    <img src="https://www.stiplindia.com/wp-content/uploads/2023/11/paper-machines-1-1024x589.jpg" alt="Paris" style={{ height:'400px',width:'500px',borderRadius: '6px'}}/>
    </div>
  </div>
</div>
        </div>
      {/* <img style={{ height:'100%',width:'70%',borderRadius: '6px'}} src="https://www.stiplindia.com/wp-content/uploads/2023/11/paper-machines-1-1024x589.jpg" alt=''/>  */}
      {/* <div className="row" id="A1">
      <div className="column" id="A2">
        
      </div>
      <div className="column" id="A3"></div>
      <div className="column" id="A4"></div>
      <div className="column" id="A5"></div>
      </div> */}
      
      <div className="abttext " style={{width: "60%", marginRight:'5%'}}>
      <div className='abtheading' style={{color: "black", fontSize: "2.7rem", fontFamily: "Montserrat", fontWeight: "700", letterSpacing: "0.50px", wordWrap: "break-word"}}>About us</div>
        <div className='abtdes' style={{textAlign:'justify',color: "#666666",  fontFamily: "Montserrat", fontWeight: "500", letterSpacing: "0.31px", wordWrap: "break-word"}}>
        Sai Super Pack is an industry-leading enterprise which provides multiple customisable solutions under one roof related to 100% recyclable & reusable pp bins/boxes, paper angle and edge boards of all variants & EP Foams and their fitments. With our client-oriented business strategy and transparent business dealings, we have carved a formidable niche for ourselves in the packaging sector. With more than a decade’s work, we have gained trust and goodwill of countless clients through our dedicated work approach and focused positive attitude towards offering only quality products and personable solutions.
        </div>
        <div className='button'>
        <button className='BTN'><Link className='atag' id='egf'  to='/companyProfile'>Company Profile</Link></button>
        </div>
        </div>
        </div>
    </section>
  )
}

export default AboutUsPage
