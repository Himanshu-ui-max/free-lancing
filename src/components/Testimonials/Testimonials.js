import React from 'react'
import './Testimonials.css'
import Paperangleboardedited3 from '../images/Paperangleboardedited3.jpg'
const Testimonials = () => {
  return (
    <div>
      <div id="carouselExampleDark" className="carousel carousel-dark slide Fproducts">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark #IndicatioN" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark #IndicatioN" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark #IndicatioN" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="ProductHeading">
            <h1>Our Testimonials</h1></div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
    <div className="productImg" id="ProductImg">
                <div className="SpecificProduct">
                <img src={Paperangleboardedited3} className="d-block " alt="123" />
      
      </div>
      <div className="SpecificProduct">
      <img src={Paperangleboardedited3} className="d-block " alt="123" />
      
      </div>
      <div className="SpecificProduct">
      <img src={Paperangleboardedited3} className="d-block " alt="123" />
      
      </div>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
    <div className="productImg" id="ProductImg">
                <div className="SpecificProduct">
                <img src={Paperangleboardedited3} className="d-block " alt="123" />
      
      </div>
      <div className="SpecificProduct">
      <img src={Paperangleboardedited3} className="d-block " alt="123" />
      </div>
      <div className="SpecificProduct">
      <img src={Paperangleboardedited3} className="d-block " alt="123" />
      
      </div>
      </div>
    </div>
    <div className="carousel-item">
    <div className="productImg" id="ProductImg">
                <div className="SpecificProduct">
                <img src={Paperangleboardedited3} className="d-block " alt="123" />
      
      </div>
      <div className="SpecificProduct">
      <img src={Paperangleboardedited3} className="d-block " alt="123" />
      
      </div>
      <div className="SpecificProduct">
      <img src={Paperangleboardedited3} className="d-block " alt="123" />
      
      </div>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev But" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next But" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Testimonials
