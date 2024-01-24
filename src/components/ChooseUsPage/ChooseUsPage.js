import React from "react";
import "./ChooseUsPage.css";
import group1 from "../images/Group-1.png";
import group from "../images/Group.png"
import vector from "../images/Vector.png"
import group21 from "../images/Group21.png";
const ChooseUsPage = () => {
  return (
    <div className="chooseus" style={{ overflow: "hidden" }}>
      <div
        className="d-flex justify-content-center"
        style={{ fontSize: "40px", marginBottom: "60px" }}
      >
        Why Choose Us
      </div>
      <div className="d-flex justify-content-evenly" id="chooseUs">
        <div
          style={{
            display:"flex",
            flexDirection:"column",
            alignItems: "center",
            justifyContent: "center",
            width: "150px",
            height: "200px",
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          <div
            style={{
              width: 100,
              height: 100,
              background: "#F4F4F4",
              borderRadius: 9999,
              display:"flex",
              alignItems:"center",
              justifyContent:"center",
              
            }}
          >
            <img src={group1} alt="" style={{ height: "50px" }}></img>
          </div>
          <p style={{ fontSize: "12px" }}>
            Zero-Wastage policy and 100% recyclable products for environmentally
            conscious choices.{" "}
          </p>
        </div>

        <div
          style={{
            display:"flex",
            flexDirection:"column",
            alignItems: "center",
            justifyContent: "center",
            width: "150px",
            height: "200px",
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          <div
            style={{
              width: 100,
              height: 100,
              background: "#F4F4F4",
              borderRadius: 9999,
              display:"flex",
              alignItems:"center",
              justifyContent:"center",
              
            }}
          >
            <img src={group} alt="" style={{ height: "40px" }}></img>
          </div>
          <p style={{ fontSize: "12px" }}>
          Pan India reach ensures prompt delivery to customers across the country.{" "}
          </p>
        </div>
        <div
          style={{
            display:"flex",
            flexDirection:"column",
            alignItems: "center",
            justifyContent: "center",
            width: "150px",
            height: "250px",
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          <div
            style={{
              width: 100,
              height: 100,
              background: "#F4F4F4",
              borderRadius: 9999,
              display:"flex",
              alignItems:"center",
              justifyContent:"center",
              
            }}
          >
            <img src={vector} alt="" style={{ height: "50px" }}></img>
          </div>
          <p style={{ fontSize: "12px" }}>
          Skilled designers and enthusiastic team providing tailored solutions to meet specific customer needs.{" "}
          </p>
        </div>
        <div
          style={{
            display:"flex",
            flexDirection:"column",
            alignItems: "center",
            justifyContent: "center",
            width: "150px",
            height: "250px",
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          <div
            style={{
              width: 100,
              height: 100,
              background: "#F4F4F4",
              borderRadius: 9999,
              display:"flex",
              alignItems:"center",
              justifyContent:"center",
              
            }}
          >
            <img src={group21} alt="" style={{ height: "50px" }}></img>
          </div>
          <p style={{ fontSize: "12px" }}>
          Spread over 2 acres, our state-of-the-art infrastructure ensures unmatched scale and efficiency for timely and high-quality delivery.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChooseUsPage;
