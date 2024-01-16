import React from 'react'
import './AboutUsPage.css'
import { Link } from 'react-router-dom'
const AboutUsPage = () => {
  return (

    <section id='aboutus' className='aboutus' >
      <div className='d-flex justify-content-center'>
      <div className="abtimage d-flex justify-content-center" style={{width:'60%',flexDirection:'column',alignItems:'center'}} >
        
        <div className="flip-box">
  <div className="flip-box-inner" >
    <div className="flip-box-front">
      <img src="https://media.istockphoto.com/id/453102697/photo/a-horizontal-view-of-an-industrial-paper-mill-on-a-river.jpg?s=612x612&w=0&k=20&c=9uXJuE2dxuCSHWZoLQSEBWdkDEksWORgahfHg7JJ-6I=" alt="Paris" style={{ height:'400px',width:'500px',borderRadius: '6px'}} />
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
        <div className='abtdes' style={{textAlign:'justify',color: "#666666", fontSize: "1.6rem", fontFamily: "Montserrat", fontWeight: "500", letterSpacing: "0.31px", wordWrap: "break-word"}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
        </div>
        <div className='button'>
        <button className='BTN'><Link className='atag' to='/companyProfile'>Company Profile</Link></button>
        </div>
        </div>
        </div>
    </section>
  )
}

export default AboutUsPage
