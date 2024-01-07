import React from 'react'
import './AboutUsPage.css'
const AboutUsPage = () => {
  return (

    <section id='aboutus' className='aboutus'>
      <div className='d-flex justify-content-center'>
      <div className="abtimage d-flex justify-content-center" style={{width:'40%'}}>
      <img style={{ height:'100%',width:'70%',borderRadius: '6px'}} src="https://via.placeholder.com/578x653"/>
      </div>
      <div className="abttext" style={{width: "60%", marginRight:'5%'}}>
      <div style={{textAlign: "left", color: "black", fontSize: "50px", fontFamily: "Montserrat", fontWeight: "700", letterSpacing: "0.50px", wordWrap: "break-word"}}>About us</div>
        <div style={{textAlign: "justify", color: "#666666", fontSize: "31px", fontFamily: "Montserrat", fontWeight: "500", letterSpacing: "0.31px", wordWrap: "break-word",marginTop:'3%'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
        </div>
        <a href="">
        <div style={{ marginTop:'5%',height: '10%', width:'40%',background: '#A26B39', borderRadius: '20px',color: 'white', fontSize: '31px', fontFamily: 'Montserrat', fontWeight: '600', wordWrap: 'break-word',textAlign: "center"}}>Company Profile</div>
        </a>
        </div>
        </div>
    </section>
  )
}

export default AboutUsPage
