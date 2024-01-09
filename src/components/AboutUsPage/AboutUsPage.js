import React from 'react'
import './AboutUsPage.css'
const AboutUsPage = () => {
  return (

    <section id='aboutus' className='aboutus'>
      <div className='d-flex justify-content-center'>
      <div className="abtimage d-flex justify-content-center" style={{width:'40%'}} >
      <img style={{ height:'100%',width:'70%',borderRadius: '6px'}} src="https://www.stiplindia.com/wp-content/uploads/2023/11/paper-machines-1-1024x589.jpg" alt=''/> 
      {/* <div className="row" id="A1">
      <div className="column" id="A2">
        
      </div>
      <div className="column" id="A3"></div>
      <div className="column" id="A4"></div>
      <div className="column" id="A5"></div>
      </div> */}
      
      
      </div>
      <div className="abttext" style={{width: "60%", marginRight:'5%'}}>
      <div style={{textAlign: "left", color: "black", fontSize: "2.7rem", fontFamily: "Montserrat", fontWeight: "700", letterSpacing: "0.50px", wordWrap: "break-word"}}>About us</div>
        <div style={{textAlign: "justify", color: "#666666", fontSize: "1.6rem", fontFamily: "Montserrat", fontWeight: "500", letterSpacing: "0.31px", wordWrap: "break-word",marginTop:'2%',marginBottom:'2.75%'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
        </div>
        <button className='BTN'><a className='atag' href='https://online.fliphtml5.com/gqcm/ypfz/#p=3' target='_blank' rel="noreferrer">Company Profile</a></button>
        </div>
        </div>
    </section>
  )
}

export default AboutUsPage
