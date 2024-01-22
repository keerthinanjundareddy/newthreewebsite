import React from 'react'
import './Readmore.css'
import imageone from '../assets/images/users/img-1.jpg'
import logo from '../assets/Userimages/imagetwo.png'
import Footer from './Footer/Footer'
import isibisilogo from '../assets/Userimages/isibisi-removebg-preview.png'
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import leftArrow from '../assets/Userimages/leftarow.png'
import shopifyimaaage from '../assets/Userimages/Is-it-worth-it-to-hire-a-Shopify-expert.jpg'


function Readmore() {
    const accordionData = [
        { title: "Accordion Demo 1", content: "Greetings of the day 1" },
        { title: "Accordion Demo 2", content: "Greetings of the day 2" },
         { title: "Accordion Demo 2", content: "Greetings of the day 2" },
        // Add more objects as needed
      ];
      const dataArray = [
        {
          heading: "Text heading 1",
          text: "Meet Alex Mitchell 1.. Alex Mitchell 1. Alex Mitchell 1. Alex Mitchell 1. Alex Mitchell 1. Alex Mitchell 1. Alex Mitchell 1. Alex Mitchell 1 Alex Mitchell 1. Alex Mitchell 1. Alex Mitchell 1. Alex Mitchell 1. Alex Mitchell 1. Alex Mitchell 1. Alex Mitchell 1. Alex Mitchell 1. Alex Mitchell 1. Alex Mitchell 1. Alex Mitchell 1. Alex Mitchell 1. Alex Mitchell 1. Alex Mitchell 1...",
          image: imageone,
        },
        {
          heading: "Text heading 2",
          text: "Meet Alex Mitchell 2...Meet Alex Mitchell 2.Meet Alex Mitchell 2.Meet AlexMeet AlexMeet Alex Meet Alex Mitchell 2..Meet Alex Meet Alex Mitchell 2..Mitchell 2..Mitchell 2..Mitchell 2.. Mitchell 2....",
          image: imageone,
        //   image: imagetwo,
        },
        // Add more objects as needed
      ];
      
    
  return (
    <>
   <div className='header-section'>
    <div style={{width:"100px",height:"40px"}}><img src={isibisilogo} style={{width:"100%",height:"100%",objectFit:"contain"}} /></div>
    <div className='back-btn'><span><img src={leftArrow} style={{width:"20px",height:"20px",objectFit:"contain",paddingRight:"4px"}} /></span>Home</div>
   </div>
    <div className='read-more-section'>


        <div className='main-div'>
            <div className='heading-container'>
                <div style={{width:"100%",height:"400px"}}>
                    <img src={logo} alt="img" style={{width:"100%",height:"100%",objectFit:"fill"}}/>
                    </div>
            {/* <div style={{textAlign:"center"}}>Digital Marketings</div> */}
            </div>
            <div className='description-container'>
            <div className='image-flexboxcontainter'>
  {dataArray.map((item, index) => (
    <div key={index} className='content-container' style={{ marginBottom: '20px' }}>
      {index % 2 === 0 ? (
        <>
        <div className='image-flexboxcontaintertwo'>
          <div className='text-container' style={{ marginRight: '20px' }}>
            <div className="content-heading" style={{ textAlign: "left" }}>{item.heading}</div>
            <div className='content-text' style={{ textAlign: "left" }}>{item.text}</div>
          </div>
          <div className='image-container'>
            <div style={{ width: "100%", height: "500px" }}>
              <img src={item.image} alt={`img-${index}`} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </div>
          </div>
          </div>
        </>
      ) : (
        <>
         <div className='image-flexboxcontaintertwo'>
          <div className='image-container'>
            <div style={{ width: "100%", height: "500px" }}>
              <img src={item.image} alt={`img-${index}`} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </div>
          </div>
          <div className='text-container' style={{ marginLeft: '20px' }}>
            <div className="content-heading" style={{ textAlign: "left" }}>{item.heading}</div>
            <div className='content-text' style={{ textAlign: "left" }}>{item.text}</div>
          </div>
          </div>
        </>
      )}
    </div>
  ))}
</div>
</div>


        </div>
        <div>

        </div>


        <div className='shopify-image-section'>
          <div className='Shopify-heading'>

          <div>shopify</div>
          <div>Is it worth to hire a </div>
          <div>shopify Expert</div>

          </div>
          <div className='shopify-image-container'>
  <div className='shopify-image-section' style={{border: "", borderTopRightRadius: "50%", borderBottomRightRadius: "50%"}}>
    <div className='shopify-image' style={{width:"100%",height:"100%",borderTopRightRadius: "50%", borderBottomRightRadius: "50%" }}>
      <img src={shopifyimaaage} alt="shopify-image" style={{ width: "100%", height: "100%", objectFit: "contain", borderTopRightRadius: "50%", borderBottomRightRadius: "50%", boxShadow: "2px 4px 8px 3px grey" }} />
    </div>
  </div>
  <div className='shopify-content-section'>

  </div>
</div>



        </div>
      
        <div className='faq-top-section'>
      <h4 style={{textAlign:"left"}}>FAQ</h4>
      <div style={{marginTop:"10px"}}>
        {accordionData.map((item, index) => (
          <Accordion key={index} style={{ width: "100%" ,marginTop:"25px",outline:"none" ,boxShadow:"none",borderRadius:"0px"}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon  style={{color:"black"}} />}
              aria-controls={`panel${index + 1}-content`}
              style={{ backgroundColor: "#FFFFFF",outline:"none",boxShadow:"none" }}
            >
              <Typography  style={{
      fontWeight: 10,
      color: "black",
      fontFamily: "'Poppins', sans-serif",
    }}>{item.title}</Typography>
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: "#FFFFFF",border:"none",outline:"none",boxShadow:"none" }}>
              <Typography style={{ fontWeight: 10,color:"black",  fontFamily: "'Poppins', sans-serif", }}>{item.content}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
      
    </div>
    <div className='footer-top-section'>
    <Footer style={{paddingTop:"0px"}}  />
    </div>
    
    </>
  )
}

export default Readmore
