import React,{useState,useEffect} from 'react'
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
import shopifyimage from '../assets/Userimages/Mask group.png'
import shopifylogo from '../assets/Userimages/Shopify-Emblem.png'

import Navbar from "../../src/component/Navbar/NavBar";


// import imageonee from '../../src/assets/Userdummyimages/Useo-search-engine-optimization-2023-05-08-23-44-00-utc.jpg'
import imagetwo from '../../src/assets/Userdummyimages/social-media-2022-11-14-07-05-26-utc.jpg'
import imagethree from '../../src/assets/Userdummyimages/image-of-two-friendly-business-partner-working-on-2023-04-18-02-34-32-utc.JPG'
import imagefour from '../../src/assets/Userdummyimages/social-media-2022-11-14-07-05-26-utc.jpg'
import imagefive from '../../src/assets/Userdummyimages/assessment-analysis-bar-graph-presentation-2022-12-16-00-26-45-utc - Copy.jpg'
import imagesix from '../../src/assets/Userdummyimages/image-of-start-up-business-people-discussing-over-2023-01-31-03-28-56-utc.JPG'
import imageseven from '../../src/assets/Userdummyimages/a-man-chats-with-an-artificial-intelligence-chat-b-2023-08-29-05-17-51-utc.jpg'
// import { Navbar } from 'reactstrap'
import NavbarPage from './Navbar/NavBar'



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

      const dummyData = [
        { title: imageone, heading: 'SEARCH ENGINE OPTIMIZATION (SEO)', contenttwo: "SEO, or Search Engine Optimization, is all about keywords, enhancing online presence, and on-page optimization to boost brand awareness and organic traffic. Continuous monitoring is vital for optimizing results." },
        { title: imagetwo, heading: 'PAY-PER-CLICK ADVERTISING (PPC)', contenttwo: "PPC Advertising, commonly associated with Google AdWords, is an online marketing campaign that directs clicks to a specific landing page. It aims to create impressions, generate clicks, and maximize Return on Investment (ROI)." },
        { title: imagethree, heading: 'SOCIAL MEDIA MARKETING (SMM)', content: 'Louis Phillippe', contenttwo: "SMM, or Social Media Marketing, involves building brand loyalty through strategic content creation, community management, and a strong social media presence. It often leverages influencer partnerships and engaging campaigns to connect with the target audience. enhance branding and engage the audience effectively" },
        { title: imagefour, heading: 'CONTENT MARKETING', contenttwo: "Content marketing is a strategy that focuses on creating and distributing valuable content such as blog posts, articles, and infographics. It involves optimization and tracking metrics to enhance branding and engage the audience effectively." },
        { title: imagefive, heading: 'CONVERSION RATE OPTIMIZATION (CRO)', content: 'Coco-Cola', contenttwo: "Conversion Rate Optimization (CRO) is all about optimizing websites for higher engagement and conversions. It involves techniques like A/B testing, improving user experience, and enhancing the conversion funnel, often through effective call-to-action strategies." },
        { title: imagesix, heading: 'REMARKETING AND RETARGETING', content: 'Amway', contenttwo: "Remarking and retargeting in online advertising involve personalized ads and tracking to optimize conversations and encourage conversions. It's a strategic approach within online advertising to re-engage potential customers who have shown previous interest." },
        { title: imageseven, heading: 'EMERGING TRENDS AND TECHNOLOGIES', content: 'Ummeed Finance', contenttwo: "Emerging trends and technologies encompass Artificial Intelligence, chatbots, voice search, and automation. These innovations are reshaping the digital landscape, influencing user experiences, and driving the evolution of various industries." },
      ];
      
      const [hoveredCard, setHoveredCard] = useState(null);
      
      const [scrolled, setScrolled] = useState(false);

      useEffect(() => {
          const handleScroll = () => {
              const scrollY = window.scrollY;
              // Set a threshold value based on your design
              const threshold = 50;
  
              // Update the state based on scroll position
              setScrolled(scrollY > threshold);
          };
  
          // Attach the event listener
          window.addEventListener('scroll', handleScroll);
  
          // Clean up the event listener when the component is unmounted
          return () => {
              window.removeEventListener('scroll', handleScroll);
          };
      }, []);
    
  return (
    <>
    <div className={`header-section ${scrolled ? 'scrolled' : ''}`} style={{ zIndex: '100' }}>
            <div style={{ width: '100px', height: '40px' }}>
                <img src={isibisilogo} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <div className='back-btn'>
                <span>
                    <img src={leftArrow} style={{ width: '20px', height: '20px', objectFit: 'contain', paddingRight: '4px' }} />
                </span>
                Home
            </div>
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
    <div key={index} className='content-container' style={{ marginBottom: "20px" }}>
      {index % 2 === 0 ? (
        <>
        <div className='image-flexboxcontaintertwo'>
          <div className='text-container' style={{ marginRight: "20px" }}>
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


      <div className='shopify-features-section'>
      <div style={{textAlign:"center",color:"green",marginTop:"20px",fontSize:"20px"}}><b>OUR-OFFERS(DIGITAL AND PERFORMANCE MARKETING)</b></div>
    <div className="card-container">
       {dummyData.map((data, index) => (
       <div
       key={index}
       className="card"
   
       onMouseEnter={() => setHoveredCard(index)}
       onMouseLeave={() => setHoveredCard(null)}
     >
          <div  className='imge-sections'>
             <img src={data.title}  alt="imgone" className='imge-section-two' />
            </div>
       <div className='heading-sections'style={{textTransform:"uppercase",marginTop:"40px",textAlign:"center",}}>{data.heading}</div>
          <div className='title-sections'  style={{ opacity: hoveredCard === index ? 1: 1}}>{data.contenttwo}</div>

 
          
  </div>
      ))}
    
   
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
