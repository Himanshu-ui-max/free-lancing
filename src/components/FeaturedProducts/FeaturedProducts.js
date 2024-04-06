import React, { useEffect, useRef, useState } from 'react'
import './FeaturedProducts.css'
import Paperangleboardedited3 from '../images/Paperangleboardedited3.jpg'
import EPsheetedited3 from '../images/DSC06873.jpg'
import paperangleboardedited1 from '../images/DSC06824.jpg'
import esdbinedited2 from '../images/esdbinedited2.jpg'
import ESDppbin1edited from '../images/core pipe 5.jpg'
import ppcorrugatedbox2edited from '../images/ppcorrugatedbox2edited.jpg'
import EPfitmentedited from '../images/IMG_1196.jpg'
import Paperangleboardedited2 from '../images/Paperangleboardedited2.jpg'
import { Link } from 'react-router-dom'
const FeaturedProducts = () => {
  const copyRef= useRef('');
  const [refrence, setRefrence] = useState(copyRef);
  const [width, setWidth] = useState(window.innerWidth);
  const detectWidth = () => {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    setInterval(() => {
      if(refrence){
        if(refrence.current){
          (refrence.current)?.click();

        }
      }
    }, 5000);
    window.addEventListener('resize', detectWidth);
    return () => {
      window.removeEventListener('resize', detectWidth)
    }
    // eslint-disable-next-line
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
                  <Link to="/productDetails/PaperDivision/edgeprotector" onMouseEnter={()=>{setRefrence(null)}} onMouseLeave={()=>{setRefrence(copyRef)}}>
                    <div className="SpecificProduct">
                      <img src={Paperangleboardedited3} className="d-block " alt="123" />
                      <h3>Edge Protector</h3>
                      <p className='productPara'>Provides corner reinforcement</p></div>
                  </Link>
                  {/* <div className="ProductName"><h5>EPE Foam</h5></div> */}
                  <Link to="/productDetails/ledDivision/ppboxwithepelining" onMouseEnter={()=>{setRefrence(null)}} onMouseLeave={()=>{setRefrence(copyRef)}}>
                    <div className="SpecificProduct">
                      <img src={EPsheetedited3} className="d-block" alt="..." />
                      <h3>LED TV BOX</h3>
                      <p className='productPara'>PP Box with EPE Lining</p></div>
                  </Link>
                  <Link to="/productDetails/ledDivision/paperangletray" onMouseEnter={()=>{setRefrence(null)}} onMouseLeave={()=>{setRefrence(copyRef)}}>
                    <div className="SpecificProduct">
                      <img src={paperangleboardedited1} className="d-block " alt="..." />
                      <h3>Paper Angle Tray</h3>
                      <p className='productPara'>LED TV Tray</p></div>
                  </Link>
                </div>
              </div>
              <div className="carousel-item" >
                <div className="productImg" id="ProductImg">
                  <Link to="/productDetails/PlasticDivision/esdppreusablebinbox" onMouseEnter={()=>{setRefrence(null)}} onMouseLeave={()=>{setRefrence(copyRef)}}>
                    <div className="SpecificProduct">
                      <img src={esdbinedited2} className="d-block " alt="456" />
                      <h3>ESD PP box/bin</h3>
                      <p className='productPara'>Static Free and Reusable</p></div>
                  </Link>
                  <Link to="/productDetails/PaperDivision/papercorepipe" onMouseEnter={()=>{setRefrence(null)}} onMouseLeave={()=>{setRefrence(copyRef)}}>
                    <div className="SpecificProduct">
                      <img src={ESDppbin1edited} className="d-block " alt="456" />
                      <h3>Paper Core Pipe</h3>
                      <p className='productPara'>Heavy Duty and Eco-friendly</p></div>
                  </Link>
                  <Link to="/productDetails/PlasticDivision/ppbinbox" onMouseEnter={()=>{setRefrence(null)}} onMouseLeave={()=>{setRefrence(copyRef)}}>
                    <div className="SpecificProduct">
                      <img src={ppcorrugatedbox2edited} className="d-block " alt="456" />
                      <h3>PP Bin/Box</h3>
                      <p className='productPara'>Recyclable & Reusable</p></div>
                  </Link>
                </div>
              </div>
              <div className="carousel-item">
                <div className="productImg" id="ProductImg">
                  <Link to="/productDetails/PlasticDivision/epefitments" onMouseEnter={()=>{setRefrence(null)}} onMouseLeave={()=>{setRefrence(copyRef)}}>
                    <div className="SpecificProduct">
                      <img src={EPfitmentedited} className="d-block" alt="789" />
                      <h3>EPE Fitments</h3>
                      <p className='productPara'>Customisable</p></div>
                  </Link>
                  <Link to="/productDetails/PaperDivision/paperangleboard" onMouseEnter={()=>{setRefrence(null)}} onMouseLeave={()=>{setRefrence(copyRef)}}>
                    <div className="SpecificProduct">
                      <img src={Paperangleboardedited2} className="d-block" alt="789" />
                      <h3>Paper Angle Board</h3>
                      <p className='productPara'>Cost & Environment effective</p></div>
                  </Link>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev But"  data-bs-target=" #carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" id="arrow" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next But" type="button"ref={refrence} id='button' data-bs-target=" #carouselExample" data-bs-slide="next">
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
                  <Link to="/productDetails/PaperDivision/edgeprotector/">
                    <div className="SpecificProduct">
                      <img src={Paperangleboardedited3} className="d-block " alt="123" />
                      <h3>Edge Protector</h3>
                      <p className='productPara'>Provides corner reinforcement</p></div>
                  </Link>
                </div>
                <div className="carousel-item">
                <Link to="/productDetails/ledDivision/ppboxwithepelining">
                    <div className="SpecificProduct">
                      <img src={EPsheetedited3} className="d-block" alt="..." />
                      <h3>LED TV BOX</h3>
                      <p className='productPara'>PP Box with EPE Lining</p></div>
                  </Link>
                </div>
                <div className="carousel-item">
                <Link to="/productDetails/ledDivision/paperangletray">
                    <div className="SpecificProduct">
                      <img src={paperangleboardedited1} className="d-block " alt="..." />
                      <h3>Paper Angle Tray</h3>
                      <p className='productPara'>LED TV Tray</p></div>
                  </Link>
                </div>
                <div className="carousel-item">
                  <Link to="/productDetails/PlasticDivision/esdppreusablebinbox">
                    <div className="SpecificProduct">
                      <img src={esdbinedited2} className="d-block " alt="456" />
                      <h3>ESD PP Resuable box</h3>
                      <p className='productPara'>Waterproof & sustainable </p></div>
                  </Link>
                </div>
                <div className="carousel-item">
                <Link to="/productDetails/PaperDivision/papercorepipe">
                    <div className="SpecificProduct">
                      <img src={ESDppbin1edited} className="d-block " alt="456" />
                      <h3>Paper Core Pipe</h3>
                      <p className='productPara'>Heavy Duty and Eco-friendly</p></div>
                  </Link>
                </div>
                <div className="carousel-item">
                  <Link to="/productDetails/PlasticDivision/ppbinbox">
                    <div className="SpecificProduct">
                      <img src={ppcorrugatedbox2edited} className="d-block " alt="456" />
                      <h3>PP Bin/Box</h3>
                      <p className='productPara'>Recyclable & Reusable</p></div>
                  </Link>
                </div>
                <div className="carousel-item">
                  <Link to="/productDetails/PlasticDivision/epefitments">
                    <div className="SpecificProduct">
                      <img src={EPfitmentedited} className="d-block" alt="789" />
                      <h3>EPE Fitments</h3>
                      <p className='productPara'>Customisable</p></div>
                  </Link>
                </div>
                <div className="carousel-item">
                  <Link to="/productDetails/PaperDivision/paperangleboard">
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
              <button className="carousel-control-next" ref={refrence} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
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
