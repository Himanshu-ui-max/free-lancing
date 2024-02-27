import React, { useEffect, useRef, useState } from "react";
import "./ProductDetails.css";
import details from "./Details.json";
import { useParams } from "react-router-dom";
import p from "../images/Paperangleboardedited2.jpg";
import pp from "../images/Brown Edge Protector.jpg";
import ppp from "../images/Corruguted Abgle Board.jpg";
import pppp from "../images/Kraft Paper Angle Board.jpg";
import ppppp from "../images/Paper Angle Board.jpg";
import pppppp from "../images/Paper edge protectors.jpeg";
import p0 from "../images/Paperangleboardedited3.jpg";
import p00 from "../images/paper-edge-protectors-05-1537523995_p_4325223_792084.jpeg";
import p000 from "../images/Paper-Round-Edge-Protector.jpg";
import p0000 from "../images/OD Protector.png";
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
import p66666 from "../images/IMG_1199.jpg";
import p666666 from "../images/IMG_1182.jpg";
import p6666666 from "../images/IMG_1196.jpg";
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
import p12 from "../images/Core pipe 1 2.jpg"
import p121 from "../images/core pipe 9.jpg"
import p1211 from "../images/core pipe 5.jpeg"
import p13 from "../images/DSC06823.jpg"
import p131 from "../images/DSC06824.jpg"
import p1311 from "../images/DSC06825.jpg"
import p13111 from "../images/DSC06841.jpg"
import p131111 from "../images/DSC06844.jpg"
import p14 from "../images/DSC06859.jpg"
import p141 from "../images/DSC06864.jpg"
import p15 from "../images/DSC06873.jpg"
import p151 from "../images/DSC06877.jpg"
import { Link } from "react-router-dom";
const ProductDetails = () => {
  const handleClick=()=>{
    anyRef.current.click();
  }
  const anyRef = useRef();
  const { name } = useParams();
  const { division } = useParams();
  const [tabLi, setTabLi] = useState([]);
  const [imageVariable, setimageVariable] = useState("");
  const handleOnClick = (image) => {
    setimageVariable(image);
  };
  const [width, setWidth] = useState(window.innerWidth);
  const detectWidth = () => {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    document.title = "Sai Super Pack - Product details";
    for (let index = 0; index < details.length; index++) {
      const element = details[index];
      if (element.id === name) {
        setimageVariable(element.imageAddress[0]);
      }
    }
    console.log(division);
    if (division === "PaperDivision") {
      setTabLi([
        "Paper Angle board", "Edge Protector", "Paper Edge Protector", "Paper Core Pipe", "LCD Specialized"
      ])
    }
    if (division === "PlasticDivision") {
      setTabLi([
        "PP Bin/Box", "PP Collapsable Bin/Box", "EPE Fitments", "ESD PP Reusable Bin/Box", "EPE Foam Sheets", "EPE Foam Roll", "Air Bubble Pouches", "EPE Pouch"
      ])
    }
    if (division === "ledDivision") {
      setTabLi(["LED EPE Fitment", "PP Box with EPE Lining", "Paper Angle tray"])
    }
    window.scrollTo(0, 0);
    window.addEventListener('resize', detectWidth);
    return () => {
      window.removeEventListener('resize', detectWidth)
    }
  }, [name, division, width]);
  return (
    <section id="top" >
      {width > 1100 ? (<><aside className="tabs">
        <div >
          <p style={{ fontFamily: "Montserrat", fontSize: "18px" }}>{division === "PaperDivision" ? "Paper Division" : division === "PlasticDivision" ? "Plastic Division" : division === "ledDivision" ? "LED Division" : ""} </p>
          {
            tabLi.map((element) => {
              let newstring = ''
              let arr = element.split(" ");
              for (let index = 0; index < arr.length; index++) {
                newstring += arr[index];
              }
              if (element === "PP Bin/Box") {
                newstring = 'ppbinbox'
              }
              if (element === "PP Collapsable Bin/Box") {
                newstring = 'ppcollapsablebinbox'
              }
              if (element === "ESD PP Reusable Bin/Box") {
                newstring = 'esdppreusablebinbox'
              }
              return <div key={newstring} >
                <Link style={{ fontFamily: "Montserrat", fontSize: "16px" }} to={`/productDetails/${division}/${newstring.toLowerCase()}`}>
                  <div className="hovereffect" style={{ fontFamily: "Montserrat", fontSize: "16px" }}>{element}</div>

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
                  <div className="hfhv">
                    <div id="imagesDiv" >
                      <div className="tabs"></div>
                      <div id="mainImage">
                        <img
                          className="productImage"
                          src={
                            imageVariable === "p"
                              ? p
                              : imageVariable === "pp"
                                ? pp
                                : imageVariable === "ppp"
                                  ? ppp
                                  : imageVariable === "pppp"
                                    ? pppp
                                    : imageVariable === "ppppp"
                                      ? ppppp
                                      : imageVariable === "pppppp"
                                        ? pppppp
                                        : imageVariable === "p0"
                                          ? p0
                                          : imageVariable === "p00"
                                            ? p00
                                            : imageVariable === "p000"
                                              ? p000
                                              : imageVariable === "p0000"
                                                ? p0000
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
                                                                              : imageVariable === "p66666"
                                                                                ? p66666
                                                                                : imageVariable === "p666666"
                                                                                  ? p666666
                                                                                  : imageVariable === "p6666666"
                                                                                    ? p6666666
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
                                                                                                      : imageVariable === "p12"
                                                                                                        ? p12
                                                                                                        : imageVariable === "p121"
                                                                                                          ? p121
                                                                                                          : imageVariable === "p1211"
                                                                                                            ? p1211
                                                                                                            : imageVariable === "p13"
                                                                                                              ? p13
                                                                                                              : imageVariable === "p131"
                                                                                                                ? p131
                                                                                                                : imageVariable === "p1311"
                                                                                                                  ? p1311
                                                                                                                  : imageVariable === "p13111"
                                                                                                                    ? p13111
                                                                                                                    : imageVariable === "p131111"
                                                                                                                      ? p131111
                                                                                                                      : imageVariable === "p14"
                                                                                                                        ? p14
                                                                                                                        : imageVariable === "p141"
                                                                                                                          ? p141
                                                                                                                          : imageVariable === "p15"
                                                                                                                            ? p15
                                                                                                                            : imageVariable === "p151"
                                                                                                                              ? p151
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
                                    : e === "pp"
                                      ? pp
                                      : e === "ppp"
                                        ? ppp
                                        : e === "pppp"
                                          ? pppp
                                          : e === "ppppp"
                                            ? ppppp
                                            : e === "pppppp"
                                              ? pppppp
                                              : e === "p0"
                                                ? p0
                                                : e === "p00"
                                                  ? p00
                                                  : e === "p000"
                                                    ? p000
                                                    : e === "p0000"
                                                      ? p0000
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
                                                                                    : e === "p66666"
                                                                                      ? p66666
                                                                                      : e === "p666666"
                                                                                        ? p666666
                                                                                        : e === "p6666666"
                                                                                          ? p6666666
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
                                                                                                            : e === "p12"
                                                                                                              ? p12
                                                                                                              : e === "p121"
                                                                                                                ? p121
                                                                                                                : e === "p1211"
                                                                                                                  ? p1211
                                                                                                                  : e === "p13"
                                                                                                                    ? p13
                                                                                                                    : e === "p131"
                                                                                                                      ? p131
                                                                                                                      : e === "p1311"
                                                                                                                        ? p1311
                                                                                                                        : e === "p13111"
                                                                                                                          ? p13111
                                                                                                                          : e === "p131111"
                                                                                                                            ? p131111
                                                                                                                            : e === "p14" ?
                                                                                                                              p14 :
                                                                                                                              e === "p141" ?
                                                                                                                                p141
                                                                                                                                : e === "p15" ?
                                                                                                                                  p15 :
                                                                                                                                  e === "p151" ?
                                                                                                                                    p151
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
                      <div className="spanSex" style={{ marginTop: "30px", fontSize: '1.3rem' }}>
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
                      <div className="yoyo" style={{ width: "250px", display: "flex", flexDirection: "row" }}>
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
                            marginLeft: "20px",
                            boxShadow: '0px 2px 12px 2px rgba(0, 0, 0, 0.05)'
                          }}
                        >
                          <img src={a4} alt="" style={{ height: "50px" }}></img>
                        </div>
                      </div>
                      <div className="buttonDiv2">
                        <button className="MemberBTT3" style={{ width: "260px", height: "60px" }}>
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
                  </div>
                );
              }
            })
          }
        </div></>) :
        // mobile HTML
        <>


          <div>
            <div className="offcanvas offcanvas-start vyvy" id="demo">
              <div className="offcanvas-header">
                <h1 style={{ fontFamily: "Montserrat", fontSize: "18px", color: "white" }} className="offcanvas-title">{division === "PaperDivision" ? "Paper Division" : division === "PlasticDivision" ? "Plastic Division" : division === "ledDivision" ? "LED Division" : ""}</h1>
                <button ref={anyRef} type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
              </div>

              {
                tabLi.map((element) => {
                  let newstring = ''
                  let arr = element.split(" ");
                  for (let index = 0; index < arr.length; index++) {
                    newstring += arr[index];
                  }
                  if (element === "PP Bin/Box") {
                    newstring = 'ppbinbox'
                  }
                  if (element === "PP Collapsable Bin/Box") {
                    newstring = 'ppcollapsablebinbox'
                  }
                  if (element === "ESD PP Reusable Bin/Box") {
                    newstring = 'esdppreusablebinbox'
                  }
                  <div></div>
                  return <div key={newstring} onClick={handleClick}>
                    <Link style={{ fontFamily: "Montserrat", fontSize: "16px", color: "white" }} to={`/productDetails/${division}/${newstring.toLowerCase()}`}>
                      <div className="hovereffect offcanvas-body click" style={{ fontFamily: "Montserrat", fontSize: "16px" }}>
                        <div>{element}</div>
                      </div>

                    </Link>
                  </div>
                })
              }
            </div>
            <div class="container-fluid mt-3" >
              <button class="btn btn-primary vyvy" type="button" style={{ borderRadius: "50%", position: 'absolute', right: "20px", top: '100px', zIndex: '1' }} data-bs-toggle="offcanvas" data-bs-target="#demo">
                O
              </button>
            </div>
          </div>
          <div className="productDetails">
            {
              // eslint-disable-next-line
              details.map((element) => {
                if (element.id === name) {
                  return (
                    <div className="hfhv">
                      <div id="imagesDiv" >
                        <div className="tabs"></div>
                        <div id="mainImage">
                          <img
                            className="productImage"
                            src={
                              imageVariable === "p"
                                ? p
                                : imageVariable === "pp"
                                  ? pp
                                  : imageVariable === "ppp"
                                    ? ppp
                                    : imageVariable === "pppp"
                                      ? pppp
                                      : imageVariable === "ppppp"
                                        ? ppppp
                                        : imageVariable === "pppppp"
                                          ? pppppp
                                          : imageVariable === "p0"
                                            ? p0
                                            : imageVariable === "p00"
                                              ? p00
                                              : imageVariable === "p000"
                                                ? p000
                                                : imageVariable === "p0000"
                                                  ? p0000
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
                                                                                : imageVariable === "p66666"
                                                                                  ? p66666
                                                                                  : imageVariable === "p666666"
                                                                                    ? p666666
                                                                                    : imageVariable === "p6666666"
                                                                                      ? p6666666
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
                                                                                                        : imageVariable === "p12"
                                                                                                          ? p12
                                                                                                          : imageVariable === "p121"
                                                                                                            ? p121
                                                                                                            : imageVariable === "p1211"
                                                                                                              ? p1211
                                                                                                              : imageVariable === "p13"
                                                                                                                ? p13
                                                                                                                : imageVariable === "p131"
                                                                                                                  ? p131
                                                                                                                  : imageVariable === "p1311"
                                                                                                                    ? p1311
                                                                                                                    : imageVariable === "p13111"
                                                                                                                      ? p13111
                                                                                                                      : imageVariable === "p131111"
                                                                                                                        ? p131111
                                                                                                                        : imageVariable === "p14"
                                                                                                                          ? p14
                                                                                                                          : imageVariable === "p141"
                                                                                                                            ? p141
                                                                                                                            : imageVariable === "p15"
                                                                                                                              ? p15
                                                                                                                              : imageVariable === "p151"
                                                                                                                                ? p151
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
                                      : e === "pp"
                                        ? pp
                                        : e === "ppp"
                                          ? ppp
                                          : e === "pppp"
                                            ? pppp
                                            : e === "ppppp"
                                              ? ppppp
                                              : e === "pppppp"
                                                ? pppppp
                                                : e === "p0"
                                                  ? p0
                                                  : e === "p00"
                                                    ? p00
                                                    : e === "p000"
                                                      ? p000
                                                      : e === "p0000"
                                                        ? p0000
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
                                                                                      : e === "p66666"
                                                                                        ? p66666
                                                                                        : e === "p666666"
                                                                                          ? p666666
                                                                                          : e === "p6666666"
                                                                                            ? p6666666
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
                                                                                                              : e === "p12"
                                                                                                                ? p12
                                                                                                                : e === "p121"
                                                                                                                  ? p121
                                                                                                                  : e === "p1211"
                                                                                                                    ? p1211
                                                                                                                    : e === "p13"
                                                                                                                      ? p13
                                                                                                                      : e === "p131"
                                                                                                                        ? p131
                                                                                                                        : e === "p1311"
                                                                                                                          ? p1311
                                                                                                                          : e === "p13111"
                                                                                                                            ? p13111
                                                                                                                            : e === "p131111"
                                                                                                                              ? p131111
                                                                                                                              : e === "p14" ?
                                                                                                                                p14 :
                                                                                                                                e === "p141" ?
                                                                                                                                  p141
                                                                                                                                  : e === "p15" ?
                                                                                                                                    p15 :
                                                                                                                                    e === "p151" ?
                                                                                                                                      p151
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
                        <div className="spanSex" style={{ marginTop: "30px", fontSize: '1.3rem' }}>
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
                                      <b className="bold" style={{ marginRight: "4px" }}>{item}</b> <span className="Span">:</span> 
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
                        <div className="yoyo" style={{ width: "250px", display: "flex", flexDirection: "row" }}>
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
                              marginLeft: "20px",
                              boxShadow: '0px 2px 12px 2px rgba(0, 0, 0, 0.05)'
                            }}
                          >
                            <img src={a4} alt="" style={{ height: "50px" }}></img>
                          </div>
                        </div>
                        <div className="buttonDiv2">
                          <button className="MemberBTT3" style={{ width: "260px", height: "60px" }}>
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
                    </div>
                  );
                }
              })
            }
          </div></>
      }
    </section>
  );
};

export default ProductDetails;
