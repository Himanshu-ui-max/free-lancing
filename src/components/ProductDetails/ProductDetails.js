import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import details from "./Details.json";
import { useParams } from "react-router-dom";
import p from "../images/Paperangleboardedited2.jpg";
import p0 from "../images/Paperangleboardedited3.jpg";
import p1 from "../images/paperangleboardedited1.jpg";
import p2 from "../images/p2.jpg";
import p22 from "../images/p22.jpg";
import p222 from "../images/p2222.jpg";
import p2222 from "../images/p2222222.jpg";
import p4 from "../images/p2p.jpg";
import p44 from "../images/pp.jpg";
import p444 from "../images/PPcorrugatedbin.jpg";
import p4444 from "../images/ppcorrugatedbox2edited.jpg";
import p5 from "../images/p4p.jpg";
import p55 from "../images/ppcorrugatedcollapsablebinedited.jpg";
import p6 from "../images/epe1.jpg";
import p66 from "../images/epe2.jpg";
import p666 from "../images/epe4.jpg";
import p6666 from "../images/EPfitmentedited.jpg";
import p7 from "../images/esdbinedited2.jpg";
import p77 from "../images/ESDppbin1edited.jpg";
import p8 from "../images/EPsheetedited.jpg";
import p88 from "../images/editedEPsheet.jpg";
import p888 from "../images/EPsheetedited3.jpg";
import p9 from "../images/Epefoamroll.jpg";
import p10 from "../images/Airbubblepouchedited.jpg";
import p11 from "../images/Epefoampouchedited.jpg";
import p111 from "../images/EPE-foam-rollunderlay.jpg";
import a3 from "../images/3.png";
import a4 from "../images/4.png"
import { Link } from "react-router-dom";
const ProductDetails = () => {
  const { name } = useParams();
  const {division} = useParams();
  const [tabLi, setTabLi] = useState([]);
  const [imageVariable, setimageVariable] = useState("");
  const handleOnClick = (image) => {
    setimageVariable(image);
  };
  useEffect(() => {
    document.title = "Sai Super Pack - Product details";
    for (let index = 0; index < details.length; index++) {
      const element = details[index];
      if (element.id === name) {
        setimageVariable(element.imageAddress[0]);
      }
    }
    console.log(division);
    if(division === "PaperDivision"){
      setTabLi([
        "Paper Angle board","Paper Angle Protector","Paper Angle Tray","LCD Specialized"
      ])
    }
    if(division === "PlasticDivision"){
      setTabLi([
        "PP Bin/Box","PP Collapsable Bin/Box","EPE Fitments","ESD PP Reusable Bin/Box","EPE Foam Sheets","EPE Foam Roll","Air Bubble Pouches","EPE Pouch"
      ])
    }
    window.scrollTo(0, 0);
  }, [name,division]);
  return (
    <section id="top" >
      <aside className="tabs">
        <div >
        <p style={{fontFamily:"Montserrat", fontSize:"18px"}}> More Products </p>
        {
          tabLi.map((element)=>{
            let newstring = ''
            let arr = element.split(" ");
            for (let index = 0; index < arr.length; index++) {
              newstring += arr[index];
            }
            if(element === "PP Bin/Box"){
              newstring = 'ppbinbox'
            }
            if(element === "PP Collapsable Bin/Box"){
              newstring = 'ppcollapsablebinbox'
            }
            if(element === "ESD PP Reusable Bin/Box"){
              newstring = 'esdppreusablebinbox'
            }
            return <div key={newstring} >
              <Link style={{fontFamily:"Montserrat", fontSize:"16px"}} to={`/productDetails/${division}/${newstring.toLowerCase()}`}>
              <div className="hovereffect" style={{fontFamily:"Montserrat", fontSize:"16px"}}>{element}</div>
              
            </Link>
              </div> 
          })
        }
        </div>
      </aside>
      <div className="productDetails">
        {
          // eslint-disable-next-line
          details.map((element) => {
            if (element.id === name) {
              return (
                <>
                  <div id="imagesDiv">
                    <div className="tabs"></div>
                    <div id="mainImage">
                      <img
                        className="productImage"
                        src={
                          imageVariable === "p"
                            ? p
                            : imageVariable === "p0"
                            ? p0
                            : imageVariable === "p1"
                            ? p1
                            : imageVariable === "p2"
                            ? p2
                            : imageVariable === "p22"
                            ? p22
                            : imageVariable === "p222"
                            ? p222
                            : imageVariable === "p2222"
                            ? p2222
                            : imageVariable === "p4"
                            ? p4
                            : imageVariable === "p44"
                            ? p44
                            : imageVariable === "p444"
                            ? p444
                            : imageVariable === "p4444"
                            ? p4444
                            : imageVariable === "p5"
                            ? p5
                            : imageVariable === "p55"
                            ? p55
                            : imageVariable === "p6"
                            ? p6
                            : imageVariable === "p66"
                            ? p66
                            : imageVariable === "p666"
                            ? p666
                            : imageVariable === "p6666"
                            ? p6666
                            : imageVariable === "p7"
                            ? p7
                            : imageVariable === "p77"
                            ? p77
                            : imageVariable === "p8"
                            ? p8
                            : imageVariable === "p88"
                            ? p88
                            : imageVariable === "p888"
                            ? p888
                            : imageVariable === "p9"
                            ? p9
                            : imageVariable === "p10"
                            ? p10
                            : imageVariable === "p11"
                            ? p11
                            : imageVariable === "p111"
                            ? p111
                            : ""
                        }
                        alt={""}
                      />
                    </div>
                    <div id="imageButtons">
                      {element.imageAddress.map((e) => {
                        return (
                          <button
                            className="imgBt"
                            onClick={() => {
                              handleOnClick(e);
                            }}
                          >
                            <img
                              className="miniButtons"
                              src={
                                e === "p"
                                  ? p
                                  : e === "p0"
                                  ? p0
                                  : e === "p1"
                                  ? p1
                                  : e === "p2"
                                  ? p2
                                  : e === "p22"
                                  ? p22
                                  : e === "p222"
                                  ? p222
                                  : e === "p2222"
                                  ? p2222
                                  : e === "p4"
                                  ? p4
                                  : e === "p44"
                                  ? p44
                                  : e === "p444"
                                  ? p444
                                  : e === "p4444"
                                  ? p4444
                                  : e === "p5"
                                  ? p5
                                  : e === "p55"
                                  ? p55
                                  : e === "p6"
                                  ? p6
                                  : e === "p66"
                                  ? p66
                                  : e === "p666"
                                  ? p666
                                  : e === "p6666"
                                  ? p6666
                                  : e === "p7"
                                  ? p7
                                  : e === "p77"
                                  ? p77
                                  : e === "p8"
                                  ? p8
                                  : e === "p88"
                                  ? p88
                                  : e === "p888"
                                  ? p888
                                  : e === "p9"
                                  ? p9
                                  : e === "p10"
                                  ? p10
                                  : e === "p11"
                                  ? p11
                                  : e === "p111"
                                  ? p111
                                  : ""
                              }
                              alt={""}
                              height={"50px"}
                              width={"50px"}
                            />
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
                    <div className="spanSex" style={{ marginTop: "30px" }}>
                      {
                        // eslint-disable-next-line
                        Object.keys(element).map((item) => {
                          if (
                            !(
                              item === "name" ||
                              item === "Thickness" ||
                              item === "imageAddress" ||
                              item === "id"
                            )
                          )
                            return (
                              <p key={item}>
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "row",
                                  }}
                                >
                                  <b style={{ marginRight: "4px" }}>{item}</b> :
                                  <div
                                    className="contentDiv"
                                    style={{ marginLeft: "4px" }}
                                  >
                                    {" "}
                                    {element[item]}
                                  </div>
                                </div>
                              </p>
                            );
                        })
                      }
                    </div>
                    <div className="yoyo" style={{ width: "250px", display:"flex", flexDirection:"row" }}>
                      <div
                        style={{
                          width: 90,
                          height: 90,
                          background: "white",
                          borderRadius: 9999,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: '0px 2px 12px 2px rgba(0, 0, 0, 0.05)'
                        }}
                      >
                        <img src={a3} alt="" style={{ height: "50px" }}></img>
                      </div>
                      <div
                        style={{
                          width: 90,
                          height: 90,
                          background: "white",
                          borderRadius: 9999,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginLeft:"20px",
                          boxShadow: '0px 2px 12px 2px rgba(0, 0, 0, 0.05)'
                        }}
                      >
                        <img src={a4} alt="" style={{ height: "50px" }}></img>
                      </div>
                    </div>
                    <div className="buttonDiv">
                      <button className="MemberBTT3" style={{ width: "300px" }}>
                        <a
                          className="atag"
                          href="mailto:saisuperpack@email.com?subject=Drop%20In%20Your%20requestsSubject&body="
                          target="_blank"
                          rel="noreferrer"
                          style={{ fontSize: "1.4rem" }}
                        >
                          Send your enquiry
                        </a>
                      </button>
                    </div>
                  </div>
                </>
              );
            }
          })
        }
      </div>
    </section>
  );
};

export default ProductDetails;
