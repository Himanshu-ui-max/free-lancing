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
  const [imageVariable, setimageVariable] = useState('');
  const handleOnClick=(image)=>{
    setimageVariable(image)
  }
  let i = -1;
  useEffect(() => {
    for (let index = 0; index < details.length; index++) {
      const element = details[index];
      if(element.id === name){
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
                  <img src={imageVariable} alt="" />
                </div>
                <div id="imageButtons">
                  {
                    element.imageAddress.map((e)=>{
                      return(
                        <button onClick={()=>{handleOnClick(e)}}><img src={e} alt="" height={'100px'} width={'100px'}/></button>
                      )
                    })
                  }
                </div>
              </div>
              <div id="detailsDiv"></div>
            </>
          );
        }
      })}
    </div>
  );
};

export default ProductDetails;
