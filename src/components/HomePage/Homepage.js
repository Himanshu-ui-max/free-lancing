import React from 'react'
import './HomePage.css'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
const Homepage = () => {
  return (
    <div className='homePage' id='homePage'>

      <div className='homecontain' style={{display : "flex", justifyContent : "space-between"}}>
        <div style={{width : "0px"}}>
          <div className='hometext'>
            <span className='impWord'></span>
          </div>
          <div className='buttonDiv'>

            <button className='BT'><a className='atag' href='https://online.fliphtml5.com/gqcm/ypfz/#p=3' target='_blank' rel="noreferrer">Our Catalogue</a></button>
          </div>
        </div>
        <div className='socialDiv' style={{ display: "flex", flexDirection: "column", alignItems : "center", justifyContent : "center" }}>
          <a href='https://www.facebook.com/profile.php?id=100079658515735' target='_blank' rel="noreferrer" ><FaFacebook style={{ height: "47px", width: "47px", margin : "10px" }} /></a>
          <a href='https://www.instagram.com' target='_blank' rel="noreferrer" ><FaInstagram style={{ height: "47px", width: "47px", margin : "10px" }} /></a>
          <a href='https://www.linkedin.com/company/sai-super-pack/' target='_blank' rel="noreferrer" ><FaLinkedin style={{ height: "47px", width: "47px", margin : "10px" }} /></a>
        </div>
      </div>
    </div>
  )
}

export default Homepage