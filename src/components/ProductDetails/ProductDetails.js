import React, { useEffect, useState } from 'react'
import './ProductDetails.css'
import details from "./Details.json"
import { useParams } from 'react-router-dom'
const ProductDetails = () => {
  const {name} = useParams();
  const findpos=(details)=>{
    for (let index = 0; index < details.length; index++) {
      const element = details[index];
      if(element.id === name){
        return index;
      }
    }
  }
  const [productDetails, setProductDetails] = useState({});
  useEffect(() => {
    let i = findpos(details);
    setProductDetails({...(details[i])});
    console.log(productDetails)
  }, [name]);
  return (
    <div className='productDetails'>
      this is product details
    </div>
  )
}

export default ProductDetails
