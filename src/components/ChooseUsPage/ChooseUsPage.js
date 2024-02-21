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
        style={{ fontSize: "40px", marginBottom: "60px", fontWeight : "600" }}
      >
        Why Choose Us
      </div>
      <div className="d-flex justify-content-around" id="chooseUs">
        <div
          className="whychooseus"
          style={{
            display:"flex",
            flexDirection:"column",
            alignItems: "center",
            // justifyContent: "center",
            width: "365px",
            height: "435px",
            textAlign: "center",
            marginBottom: "50px",
            borderRadius : "10px",
          }}
        >
          <div
          className="whychooseus1"
            style={{
              width: 175,
              height: 175,
              background: "#F4F4F4",
              borderRadius: 9999,
              display:"flex",
              alignItems:"center",
              justifyContent:"center",
              marginTop : "10px"
            }}
          >
            <img className="imagechoose"  src={group1} alt="" style={{ height: "120px" }}></img>
          </div>
          <p className="fontchooseus" style={{ fontSize: "22px", marginTop : '20px'}}>
            Zero-Wastage policy and 100% recyclable products for environmentally
            conscious choices.{" "}
          </p>
        </div>

        <div
        className="whychooseus"
          style={{
            display:"flex",
            flexDirection:"column",
            alignItems: "center",
            
            width: "365px",
            height: "435px",
            textAlign: "center",
            marginBottom: "50px",
            borderRadius : "10px"
          }}
        >
          <div
          className="whychooseus1"
            style={{
              width: 175,
              height: 175,
              background: "#F4F4F4",
              borderRadius: 9999,
              display:"flex",
              alignItems:"center",
              justifyContent:"center",
              marginTop : "10px"
            }}
          >
            <img className="imagechoose" src={group} alt="" style={{ height: "100px" }}></img>
          </div>
          <p className="fontchooseus" style={{ fontSize: "28px", marginTop : '20px' }}>
          Pan India reach ensures prompt delivery to customers across the country.{" "}
          </p>
        </div>
        <div
        className="whychooseus"
          style={{
            display:"flex",
            flexDirection:"column",
            alignItems: "center",
            // justifyContent: "center",
            width: "365px",
            height: "435px",
            textAlign: "center",
            marginBottom: "50px",
            borderRadius : "10px"
          }}
        >
          <div
          className="whychooseus1"
            style={{
              width: 175,
              height: 175,
              background: "#F4F4F4",
              borderRadius: 9999,
              display:"flex",
              alignItems:"center",
              justifyContent:"center",
              marginTop : "10px"
              
            }}
          >
            <img className="imagechoose" src={vector} alt="" style={{ height: "110px" }}></img>
          </div>
          <p className="fontchooseus" style={{ fontSize: "28px", marginTop : '20px'}}>
          Experienced team offering customized solutions for unique customer requirements.{" "}
          </p>
        </div>
        <div
        className="whychooseus"
          style={{
            display:"flex",
            flexDirection:"column",
            alignItems: "center",
            // justifyContent: "center",
            width: "365px",
            height: "435px",
            textAlign: "center",
            marginBottom: "50px",
            borderRadius : "10px"
          }}
        >
          <div
          className="whychooseus1"
            style={{
              width: 175,
              height: 175,
              background: "#F4F4F4",
              borderRadius: 9999,
              display:"flex",
              alignItems:"center",
              justifyContent:"center",
              marginTop : "10px"
              
            }}
          >
            <img className="imagechoose" src={group21} alt="" style={{ height: "110px" }}></img>
          </div>
          <p className="fontchooseus" style={{ fontSize: "28px", marginTop : '20px' }}>
          
On 2 acres, our advanced infrastructure guarantees efficient, timely, high-quality deliveries.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChooseUsPage;
