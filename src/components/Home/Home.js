import React from 'react'
import Homepage from './../HomePage/Homepage'
import ChooseUsPage from './../ChooseUsPage/ChooseUsPage'
import FeaturedProducts from './../FeaturedProducts/FeaturedProducts'
import AboutUsPage from './../AboutUsPage/AboutUsPage'
import PartnersPage from './../PartnersPage/PartnersPage'
import Testimonials from '../Testimonials/Testimonials'
import OurMission from '../OurMission/OurMission'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <>
    
    <Homepage/>
    <ChooseUsPage/>
    <FeaturedProducts/>
    <AboutUsPage/>
    <OurMission/>
    <PartnersPage/>
    {/* <Sample/> */}
    <Testimonials/>
    <Footer/>
  

    </>
  )
}

export default Home
