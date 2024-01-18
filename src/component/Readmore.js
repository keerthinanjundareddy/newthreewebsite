import React from 'react'
import './Readmore.css'
import imageone from '../assets/images/users/img-1.jpg'
import logo from '../assets/Userimages/shopifyimage.png'
import Footer from './Footer/Footer'
import isibisilogo from '../assets/Userimages/isibisi-removebg-preview.png'

function Readmore() {
  return (
    <>
   <div className='header-section'>
    <div style={{width:"100px",height:"40px"}}><img src={isibisilogo} style={{width:"100%",height:"100%",objectFit:"contain"}} /></div>
    <button className='back-btn'>back</button>
   </div>
    <div className='read-more-section'>


        <div className='main-div'>
            <div className='heading-container'>
                <div style={{width:"100%",height:"400px"}}>
                    <img src={logo} alt="img" style={{width:"100%",height:"100%",objectFit:"fill"}}/>
                    </div>
            {/* <div style={{textAlign:"center"}}>Digital Marketings</div> */}
            </div>
            <div className='image-flexboxcontainter' >
            <div className='text-container'>
                <div className="content-heading" style={{textAlign:"left"}}>Text heading</div>
                <div className='content-text'  style={{textAlign:"left"}}>Meet Alex Mitchell, a passionate and determined individual with a love for technology and innovation. Born and raised in a small town, Alex's curiosity and drive led them to pursue a career in computer science. With a keen interest in artificial intelligence, Alex has become a respected professional in the field. Outside of work, Alex is known for their adventurous spirit, always seeking new challenges and experiences. Whether it's hiking in the mountains or experimenting with new coding languages, Alex approaches life with a combination of intellect and enthusiasm</div>
            </div>
            <div className='image-container'>
                <div style={{width:"100%",height:"500px"}}>
                <img src={imageone} alt="img" style={{width:"100%",height:"100%",objectFit:"contain"}}/>
                </div>
            </div>
          
            </div>

        </div>
        <div>

        </div>
      

      
    </div>
    <div style={{padding:"0px"}}>
    <Footer style={{padding:"0px"}}  />
    </div>
    
    </>
  )
}

export default Readmore
