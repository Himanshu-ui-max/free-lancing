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
            {/* <div className="carousel-indicators">
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
            </div> */}
            <div className="ProductHeading">
              <h1>Our Testimonials</h1>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <div className="productImg" id="ProductImg">
                  <div className="SpecificProduct">
                    <div className="card text-center">
                      <div className="card-body" style={{display : "flex",alignItems : "center",justifyContent : "center", flexDirection : "column"}}>
                        <p className="card-text" style={{fontFamily:"Poppins"}}>
                        <i>The team at Sai Super Pack has been our key vendor for PP Boxes & bins, and their dedicated work ethic has always ensured our continuous timely supply.</i>
                        </p>
                        <span className="position"> Automobile Tier 1 vendor of Suzuki, Honda & many more. </span>
                      </div>
                    </div>
                  </div>
                  <div className="SpecificProduct">
                  <div className="card text-center" >
                      <div className="card-body"  style={{display : "flex",alignItems : "center",justifyContent : "center", flexDirection : "column"}}>
                       
                        <p className="card-text" style={{fontFamily:"Poppins"}}>
                        <i>Being one of our key vendors, their team is able to maintain impeccable stock of our running items and are able to deliver within 24 hours of allocation at 3 different locations.</i>
                        </p>
                        <span className="position"> Key Mobile Phone Manufacturer of Tier 1 Companies like Samsung, Vivo, Oppo & many more.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="carousel-item" data-bs-interval="2000">
                <div className="productImg" id="ProductImg">
                  <div className="SpecificProduct">
                  <div className="card text-center" ><img className="card-img-top" src="https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300" alt=""/>
                      <div className="card-body">
                       
                        <p className="card-text" style={{fontFamily:"Poppins"}}>
                        <i>“Sai Super Pack stands out with their quality commitment and client-oriented approach. Reusable PP bins reduce our environmental impact and offer cost-effective, durable solutions. A reliable partner for businesses seeking top-notch packaging.”</i>
                        </p>
                        <span className="position">CEO, </span><span className="company">XYZ</span>
                      </div>
                    </div>
                  </div>

                  <div className="SpecificProduct">
                  <div className="card text-center" ><img className="card-img-top" src="https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300" alt=""/>
                      <div className="card-body">
                       
                        <p className="card-text" style={{fontFamily:"Poppins"}}>
                        <i>“Choosing Sai Super Pack has been a game-changer. Custom solutions, including EP foams, ensure our products reach their destination intact. The team’s enthusiasm and expertise make the process seamless. A decade of dedicated work makes Sai Super Pack synonymous with quality and reliability.”</i>
                        </p>
                        <span className="position">CEO, </span><span className="company">XYZ</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            {/* <button
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
            </button> */}
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
              </div>
              <div className="ProductHeading">
                <h1>Our Testimonials</h1>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                  <div className="productImg" id="ProductImg">
                    <div className="SpecificProduct">
                    <div className="card text-center" >
                      <div className="card-body"  style={{display : "flex",alignItems : "center",justifyContent : "center", flexDirection : "column"}}>
                       
                        <p className="card-text" style={{fontFamily:"Poppins", paddingTop : "26px"}}>
                        <i>Being one of our key vendors, their team is able to maintain impeccable stock of our running items and are able to deliver within 24 hours of allocation at 3 different locations.</i>
                        </p>
                        <span className="position">Automobile Tier 1 vendor of Suzuki, Honda & many more.</span>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <div className="productImg" id="ProductImg">
                    <div className="SpecificProduct">
                    <div className="card text-center" >
                      <div className="card-body"  style={{display : "flex",alignItems : "center",justifyContent : "center", flexDirection : "column"}}>
                       
                        <p className="card-text" style={{fontFamily:"Poppins", paddingTop : "26px"}}>
                        <i>The team at Sai Super Pack has been our key vendor for PP Boxes & bins, and their dedicated work ethic has always ensured our continuous timely supply.</i>
                        </p>
                        <span className="position">Key Mobile Phone Manufacturer of Tier 1 Companies like Samsung, Vivo, Oppo & many more.</span>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
                {/* <div className="carousel-item" data-bs-interval="2000">
                  <div className="productImg" id="ProductImg">
                    <div className="SpecificProduct">
                    <div className="card text-center" ><img className="card-img-top" src="https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300" alt=""/>
                      <div className="card-body">
                       
                        <p className="card-text" style={{fontFamily:"Poppins", paddingTop : "26px"}}>
                        <i>“Impressed with Sai Super Pack’s nationwide reach and 'You Ask, We Deliver' approach. Custom solutions, from recyclable PP bins to edge boards, have minimized our transit damage. The team's dedication makes them our preferred choice for packaging. Highly recommended!”</i>
                        </p>
                        <span className="position">CEO, </span><span className="company">XYZ</span>
                      </div>
                    </div>
                    </div>
                  </div>
                </div> */}
                {/* <div className="carousel-item">
                  <div className="productImg" id="ProductImg">
                    <div className="SpecificProduct">
                    <div className="card text-center" ><img className="card-img-top" src="https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300" alt=""/>
                      <div className="card-body">
                       
                        <p className="card-text" style={{fontFamily:"Poppins", paddingTop : "26px"}}>
                        <i>“Sai Super Pack stands out with their quality commitment and client-oriented approach. Reusable PP bins reduce our environmental impact and offer cost-effective, durable solutions. A reliable partner for businesses seeking top-notch packaging.”</i>
                        </p>
                        <span className="position">CEO, </span><span className="company">XYZ</span>
                      </div>
                    </div>
                    </div>
                  </div>
                </div> */}
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
