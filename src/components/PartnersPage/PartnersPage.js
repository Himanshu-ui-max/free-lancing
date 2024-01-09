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
    <div className='partners' id='partners' >
    <h1 style={{textAlign:'center'}}>Our Previous Partners</h1>
    <div style={{display:'flex',justifyContent:'center',gap:'4rem',marginTop:'4rem'}}>
      <div >
        <img style={{width:'200px',height:'150x'}} src={lg} alt="" />
      </div>
      <div >
       <img style={{width:'200px',height:'150px'}} src={samsung} alt="" />
      </div>
      <div >
       <img style={{width:'200px',height:'150px'}} src={hitachi} alt="" />
      </div>
      <div >
       <img style={{width:'200px',height:'150px'}} src={honda} alt="" />
      </div>
      <div >
       <img style={{width:'200px',height:'150px'}} src={suzuki} alt="" />
      </div>
    </div>
    </div>
    </>
  )
}

export default PartnersPage
