import React, { useEffect, useState } from 'react'
import './ProductDetails.css'
import details from "./Details.json"
import { useParams } from 'react-router-dom'
const ProductDetails = () => {
  const { name } = useParams();
  
  const [productDetails, setProductDetails] = useState({});
  useEffect(() => {
    for (let index = 0; index < details.length; index++) {
      const element = details[index];
      if (element.id === name) {
        setProductDetails({ ...details[index] });
        break;
      }
    }
  }, [name]);
  return (
    <div className='productDetails'>
      
      {
        (Object.keys(productDetails)).map((element)=>{
          return(
            <div key={element}>
              {element} : {productDetails[element]}
            </div>
          )
        })
      }
    </div>
  )
}

export default ProductDetails
