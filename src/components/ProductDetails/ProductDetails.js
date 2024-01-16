import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import details from "./Details.json";
import { useParams } from "react-router-dom";
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
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={`${i}`}aria-label={`Slide ${i+1}}`}></button>
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
