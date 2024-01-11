import React from 'react'
import './partnersPage.css'
import lg from '../images/lg.png'
import samsung from '../images/samsung.png'
import hitachi from '../images/hitachi.png'
import honda from '../images/honda.png'
import suzuki from '../images/suzuki.png'
const PartnersPage = () => {
  return(
    <>
    <div className='partners' id='partners'>
    <h1 style={{textAlign:'center'}}>Our Previous Partners</h1>
    <div style={{display:'flex',justifyContent:'center',gap:'4rem',marginTop:'4rem',alignItems:'center'}} >
      <div className='imgp'>
        <img className='imgP' src={lg} alt="" />
      </div>
      <div className='imgp'>
       <img className='imgP'  src={samsung} alt="" />
      </div>
      <div className='imgp'>
       <img className='imgP' src={hitachi} alt="" />
      </div>
      <div className='imgp'>
       <img className='imgP' src={honda} alt="" />
      </div>
      <div className='imgp'>
       <img className='imgP' src={suzuki} alt="" />
      </div>
    </div>
    </div>
    </>
  )
}

export default PartnersPage
