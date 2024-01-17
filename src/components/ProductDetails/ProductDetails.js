import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import details from "./Details.json";
import { useParams } from "react-router-dom";
import esdbinedited2 from "../images/esdbinedited2.jpg"
import Paperangleboardedited3 from  "../images/Paperangleboardedited3.jpg"
import Paperangleboardedited1 from "../images/paperangleboardedited1.jpg"
import p2 from "../images/p2.jpg"
const ProductDetails = () => {
  const { name } = useParams();
  let i = -1
  return (
    <div className="productDetails">
      {details.map((element) => {
        if (element.id === name) {
          return (
            <>
            
              <div id="imageDiv">
                {element.imageAddress.map((element) => {
                  i++;
                  return (
                    <>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={`${i}`}aria-label={`Slide ${i+1}}`}><img src={element}></img></button>
                    </>
                  );
                })}
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
