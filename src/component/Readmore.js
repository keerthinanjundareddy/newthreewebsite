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


function Readmore() {
    const accordionData = [
        { title: "Accordion Demo 1", content: "Greetings of the day 1" },
        { title: "Accordion Demo 2", content: "Greetings of the day 2" },
        // Add more objects as needed
      ];
    
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
      
        <div style={{marginTop:"20px"}}>
      <h4 style={{textAlign:"center"}}>FAQ</h4>
      <div style={{marginTop:"10px"}}>
        {accordionData.map((item, index) => (
          <Accordion key={index} style={{ width: "100%" ,marginTop:"10px",border:"none",outline:"none"}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index + 1}-content`}
              style={{ backgroundColor: "#D3D3D3",border:"1px solid #D3D3D3" }}
            >
              <Typography style={{ fontWeight: 10 }}>{item.title}</Typography>
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: "#D3D3D3",border:"1px solid #D3D3D3" }}>
              <Typography>{item.content}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
      
    </div>
    <div style={{padding:"0px"}}>
    <Footer style={{padding:"0px"}}  />
    </div>
    
    </>
  )
}

export default Readmore
