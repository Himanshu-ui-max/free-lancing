import React, { useEffect } from 'react'
import Homepage from './../HomePage/Homepage'
import ChooseUsPage from './../ChooseUsPage/ChooseUsPage'
import FeaturedProducts from './../FeaturedProducts/FeaturedProducts'
import AboutUsPage from './../AboutUsPage/AboutUsPage'
import PartnersPage from './../PartnersPage/PartnersPage'
import Testimonials from '../Testimonials/Testimonials'
import Certificate from '../CertificatePage/Certificate'

const Home = () => {
  useEffect(() => {
    document.title = "Sai Super Pack - Home"
  }, []);
  return (
    <>
    
    <Homepage/>
    <ChooseUsPage/>
    <FeaturedProducts/>
    <AboutUsPage/>
    {/* <OurMission/> */}
    <PartnersPage/>
    {/* <Sample/> */}
    <Testimonials/>
    <Certificate/>
  

    </>
  )
}

export default Home
