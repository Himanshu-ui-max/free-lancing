import React,{ useEffect, useState } from "react";
// import "./Testimonials.css";

import Paperangleboardedited3 from '../images/Paperangleboardedited3.jpg'
const Testimonials = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const detectWidth=()=>{
      setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize',detectWidth);
    return () => {
      window.removeEventListener('resize', detectWidth)
    }
  }, [width]);
  return (
    <>
      <section id='featuredProducts'>
        {width > 970 ?(
        <div id="carouselExample" className="carousel slide Fproducts">
         <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
           
          </div>
          <div className="ProductHeading">
            <h1>Our Testimonials</h1></div>
          <div className="carousel-inner ">
            <div className="carousel-item active">
              <div className="productImg" id="ProductImg">
                <div className="SpecificProduct">
                <img src={Paperangleboardedited3} className="d-block " alt="123" /></div>
               
                <div className="SpecificProduct">
                <img src={Paperangleboardedited3} className="d-block " alt="123" />
                  </div>
                <div className="SpecificProduct">
                <img src={Paperangleboardedited3} className="d-block " alt="123" /> </div>
              </div>
              </div>
            <div className="carousel-item" >
              <div className="productImg" id="ProductImg">
                <div className="SpecificProduct">
                <img src={Paperangleboardedited3} className="d-block " alt="123" /></div>
                <div className="SpecificProduct">
                <img src={Paperangleboardedited3} className="d-block " alt="123" /></div>
                <div className="SpecificProduct">
                <img src={Paperangleboardedited3} className="d-block " alt="123" /></div>
              </div>
              </div>
           
          </div>
          <button className="carousel-control-prev But" type="button" data-bs-target=" #carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" id="arrow" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next But" type="button" data-bs-target=" #carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>):(
        // <div> this page is for mobile </div>


        <div>
          <div id="carouselExampleIndicators" className="carousel slide Fproducts">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
    
  </div>
  <div className="ProductHeading mobileheading">
            <h2>Featured Products</h2></div>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <div className="SpecificProduct">
                 </div>
    </div>
    <div className="carousel-item">
    <div className="SpecificProduct">
                  </div>
    </div>
    <div className="carousel-item">
    <div className="SpecificProduct">
                  </div>
    </div>
    <div className="carousel-item">
    <div className="SpecificProduct">
                 </div>
    </div>
    <div className="carousel-item">
    <div className="SpecificProduct">
                 </div>
    </div>
    <div className="carousel-item">
    <div className="SpecificProduct">
                 </div>
    </div>
    
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
        )}
      </section>

    </>
  )
};

export default Testimonials;
