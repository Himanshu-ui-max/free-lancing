import React from "react";
import "./ChooseUsPage.css";
const ChooseUsPage = () => {
  return (
    <div className="chooseus" style={{overflow : 'hidden'}}>
      <div
        className="d-flex justify-content-center"
        style={{ fontSize: "40px" ,marginBottom:"60px"}}
      >
        Why Choose Us
      </div>
      <div className="d-flex justify-content-evenly" id="chooseUs">
        <div style={{ alignItems: "center", justifyContent: "center", width:"150px", height:"200px", textAlign:"center", marginBottom:"50px"}}>
         
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 196 196"
            fill="none"
            style={{marginBottom:"15px"}}
          >
            
            <circle cx="98" cy="98" r="98" fill="#E4E4E4" />
          </svg>
          <p style={{ fontSize: "12px", }}>
          Zero-Wastage policy and 100% recyclable products for environmentally conscious choices.{" "}
          </p>
        </div>
        
        <div style={{ alignItems: "center", justifyContent: "center", width:"150px", height:"200px", textAlign:"center" , marginBottom:"50px"}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 196 196"
            fill="none"
            style={{marginBottom:"15px"}}
          >
            <circle cx="98" cy="98" r="98" fill="#E4E4E4" />
          </svg>
          <p style={{ fontSize: "12px" }}>
          Pan India reach ensures prompt delivery to customers across the country.{" "}
          </p>
        </div>
        <div style={{ alignItems: "center", justifyContent: "center", width:"150px", height:"200px", textAlign:"center" , marginBottom:"50px"}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 196 196"
            fill="none"
            style={{marginBottom:"15px"}}
          >
            <circle cx="98" cy="98" r="98" fill="#E4E4E4" />
          </svg>
          <p style={{ fontSize: "12px" }}>
          Skilled designers and enthusiastic team providing tailored solutions to meet specific customer needs.{" "}
          </p>
        </div>
        <div style={{ alignItems: "center", justifyContent: "center", width:"150px", height:"200px", textAlign:"center"}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 196 196"
            fill="none"
            style={{marginBottom:"15px"}}
          >
            <circle cx="98" cy="98" r="98" fill="#E4E4E4" />
          </svg>
          <p style={{ fontSize: "12px" }}>
          Spread over 2 acres, our state-of-the-art infrastructure ensures unmatched scale and efficiency for timely and high-quality delivery.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChooseUsPage;
