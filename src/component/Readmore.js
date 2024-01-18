import React from 'react'
import './Readmore.css'
import imageone from '../assets/images/users/img-1.jpg'
import logo from '../assets/Userimages/shopifyimage.png'
import Footer from './Footer/Footer'
import isibisilogo from '../assets/Userimages/isibisi-removebg-preview.png'
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import leftArrow from '../assets/Userimages/leftarow.png'


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
          text: "Meet Alex Mitchell 2...",
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
      
        <div className='faq-top-section'>
      <h4 style={{textAlign:"center"}}>FAQ</h4>
      <div style={{marginTop:"10px"}}>
        {accordionData.map((item, index) => (
          <Accordion key={index} style={{ width: "100%" ,marginTop:"10px",outline:"none" ,boxShadow:"none",borderRadius:"0px",}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index + 1}-content`}
              style={{ backgroundColor: "#F2F3FA",border:"none",outline:"none",boxShadow:"none" }}
            >
              <Typography  style={{
      fontWeight: 10,
      color: "black",
      fontFamily: "'Poppins', sans-serif",
    }}>{item.title}</Typography>
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: "#F2F3FA",border:"none",outline:"none",boxShadow:"none" }}>
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
