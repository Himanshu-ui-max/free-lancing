import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import details from "./Details.json";
import { useParams } from "react-router-dom";
// import  p from "../images/Paperangleboardedited2.jpg"
// import p0 from "../images/Paperangleboardedited3.jpg"
// import p1  from "../images/paperangleboardedited1.jpg"
// import p2 from "../images/p2.jpg"
// import p22 from "../images/p22.jpg"
// import p222 from "../images/p2222.jpg"
// import p2222 from "../images/p2222222.jpg"
// import p4 from "../images/p2p.jpg"
// import p44 from "../images/pp.jpg"
// import p444 from "../images/PPcorrugatedbin.jpg"
// import p4444 from "../images/ppcorrugatedbox2edited.jpg"
// import p5 from "../images/p4p.jpg"
// import p55 from "../images/ppcorrugatedcollapsablebinedited.jpg"
// import p6 from "../images/epe1.jpg"
// import p66 from "../images/epe2.jpg"
// import p666 from "../images/epe4.jpg"
// import p6666 from "../images/EPfitmentedited.jpg"
// import p7 from "../images/esdbinedited2.jpg"
// import p77 from "../images/ESDppbin1edited.jpg"
// import p8 from "../images/EPsheetedited.jpg"
// import p88 from "../images/editedEPsheet.jpg"
// import p888 from "../images/EPsheetedited3.jpg"
// import p9 from "../images/Epefoamroll.jpg"
// import p10 from "../images/Airbubblepouchedited.jpg"
// import p11 from "../images/Epefoampouchedited.jpg"
// import p111 from "../images/EPE-foam-rollunderlay.jpg"
const ProductDetails = () => {
  const { name } = useParams();
  const [imageVariable, setimageVariable] = useState("");
  const handleOnClick = (image) => {
    setimageVariable(image);
  };
  let i = -1;
  useEffect(() => {
    for (let index = 0; index < details.length; index++) {
      const element = details[index];
      if (element.id === name) {
        setimageVariable(element.imageAddress[0]);
      }
    }
  }, [name]);
  return (
    <div className="productDetails">
      {details.map((element) => {
        if (element.id === name) {
          return (
            <>
              <div id="imagesDiv">
                <div id="mainImage">
                  <img className="productImage" src={imageVariable} alt={""} />
                </div>
                <div id="imageButtons">
                  {element.imageAddress.map((e) => {
                    return (
                      <button
                        onClick={() => {
                          handleOnClick(e);
                        }}
                      >
                        <img className="miniButtons" src={e} alt={""} height={"50px"} width={"50px"} />
                      </button>
                    );
                  })}
                </div>
              </div>
              <div id="detailsDiv">
                <b style={{ fontSize: "1.9rem", fontFamily: "poppins" }}>
                  {" "}
                  {element.name}
                </b>
                <p
                  style={{
                    fontFamily: "poppins",
                    color: "gray",
                    fontSize: "0.9rem",
                    marginTop: "10px",
                  }}
                >
                  {" "}
                  {element.Thickness
                    ? "Thickness-Ranging from " + element.Thickness
                    : ""}
                </p>
                <div className="spanSex" style={{ marginTop: "30px",}}>
                  {Object.keys(element).map((item) => {
                    if (
                      !(
                        item === "name" ||
                        item === "Thickness" ||
                        item === "imageAddress" ||
                        item === "id"
                      )
                    )
                      return (
                        <p  key={item}>
                          <div 
                            style={{ display: "flex", flexDirection: "row"}}
                          >
                            <b style={{ marginRight: "4px"}}>{item}</b> :
                            <div className="contentDiv" style={{ marginLeft: "4px" }}>
                              {" "}
                              {element[item]}
                            </div>
                          </div>
                        </p>
                      );
                  })}
                </div>
                <div style={{width : '250px'}}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100"
                    height="100"
                    viewBox="0 0 186 186"
                    fill="none"
                  >
                    <g filter="url(#filter0_d_138_156)">
                      <circle cx="93" cy="91" r="79" fill="white" />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_138_156"
                        x="0"
                        y="0"
                        width="186"
                        height="186"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feMorphology
                          radius="2"
                          operator="dilate"
                          in="SourceAlpha"
                          result="effect1_dropShadow_138_156"
                        />
                        <feOffset dy="2" />
                        <feGaussianBlur stdDeviation="6" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_138_156"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_138_156"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100"
                    height="100"
                    viewBox="0 0 186 186"
                    fill="none"
                  >
                    <g filter="url(#filter0_d_138_156)">
                      <circle cx="93" cy="91" r="79" fill="white" />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_138_156"
                        x="0"
                        y="0"
                        width="186"
                        height="186"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feMorphology
                          radius="2"
                          operator="dilate"
                          in="SourceAlpha"
                          result="effect1_dropShadow_138_156"
                        />
                        <feOffset dy="2" />
                        <feGaussianBlur stdDeviation="6" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_138_156"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_138_156"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
                <div className="buttonDiv"><button className='MemberBTT3' style={{width : "300px"}}><a className='atag' href='mailto:saisuperpack@email.com?subject=Drop%20In%20Your%20requestsSubject&body=' target='_blank' rel="noreferrer" style={{fontSize : '1.4rem'}}>Send your enquiry</a></button></div>
              </div>
            </>
          );
        }
      })}
    </div>
  );
};

export default ProductDetails;
