import React, { useEffect, useState } from "react";
import "./Testimonials.css";
const Testimonials = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const detectWidth = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", detectWidth);
    return () => {
      window.removeEventListener("resize", detectWidth);
    };
  }, [width]);
  return (
    <>
      <section id="testimonialsSample">
        {width > 970 ? (
          <div
            id="carouselExampleDark"
            className="carousel carousel-dark slide Fproducts"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark #IndicatioN"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark #IndicatioN"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
            </div>
            <div className="ProductHeading">
              <h1>Our Testimonials</h1>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <div className="productImg" id="ProductImg">
                  <div className="SpecificProduct">
                    <div class="card" style={{width:"21rem", height:"21rem"}}>
                      <div class="card-body">
                       
                        <p class="card-text" style={{fontFamily:"Poppins"}}>
                        <i>“Sai Super Pack’s commitment to sustainability and zero-wastage, coupled with their state-of-the-art infrastructure, has transformed our packaging approach. Their customized material handling crates minimize transit damage, and the expert team ensures each product meets our specific needs. A reliable partner for efficient and eco-friendly practices.”</i>
                        </p>
                        
                      </div>
                    </div>
                  </div>
                  <div className="SpecificProduct">
                  <div class="card" style={{width:"21rem", height:"21rem"}}>
                      <div class="card-body">
                       
                        <p class="card-text" style={{fontFamily:"Poppins"}}>
                        <i>“Impressed with Sai Super Pack’s nationwide reach and 'You Ask, We Deliver' approach. Custom solutions, from recyclable PP bins to edge boards, have minimized our transit damage. The team's dedication makes them our preferred choice for packaging. Highly recommended!”</i>
                        </p>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <div className="productImg" id="ProductImg">
                  <div className="SpecificProduct">
                  <div class="card" style={{width:"21rem", height:"21rem"}}>
                      <div class="card-body">
                       
                        <p class="card-text" style={{fontFamily:"Poppins"}}>
                        <i>“Sai Super Pack stands out with their quality commitment and client-oriented approach. Reusable PP bins reduce our environmental impact and offer cost-effective, durable solutions. A reliable partner for businesses seeking top-notch packaging.”</i>
                        </p>
                        
                      </div>
                    </div>
                  </div>

                  <div className="SpecificProduct">
                  <div class="card" style={{width:"21rem", height:"21rem"}}>
                      <div class="card-body">
                       
                        <p class="card-text" style={{fontFamily:"Poppins"}}>
                        <i>“Choosing Sai Super Pack has been a game-changer. Custom solutions, including EP foams, ensure our products reach their destination intact. The team’s enthusiasm and expertise make the process seamless. A decade of dedicated work makes Sai Super Pack synonymous with quality and reliability.”</i>
                        </p>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev But"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next But"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        ) : (
          <div>
            <div
              id="carouselExampleDark"
              className="carousel carousel-dark slide Fproducts"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark #IndicatioN"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark #IndicatioN"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark #IndicatioN"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark #IndicatioN"
                  data-bs-slide-to="3"
                  aria-label="Slide 4"
                ></button>
              </div>
              <div className="ProductHeading">
                <h1>Our Testimonials</h1>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                  <div className="productImg" id="ProductImg">
                    <div className="SpecificProduct">
                    <div class="card" style={{width:"18rem", height:"20rem"}}>
                      <div class="card-body">
                       
                        <p class="card-text" style={{fontFamily:"Poppins", paddingTop : "26px"}}>
                        <i>“Choosing Sai Super Pack has been a game-changer. Custom solutions, including EP foams, ensure our products reach their destination intact. The team’s enthusiasm and expertise make the process seamless. A decade of dedicated work makes Sai Super Pack synonymous with quality and reliability.”</i>
                        </p>
                        
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <div className="productImg" id="ProductImg">
                    <div className="SpecificProduct">
                    <div class="card" style={{width:"18rem", height:"20rem"}}>
                      <div class="card-body">
                       
                        <p class="card-text" style={{fontFamily:"Poppins", paddingTop : "26px"}}>
                        <i>“Sai Super Pack’s commitment to sustainability and zero-wastage, coupled with their state-of-the-art infrastructure, has transformed our packaging approach. Their customized material handling crates minimize transit damage, and the expert team ensures each product meets our specific needs. A reliable partner for efficient and eco-friendly practices.”</i>
                        </p>
                        
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <div className="productImg" id="ProductImg">
                    <div className="SpecificProduct">
                    <div class="card" style={{width:"18rem", height:"20rem"}}>
                      <div class="card-body">
                       
                        <p class="card-text" style={{fontFamily:"Poppins", paddingTop : "26px"}}>
                        <i>“Impressed with Sai Super Pack’s nationwide reach and 'You Ask, We Deliver' approach. Custom solutions, from recyclable PP bins to edge boards, have minimized our transit damage. The team's dedication makes them our preferred choice for packaging. Highly recommended!”</i>
                        </p>
                        
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="productImg" id="ProductImg">
                    <div className="SpecificProduct">
                    <div class="card" style={{width:"18rem", height:"20rem"}}>
                      <div class="card-body">
                       
                        <p class="card-text" style={{fontFamily:"Poppins", paddingTop : "26px"}}>
                        <i>“Sai Super Pack stands out with their quality commitment and client-oriented approach. Reusable PP bins reduce our environmental impact and offer cost-effective, durable solutions. A reliable partner for businesses seeking top-notch packaging.”</i>
                        </p>
                        
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev But"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next But"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Testimonials;
