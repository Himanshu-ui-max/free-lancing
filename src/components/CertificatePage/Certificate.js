import React,{useState,useEffect} from 'react'
import './Certificate.css'
import iso from '../images/iso.png'
import jas from '../images/jas.png'
import img3 from '../images/3.png'
import img4 from '../images/4.png'
import tick   from '../images/tick.png'
const Certificate = () => {
    const [width, setWidth] = useState(window.innerWidth);
  const detectWidth=()=>{
      setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize',detectWidth);
    return () => {
      window.removeEventListener('resize', detectWidth)
    }
  }, [width]);

  return (
    <>
    <section id='certilogo'>
        {width > 970 ?(
    <div className="certiPage">
         <div className='certiContent'>
             <p50> 100% recyclable products with our guarantee of safe and tested assured performance of our products which comply with international authoritative standards.</p50>
         </div>
         <div className="certiImg"> 
        
          <img  style={{height:"80%",width:"9vw",objectFit:"contain"}} src={jas} alt="" />
         <img  style={{height:"80%",width:"9vw",objectFit:"contain"}} src={iso} alt="" />
         <img  style={{height:"80%",width:"9vw",objectFit:"contain"}} src={img3} alt="" />
         <img  style={{height:"80%",width:"9vw",objectFit:"contain"}} src={img4} alt="" />
         <img  style={{height:"80%",width:"9vw",objectFit:"contain"}} src={tick} alt="" />
           </div>
    </div>
):(
  <div className="certiPage">
         <div className='certiContent'>
             <p50> 100% recyclable products with our guarantee of safe and tested assured performance of our products which comply with international authoritative standards.</p50>
         </div>
          
         {// eslint-disable-next-line
          <marquee scrollamount="10" height="75%" direction="left" width="150%" style={{display : 'flex', justifyContent : "space-evenly", gap:"2 rem"}}> 
         <div className="certiImg" style={{display:"flex",flexDirection:"row",gap:"2rem"}}>
         <div className='certiIMG'>
        <img  style={{height:"55%",width:"20vw"}} src={jas} alt="" /></div>
         <div className='certiIMG'><img  style={{height:"55%",width:"20vw", gap:"2rem"}} src={iso} alt="" /></div>
        <div className='certiIMG'> <img  style={{height:"55%",width:"20vw", gap:"2rem"}} src={img3} alt="" /></div>
        <div className='certiIMG'> <img  style={{height:"55%",width:"20vw", gap:"2rem"}} src={img4} alt="" /></div>
         <div className='certiIMG'><img  style={{height:"55%",width:"20vw"}} src={tick} alt="" />
         </div>
           </div></marquee>}
    </div>
  )}
  </section>
      
    </>
  )
}

export default Certificate
