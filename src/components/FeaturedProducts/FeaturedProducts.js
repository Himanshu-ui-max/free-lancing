import React from 'react'
import './FeaturedProducts.css'
const FeaturedProducts = () => {
  return (
    <>
    <div id="carouselExample" className="carousel slide Fproducts">
    <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
      <div className="ProductHeading">
      <h1>Featured Products</h1></div>
  <div className="carousel-inner ">
    <div className="carousel-item active">
      <div className="productImg" id="ProductImg">
        <div className="SpecificProduct">
      <img src="https://saisuperpack.in/Products/Epefoampouchedited.jpg" className="d-block " alt="123"/>
      <h3>EPE Foam</h3>
      <p className='productPara'>iuryqkfgywgfewgfj</p></div>
      {/* <div className="ProductName"><h5>EPE Foam</h5></div> */}
      <div className="SpecificProduct">
      <img src="https://saisuperpack.in/Products/p2p.jpg" className="d-block" alt="..."/>
      <h3>EPE Foam</h3>
      <p className='productPara'>iuryqkfgywgfewgfj</p></div>
      <div className="SpecificProduct">
      <img src="https://saisuperpack.in/Products/Paperangleboardedited3.jpg" className="d-block " alt="..."/>
      <h3>EPE Foam</h3>
      <p className='productPara'>iuryqkfgywgfewgfj</p></div>
    </div></div>
    <div className="carousel-item" >
    <div className="productImg" id="ProductImg">
      <img src="https://saisuperpack.in/Products/EPE-foam-rollunderlay.jpg" className="d-block " alt="456"/>
      
      <img src="https://saisuperpack.in/Products/EPE-foam-rollunderlay.jpg" className="d-block " alt="456"/>
      <img src="https://saisuperpack.in/Products/EPE-foam-rollunderlay.jpg" className="d-block " alt="456"/>
    </div></div>
    <div className="carousel-item">
    <div className="productImg" id="ProductImg">
      <img src="https://saisuperpack.in/Products/Paperangleboardedited2.jpg" className="d-block" alt="789"/>
      <img src="https://saisuperpack.in/Products/Paperangleboardedited2.jpg" className="d-block" alt="789"/>
      <img src="https://saisuperpack.in/Products/Paperangleboardedited2.jpg" className="d-block" alt="789"/>
    </div></div>
  </div>
  <button className="carousel-control-prev But" type="button" data-bs-target=" #carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"  id="arrow" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next But" type="button" data-bs-target=" #carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" ></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    
    
    </>
  )
}

export default FeaturedProducts
