import React, { useEffect } from 'react'
import './CompanyProfile.css'

const CompanyProfile = () => {
  useEffect(() => {
    document.title = "Sai Super Pack - Company Profile"
    window.scroll(0 ,0);
  }, [ ]);
  return (
    <>
    <section className='companyProfile' style={{overflow:"hidden"}}>
    <div className='companyprofile' style={{overflow:"hidden"}}>
      <div className="IMGcont">
        <div className="ProfileText">Sai Super Pack</div>
      </div>
      <div className= 'PrFULL'>
        <div className="PrIMG" >
        <img src="https://saisuperpack.in/mobilesuperpack/factory.jpg" alt="Paris" style={{width:'70%',height:'70%'}}/>
        
        </div>
        <div className="PrTEXT">
        <div><h2>Company Profile</h2></div>
        <div  className='Prdesc'>
        Sai Super Pack is a prominent manufacturer and supplier of a broad array of Packaging Material like Air Bubble Pouches, PP Bins / Boxes, EPE Pouches, Stretch Film Rolls and more. These products are used in different industries for packaging of various goods. Our range of products shows a right mix of high-grade input material, advanced technology and cost-effectiveness. Keeping convenience, products' safety and high quality standards in mind, we offer efficient packaging solution for all kind of goods like delicate products, electronics items, furniture and many more. For an instance, our Air Bubble Pouches feature good cushioning, shockproof, anti-moisture and easy to use nature.
           </div>
           <div className="BUTT">
          <button className='BUTT'><a className='atag' href='https://online.fliphtml5.com/gqcm/bvhw/#p=1' target='_blank' rel="noreferrer"style={{fontSize : '1.4rem'}}>Download Full Company Profile</a></button>
          </div>
          </div>
      </div>
    </div>
    <div className="CompanyLoc">
      <div className="LocText"><h2>Company Location</h2></div>
      <div className="Companypro">
      <div className="AddDetails">
           <div id="NaMe">
            <div>
           <svg width="38" height="43" viewBox="0 0 38 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M36 40.25V36C36 33.7457 35.1045 31.5837 33.5104 29.9896C31.9163 28.3955 29.7543 27.5 27.5 27.5H10.5C8.24566 27.5 6.08365 28.3955 4.48959 29.9896C2.89553 31.5837 2 33.7457 2 36V40.25" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 19C23.6944 19 27.5 15.1944 27.5 10.5C27.5 5.80558 23.6944 2 19 2C14.3056 2 10.5 5.80558 10.5 10.5C10.5 15.1944 14.3056 19 19 19Z" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg></div>

           <div id="UsEr"><p1>Jitender Verma</p1>
           <p2>Managing Director</p2></div>
           </div>
           <div id="PHN">
            <div>
            <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M38.9989 29.7016V35.2716C39.001 35.7887 38.8948 36.3005 38.6873 36.7743C38.4797 37.2481 38.1753 37.6734 37.7935 38.0229C37.4117 38.3725 36.961 38.6386 36.4702 38.8043C35.9794 38.9699 35.4593 39.0315 34.9433 38.9849C29.2187 38.3641 23.7198 36.4119 18.8885 33.285C14.3935 30.4344 10.5826 26.631 7.72637 22.145C4.58234 17.3013 2.62575 11.7866 2.0151 6.04771C1.96861 5.53428 2.02975 5.01681 2.19462 4.52826C2.3595 4.0397 2.6245 3.59076 2.97274 3.21002C3.32099 2.82928 3.74486 2.52508 4.21737 2.31678C4.68987 2.10849 5.20065 2.00067 5.7172 2.00018H11.2982C12.2011 1.99131 13.0764 2.31039 13.7609 2.89794C14.4455 3.48549 14.8926 4.30142 15.0189 5.19364C15.2545 6.97616 15.6914 8.72637 16.3212 10.4109C16.5715 11.0754 16.6257 11.7976 16.4773 12.492C16.3289 13.1863 15.9842 13.8236 15.484 14.3284L13.1214 16.6864C15.7697 21.3346 19.626 25.1833 24.2835 27.8264L26.6461 25.4684C27.1519 24.9692 27.7905 24.6252 28.4862 24.4771C29.1819 24.329 29.9056 24.3831 30.5715 24.6329C32.2593 25.2615 34.013 25.6975 35.7991 25.9326C36.7027 26.0598 37.5281 26.5141 38.118 27.209C38.708 27.904 39.0215 28.7911 38.9989 29.7016Z" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg></div>
          <div id='Num'>
            <p3>Mobile : </p3><span>+91 7647857491</span></div></div>
           <div id="ADDlogo">
            <div>
           <svg width="42" height="51" viewBox="0 0 42 51" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M40 21C40 35.7778 21 48.4444 21 48.4444C21 48.4444 2 35.7778 2 21C2 15.9609 4.00178 11.1282 7.56497 7.56497C11.1282 4.00178 15.9609 2 21 2C26.0391 2 30.8718 4.00178 34.435 7.56497C37.9982 11.1282 40 15.9609 40 21Z" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 27.3333C24.4978 27.3333 27.3333 24.4978 27.3333 21C27.3333 17.5022 24.4978 14.6667 21 14.6667C17.5022 14.6667 14.6666 17.5022 14.6666 21C14.6666 24.4978 17.5022 27.3333 21 27.3333Z" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg></div>
       <div id="CompADD">
            <div><h5>Corporate Office</h5></div>
           <p5>J-30, Site-C, Surajpur Industrial Area, 
            </p5>
            <p6>Greater Noida - 201306, Uttar Pradesh, India</p6>
           </div>
           </div>
      </div>
      <div className="AddMap">
      {/* <img src="https://www.stiplindia.com/wp-content/uploads/2023/11/paper-machines-1-1024x589.jpg" alt="Paris"style={{width:"70%",height:"100%", borderRadius:"1rem"}}/> */}
      <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.744938590133!2d77.51713961202869!3d28.517320689200414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cebd529925621%3A0x5ce8c0a8b560c97f!2sSai%20Super%20Pack!5e0!3m2!1sen!2sin!4v1705816835886!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style={{width:"70%",height:"100%", borderRadius:"1rem"}}></iframe>
    
      </div>
      </div>
    </div>
    <div className="orderContent">
        <div className="OrderDR">
            <p11>Factory Units</p11>
            <p12>3 in Greater Noida, 2 in Sanand, Ahmedabad & Gujarat</p12>
            <div className="MemberBTT">
            <button className='MemberBTT1'><a className='atag' href='https://www.tradeindia.com/sai-super-pack-2866391/' target='_blank' rel="noreferrer" style={{fontSize : '1.4rem'}}>Member of Tradeindia.com </a></button>
            <button className='MemberBTT2'><a className='atag' href='https://www.indiamart.com/saisuperpack/#home' target='_blank' rel="noreferrer" style={{fontSize : '1.4rem'}}>Member of Indiamart </a></button>
            </div>
            <p13>We Cater to Specific Requests/Bulk Orders too!</p13>
            <div className="ClickBT">
            <button className='MemberBTT3'><a className='atag' href='mailto:saisuperpack@email.com?subject=Drop%20In%20Your%20requestsSubject&body=' target='_blank' rel="noreferrer" style={{fontSize : '1.4rem'}}>Click Here!</a></button>
            </div>
           </div>
    </div>
    </section>
    
    </>
  )
}

export default CompanyProfile
