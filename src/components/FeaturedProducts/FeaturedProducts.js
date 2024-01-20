import React, { useEffect, useState } from 'react'
import './FeaturedProducts.css'
import Paperangleboardedited3 from '../images/Paperangleboardedited3.jpg'
import EPsheetedited3 from '../images/EPsheetedited3.jpg'
import paperangleboardedited1 from '../images/paperangleboardedited1.jpg'
import esdbinedited2 from '../images/esdbinedited2.jpg'
import ESDppbin1edited from '../images/ESDppbin1edited.jpg'
import ppcorrugatedbox2edited from '../images/ppcorrugatedbox2edited.jpg'
import EPfitmentedited from '../images/EPfitmentedited.jpg'
import Paperangleboardedited2 from '../images/Paperangleboardedited2.jpg'
import { Link } from 'react-router-dom'
const FeaturedProducts = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const detectWidth = () => {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', detectWidth);
    return () => {
      window.removeEventListener('resize', detectWidth)
    }
  }, [width]);
  return (
    <>
      <section id='featuredProducts'>
        {width > 970 ? (
          <div id="carouselExample" className="carousel slide Fproducts">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="ProductHeading">
              <h1>Featured Products</h1></div>
            <div className="carousel-inner ">
              <div className="carousel-item active">
                <div className="productImg" id="ProductImg">
                  <Link to="/productDetails/paperangleprotector">
                    <div className="SpecificProduct">
                      <img src={Paperangleboardedited3} className="d-block " alt="123" />
                      <h3>Paper Angle Protector</h3>
                      <p className='productPara'>Prevent Transit Damages</p></div>
                  </Link>
                  {/* <div className="ProductName"><h5>EPE Foam</h5></div> */}
                  <Link to="/productDetails/epefoamsheets">
                    <div className="SpecificProduct">
                      <img src={EPsheetedited3} className="d-block" alt="..." />
                      <h3>EP Sheets</h3>
                      <p className='productPara'>Enabled flexibility</p></div>
                  </Link>
                  <Link to="/productDetails/paperangletray">
                    <div className="SpecificProduct">
                      <img src={paperangleboardedited1} className="d-block " alt="..." />
                      <h3>Paper Edge Protector</h3>
                      <p className='productPara'>Export palletising</p></div>
                  </Link>
                </div>
              </div>
              <div className="carousel-item" >
                <div className="productImg" id="ProductImg">
                  <Link to="/productDetails/esdppreusablebinbox">
                    <div className="SpecificProduct">
                      <img src={esdbinedited2} className="d-block " alt="456" />
                      <h3>ESD PP Resuable box</h3>
                      <p className='productPara'>Waterproof & sustainable </p></div>
                  </Link>
                  <Link to="/productDetails/esdppreusablebinbox">
                    <div className="SpecificProduct">
                      <img src={ESDppbin1edited} className="d-block " alt="456" />
                      <h3>ESD PP Bins</h3>
                      <p className='productPara'>Load capacity upto 15KG</p></div>
                  </Link>
                  <Link to="/productDetails/ppbinbox">
                    <div className="SpecificProduct">
                      <img src={ppcorrugatedbox2edited} className="d-block " alt="456" />
                      <h3>PP Bin/Box</h3>
                      <p className='productPara'>Recyclable & Reusable</p></div>
                  </Link>
                </div>
              </div>
              <div className="carousel-item">
                <div className="productImg" id="ProductImg">
                  <Link to="/productDetails/epefitments">
                    <div className="SpecificProduct">
                      <img src={EPfitmentedited} className="d-block" alt="789" />
                      <h3>EPE Fitments</h3>
                      <p className='productPara'>Customisable</p></div>
                  </Link>
                  <Link to="/productDetails/paperangleboard">
                    <div className="SpecificProduct">
                      <img src={Paperangleboardedited2} className="d-block" alt="789" />
                      <h3>Paper Angle Board</h3>
                      <p className='productPara'>Cost & Environment effective</p></div>
                  </Link>
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
          </div>) : (
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
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
              </div>
              <div className="ProductHeading mobileheading">
                <h2>Featured Products</h2></div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <Link to="/productDetails/paperangleprotector">
                    <div className="SpecificProduct">
                      <img src={Paperangleboardedited3} className="d-block " alt="123" />
                      <h3>Paper Angle Protector</h3>
                      <p className='productPara'>Prevent Transit Damages</p></div>
                  </Link>
                </div>
                <div className="carousel-item">
                  <Link to="/productDetails/epefoamsheets">
                    <div className="SpecificProduct">
                      <img src={EPsheetedited3} className="d-block" alt="..." />
                      <h3>EP Sheets</h3>
                      <p className='productPara'>Enabled flexibility</p></div>
                  </Link>
                </div>
                <div className="carousel-item">
                  <Link to="/productDetails/paperangletray">
                    <div className="SpecificProduct">
                      <img src={paperangleboardedited1} className="d-block " alt="..." />
                      <h3>Paper Edge Protector</h3>
                      <p className='productPara'>Export palletising</p></div>
                  </Link>
                </div>
                <div className="carousel-item">
                  <Link to="/productDetails/esdppreusablebinbox">
                    <div className="SpecificProduct">
                      <img src={esdbinedited2} className="d-block " alt="456" />
                      <h3>ESD PP Resuable box</h3>
                      <p className='productPara'>Waterproof & sustainable </p></div>
                  </Link>
                </div>
                <div className="carousel-item">
                  <Link to="/productDetails/esdppreusablebinbox">
                    <div className="SpecificProduct">
                      <img src={ESDppbin1edited} className="d-block " alt="456" />
                      <h3>ESD PP Bins</h3>
                      <p className='productPara'>Load capacity upto 15KG</p></div>
                  </Link>
                </div>
                <div className="carousel-item">
                  <Link to="/productDetails/ppbinbox">
                    <div className="SpecificProduct">
                      <img src={ppcorrugatedbox2edited} className="d-block " alt="456" />
                      <h3>PP Bin/Box</h3>
                      <p className='productPara'>Recyclable & Reusable</p></div>
                  </Link>
                </div>
                <div className="carousel-item">
                  <Link to="/productDetails/epefitments">
                    <div className="SpecificProduct">
                      <img src={EPfitmentedited} className="d-block" alt="789" />
                      <h3>EPE Fitments</h3>
                      <p className='productPara'>Customisable</p></div>
                  </Link>
                </div>
                <div className="carousel-item">
                  <Link to="/productDetails/paperangleboard">
                    <div className="SpecificProduct">
                      <img src={Paperangleboardedited2} className="d-block" alt="789" />
                      <h3>Paper Angle Board</h3>
                      <p className='productPara'>Cost & Environment effective</p></div>
                  </Link>
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
}

export default FeaturedProducts
