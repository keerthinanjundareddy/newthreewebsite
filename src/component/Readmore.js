import React, { useState, useEffect } from 'react'
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
import home from '../assets/Userimages/home.png'
import shopifyimaaage from '../assets/Userimages/Is-it-worth-it-to-hire-a-Shopify-expert.jpg'
import shopifyimage from '../assets/Userimages/Mask group.png'
import shopifylogo from '../assets/Userimages/Shopify-Emblem.png'

import Navbar from "../../src/component/Navbar/NavBar";
import arrow from '../../src/assets/Userimages/leftarow.png'
import { useNavigate } from 'react-router-dom';
import shopify_logo from '../assets/images/Group.png'

// import imageonee from '../../src/assets/Userdummyimages/Useo-search-engine-optimization-2023-05-08-23-44-00-utc.jpg'
import imagetwo from '../../src/assets/Userdummyimages/social-media-2022-11-14-07-05-26-utc.jpg'
import imagethree from '../../src/assets/Userdummyimages/image-of-two-friendly-business-partner-working-on-2023-04-18-02-34-32-utc.JPG'
import imagefour from '../../src/assets/Userdummyimages/social-media-2022-11-14-07-05-26-utc.jpg'
import imagefive from '../../src/assets/Userdummyimages/assessment-analysis-bar-graph-presentation-2022-12-16-00-26-45-utc - Copy.jpg'
import imagesix from '../../src/assets/Userdummyimages/image-of-start-up-business-people-discussing-over-2023-01-31-03-28-56-utc.JPG'
import imageseven from '../../src/assets/Userdummyimages/a-man-chats-with-an-artificial-intelligence-chat-b-2023-08-29-05-17-51-utc.jpg'
// import { Navbar } from 'reactstrap'
import NavbarPage from './Navbar/NavBar'
import feedback from '../../src/assets/Userimages/Group (14).png'
import videoicon from '../../src/assets/Userimages/videocam 2.png'
import linkedinicon from '../../src/assets/Userimages/linkedin-square-icon (1).png'

import datamigration from '../../src/assets/Userimages/Icon_architecture,-structure,-database,-database-structure,-database-architecture.png'
import uiux from '../../src/assets/Userimages/9860 - Photo-App.png'
import socialmedia from  '../../src/assets/Userimages/CHAT.png'
import shopifyapps from  '../../src/assets/Userimages/DATING APPS.png'
import seo from  '../../src/assets/Userimages/Icon_search-analysis-seo.png'
import additionalofferings from '../../src/assets/Userimages/Immersive Product experience.png'
import support from '../../src/assets/Userimages/icon_chatbot,-chat-bot,-assistant,-chat,-laptop-07.png'


function Readmore() {
  const accordionData = [
    { title: "Accordion Demo 1", content: "Greetings of the day 1" },
    { title: "Accordion Demo 2", content: "Greetings of the day 2" },
    { title: "Accordion Demo 2", content: "Greetings of the day 2" },
    // Add more objects as needed
  ];
  const dataArray = [
    {
      heading: "TEAM MEMBER NAME",
      text: "Designation ",
      experience:"2yrs",
      image: imageone,
    },
    {
      heading: "TEAM MEMBER NAME",
      text: "Designation",
      experience:"2yrs",
      image: imageone,
      //   image: imagetwo,
    },
    {
      heading: "TEAM MEMBER NAME",
      text: "Designation",
      experience:"2yrs",
      image: imageone,
      //   image: imagetwo,
    },
    {
      heading: "TEAM MEMBER NAME",
      text: "Designation",
      experience:"2yrs",
      image: imageone,
      //   image: imagetwo,
    },
    // Add more objects as needed
  ];

  // const dummyData = [
  //   { title: arrow, heading: 'Seo', contenttwo: "SEO, or Search Engine Optimization, is all about keywords, enhancing online presence, and on-page optimization to boost brand awareness and organic traffic. Continuous monitoring is vital for optimizing results." },
  //   { title: "", heading: 'Pay', contenttwo: "PPC Advertising, commonly associated with Google AdWords, is an online marketing campaign that directs clicks to a specific landing page. It aims to create impressions, generate clicks, and maximize Return on Investment (ROI)." },
  //   { title: "", heading: 'Social', content: 'Louis Phillippe', contenttwo: "SMM, or Social Media Marketing, involves building brand loyalty through strategic content creation, community management, and a strong social media presence. It often leverages influencer partnerships and engaging campaigns to connect with the target audience. enhance branding and engage the audience effectively" },
  //   { title: "", heading: 'Content', contenttwo: "Content marketing is a strategy that focuses on creating and distributing valuable content such as blog posts, articles, and infographics. It involves optimization and tracking metrics to enhance branding and engage the audience effectively." },
  //   { title: "", heading: 'Conversation', content: 'Coco-Cola', contenttwo: "Conversion Rate Optimization (CRO) is all about optimizing websites for higher engagement and conversions. It involves techniques like A/B testing, improving user experience, and enhancing the conversion funnel, often through effective call-to-action strategies." },
  //   { title: "", heading: 'Remarketing', content: 'Amway', contenttwo: "Remarking and retargeting in online advertising involve personalized ads and tracking to optimize conversations and encourage conversions. It's a strategic approach within online advertising to re-engage potential customers who have shown previous interest." },
  //   { title: "", heading: 'Emerging', content: 'Ummeed Finance', contenttwo: "Emerging trends and technologies encompass Artificial Intelligence, chatbots, voice search, and automation. These innovations are reshaping the digital landscape, influencing user experiences, and driving the evolution of various industries." },
  // ];
  // const dummyData = [
  //   {
  //     title: arrow, heading: 'Data Migration', contenttwo: `Migrating data on Shopify can be challenging due to the limitations of the Product template, which is constrained in terms of properties.
  //        While Shopify provides metafields as a solution, they may not be sufficient for migrating older data structures.`, bullets: { one: 'Product and inventory data', two: 'Complete Customer data', three: 'Data verification', four: 'Inventory push on weekly basis' }
  //   },

  //   {
  //     title: "", heading: 'Customized UI/UX', contenttwo: `User experience design can be challenging with Shopify's
  //       liquid-based theme templates due to their limited
  //       customization options. Striking the right balance between
  //       enhancing user experience and template constraints requires
  //       creative solutions and a deep understanding of Shopify's
  //       framework. It's about making the difficult appear
  //       effortless, resulting in an exceptional user journey.`, bullets: [{ one: 'Custom user login experience', two: 'Customized Product page and listings', three: 'Revamped checkout page', four: 'Localization' }]
  //   },

  //   { title: "", heading: 'Social media & market places', contenttwo: `We help you reach more audience and potential customers via social media. We have a team of experts who predominantly work on soical media stragies including market place integrations. Whether you have social media accounts or need a new ones, we handle them all.`, bullets: [{ one: 'TikTok shop', two: 'Instagram shop', three: 'Facebook', four: 'Zalora' }] },

  //   { title: "", heading: 'Featureful Shopify Apps', contenttwo:`We have developed numerous apps to help you manage and style your shopify webstore. Most of our shopify apps are available with an affordable price. Do check them out in the ` + <a href='https://apps.shopify.com/'>shopify app store</a> + ` Here are some of our awesome apps:` ,bullets: [{ one: 'Notify', two: 'MobyApp Mobile App Builder', three: 'Form Builder', four: 'RateMe Product review App' }] },

  //   {
  //     title: "", heading: 'Seo & Tracking', contenttwo: `Our in-house experts can fastrack your webstore performance and fine-tune uisng the best strategy. We would otherwise help you integrate your available pixels on the shopify webstore for event tracking. 
  //       Shopify provides it's own analytical dashboard to visualize trends. SEO is another essential part of webstore performance. Shopify has a minimalistic stragey in-place for seo but we at RENRGII go beyond shopify and make your webstore more visibile to your customers.`, bullets: [{ one: 'Pixel tracking', two: 'Analytics', three: 'Seo', four: '' }]
  //   },
  //   { title: "", heading: 'Additional Offerings', contenttwo:` When you partner with us, why settle for less. Shopify's default notification templates may not be suitable for you and therefore we help design the email notification templates which are modern and aligned with your brand. Below are the additional offerings you can enjoy while we are at your service.`,bullets: [{ one: 'Server management', two: 'Third party apps installation', three: 'Weekly content import support', four: 'Notification template customizations' }] },

  //   { title: "", heading: '24/5 priority support', contenttwo: `RENERGII is committed to providing full support anytime you require us to step in. We are happy to see you grow and we are here to help you out for every tiny issue you may have on Shopify. You can get in touch with us via the following channels:"`, bullets: [{ one: 'Email', two: 'Call', three: 'Whatsapp', four: 'Video meetings' }] },
  // ];
  const dummyData = [
    {
      title: datamigration, heading: 'Data Migration', contenttwo: `Migrating data on Shopify can be challenging due to the limitations of the Product template, which is constrained in terms of properties.
         While Shopify provides metafields as a solution, they may not be sufficient for migrating older data structures.`, bullets: { one: 'Product and inventory data', two: 'Complete Customer data', three: 'Data verification', four: 'Inventory push on weekly basis' }
    },

    {
      title: uiux, heading: 'Customized UI/UX', contenttwo: `User experience design can be challenging with Shopify's
        liquid-based theme templates due to their limited
        customization options. Striking the right balance between
        enhancing user experience and template constraints requires
        creative solutions and a deep understanding of Shopify's
        framework. It's about making the difficult appear
        effortless, resulting in an exceptional user journey.`, bullets: { one: 'Custom user login experience', two: 'Customized Product page and listings', three: 'Revamped checkout page', four: 'Localization' }
    },

    { title: socialmedia, heading: 'Social media & market places', contenttwo: `We help you reach more audience and potential customers via social media. We have a team of experts who predominantly work on soical media stragies including market place integrations. Whether you have social media accounts or need a new ones, we handle them all.`, bullets: { one: 'TikTok shop', two: 'Instagram shop', three: 'Facebook', four: 'Zalora' } },

    { title: shopifyapps, heading: 'Featureful Shopify Apps', contenttwo: `We have developed numerous apps to help you manage and style your shopify webstore. Most of our shopify apps are available with an affordable price. Do check them out in the ` + <a href='https://apps.shopify.com/'>shopify app store</a> + ` Here are some of our awesome apps:`, bullets: { one: 'Notify', two: 'MobyApp Mobile App Builder', three: 'Form Builder', four: 'RateMe Product review App' } },

    {
      title: seo, heading: 'Seo & Tracking', contenttwo: `Our in-house experts can fastrack your webstore performance and fine-tune uisng the best strategy. We would otherwise help you integrate your available pixels on the shopify webstore for event tracking. 
        Shopify provides it's own analytical dashboard to visualize trends. SEO is another essential part of webstore performance. Shopify has a minimalistic stragey in-place for seo but we at RENRGII go beyond shopify and make your webstore more visibile to your customers.`, bullets: { one: 'Pixel tracking', two: 'Analytics', three: 'Seo' }
    },
    { title: additionalofferings, heading: 'Additional Offerings', contenttwo: `When you partner with us, why settle for less. Shopify's default notification templates may not be suitable for you and therefore we help design the email notification templates which are modern and aligned with your brand. Below are the additional offerings you can enjoy while we are at your service.`, bullets: { one: 'Server management', two: 'Third party apps installation', three: 'Weekly content import support', four: 'Notification template customizations' } },

    { title: support, heading: '24/5 priority support', contenttwo: "RENERGII is committed to providing full support anytime you require us to step in. We are happy to see you grow and we are here to help you out for every tiny issue you may have on Shopify. You can get in touch with us via the following channels:", bullets: { one: 'Email', two: 'Call', three: 'Whatsapp', four: 'Video meetings' } },
  ];
  const [hoveredCard, setHoveredCard] = useState(null);

  const [scrolled, setScrolled] = useState(false);

  const [openIndex, setOpenIndex] = useState(null);

  const data = [
    {
      question: 'What is React?',
      answer: 'React is a JavaScript library for building user interfaces.',
    },
    {
      question: 'How does React handle state?',
      answer: 'React uses a virtual DOM and a process called "reconciliation" to efficiently update the UI based on changes in state.',
    },
    {
      question: 'What are React hooks?',
      answer: 'React hooks are functions that let you use state and other React features in functional components.',
    },
    // Add more questions and answers as needed
  ];


  const steps = [
    {
      label: 'Website Consultation',
      description: `We will discuss the details of the selected niche, products & brand ideas. After niche discussion, we will find a suitable and creative store name/domain.`,
      howitworks: `This steps includes`,
      iconone: videoicon,
      textone: `video`,
      icontwo: feedback,
      textwo: `feedback`
    },
    {
      label: 'Brand Design',
      description:
        `We deeply research all the winners in your selected niche- import & ensure they're edited properly - SEO organized titles, powerful descriptions, edited images, prices, variants, etc..!`,
    },
    {
      label: 'Final Design',
      description: `After the store is set up, we carefully review & deliver it for your final feedbacks & approval. Any doable revisions required, we will be happy to help and fix them!`,
      howitworks: `This steps includes`,
      icontwo: feedback,
      textwo: `feedback`
    },
    {
      label: 'Final Review',
      description: `When all the changes (if there are any required) are revised, we will deliver the store for your approval.`,
      howitworks: `This steps includes`,
      icontwo: feedback,
      textwo: `feedback`
    },
    {
      label: 'Store Development',
      description: `When the back-end is finished, we move on to start designing the front-end. We always ensure it's responsive & suits your requirements.`,
    },
    {
      label: 'Content Upload',
      description: `Our team will begin with uploading pages, plugins, images, videos & more..!`,
    },
    {
      label: 'Ownership Transfer',
      description: `At the last stage, we transfer over the ownership to you, from where you can start your e-commerce journey! :)`,
    },
    {
      label: 'Maintanance support',
      description: `At the last stage, we transfer over the ownership to you, from where you can start your e-commerce journey! :)`,
    },
  ];


  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));

    // const elements = document.querySelectorAll('.accordions-questions');
    // elements.forEach((element, i) => {
    //     if (i === index) {
    //         element.classList.toggle('no-border-radius');
    //     } else {
    //         element.classList.remove('no-border-radius');
    //     }
    // });
  };

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


  const navigate = useNavigate();
  const handlebackClick = () => {
    // window.location.href = "/readmore";

    window.alert("clciked")


    // Navigate to the "/readmore" path with additional details based on cardId
    navigate(`/`);

  };

  return (
    <>
      <div className='read-more-section' >
        <div className={`header-section ${scrolled ? 'scrolled' : ''}`} style={{ zIndex: '100' }}>
          <div style={{ width: '100px', height: '40px' }}>
            <img src={isibisilogo} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
          <div className='back-btn' onClick={handlebackClick}>
            <div>
              <img src={home } style={{ width: '40px', height: '25px', objectFit: 'contain',paddingLeft:"5px",paddingBottom:"4px"}} />
            </div>
            <div style={{paddingRight:"20px"}} className='home-heading'>
            Home
            </div>
          </div>
        </div>

        <div className='banner-main-div'>

          <div className='text-card'>
            <div className='Hire-div'>
              Hire
            </div>

            <div className='expert-div'>
              Shopify Experts
            </div>

            <div className='Text-para'>
              Transform your online store with
              our Shopify experts. From setup to optimization, we have got your ecommerce covered.
            </div>
          </div>

          <div>

            <div className='side-image-div'>
              <img src={shopify_logo} alt="img" className='shopify-banner-img' />
            </div>

          </div>

        </div>

        <div>

        </div>


        <div className='shopify-features-section'>
          <div className='shopify-services-heading'><b>OUR SERVICES</b></div>
          <div className="card-container-two">
            {dummyData.map((data, index) => (
              <div
                key={index}
                className="cardstwo"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className='shopifys-image-sections-container'>
                  <img src={data.title} className='imge-sec' alt={data.title} />
                </div>
                <div className='heading-sections-data' style={{ marginTop: "20px", textAlign: "center", fontSize: "20px", color: "#1E3547" }}>
                  {data.heading}
                </div>
                <div className='title-sections-dataa' style={{ opacity: hoveredCard === index ? 1 : 1, marginTop: "30px", textAlign: "left", color: "#828F99", fontSize: "16px" }}>
                  {data.contenttwo}
                </div>
                {/* Check if bullets exist and are an object before rendering */}
                <div >
                  {data.bullets && typeof data.bullets === 'object' && (
                    <ul style={{ marginTop: "20px" }}>
                      {data.bullets.one && <li style={{ color: "#828F99" }}>{data.bullets.one}</li>}
                      {data.bullets.two && <li style={{ color: "#828F99" }}>{data.bullets.two}</li>}
                      {data.bullets.three && <li style={{ color: "#828F99" }}>{data.bullets.three}</li>}
                      {data.bullets.four && <li style={{ color: "#828F99" }}>{data.bullets.four}</li>}
                    </ul>
                  )}
                </div>

              </div>
            ))}


          </div>
        </div>

        {/* stepper section */}
        <div className='shopify-howitworks-section'>
          <div className='howitworks-heading'><b>how it works</b></div>
          <div className="vertical-stepper">

            {steps.map((step, index) => (
              <div key={step.label} className="step">
                <div className="step-number">{index + 1}</div>
                <div className="step-content" style={{ marginLeft: "50px", padding: "20px", marginTop: "0px" }}>
                  <h5>{step.label}</h5>
                  <p>{step.description}</p>
                  <div style={{ color: "black", }}>
                    <b>{step.howitworks}</b>
                    {step.textone && (
                      <div style={{ paddingLeft: "10px" }}>
                        <img
                          src={step.iconone}
                          alt="icon"
                          style={{ width: "15px", height: "15px", objectFit: "contain" }}
                        />
                        <span style={{ paddingLeft: "5px" }}>{step.textone}</span>
                      </div>
                    )}
                    {step.icontwo && (
                      <div style={{ paddingLeft: "10px" }}>
                        <img
                          src={step.icontwo}
                          alt="icon"
                          style={{ width: "15px", height: "15px", objectFit: "contain" }}
                        />
                        <span style={{ paddingLeft: "5px" }}>{step.textwo}</span>
                      </div>
                    )}
                  </div>
                </div>

                {index !== steps.length - 1 && <div className="step-line" />}
              </div>
            ))}
          </div>

        </div>


        {/* end of stepper section */}


      {/* start of team section */}

      <div className='description-container'>
          <div className='theteam-heading'><b>the team</b></div>
          <div className='image-flexboxcontainters' >
            {dataArray.map((item, index) => (
              <div key={index} className='content-container' style={{ marginBottom: "20px" ,}}>
                {index % 2 === 0 ? (
                  <>
                    <div className='image-flexboxcontaintertwo' >
                    <div className='image-container' >
  <div 
    // border: "1px solid yellow",
   className='image-section-cont' style={{flexBasis:"25%"}} // Hide overflow to maintain circle shape
>
    <img
      src={item.image}
      alt={`img-${index}`}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "fill",  // Maintain image aspect ratio and cover the circle
        borderRadius: "50%",  // Apply border-radius to the image for circular shape
      }}
    />
  </div>
  <div style={{marginTop:"0px" ,flexBasis:"100%",textAlign:"left"}}>
  <div className="content-heading">{item.heading}</div>
                        <div className='content-text'>{item.text}</div>
                        <div className='experience-text'>{item.experience}</div>
                        {/* <div style={{width:"20px",height:"20px"}} className='image-text' > */}
                          <div className='linkedintext-img' ><span><img src={linkedinicon} style={{width:"20px",height:"20px"}} /></span></div>
                          {/* <img src={ linkedinicon} style={{width:"100%",height:"100%",objectFit:"contain"}} /> */}
                        {/* </div> */}
                        </div>
</div>

                      <div className='text-container'  >
                        
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className='image-flexboxcontainterthree' >
                      <div className='text-container'   >
                       
                      </div>
                      <div className='image-container'    >
                  
                        <div style={{flexBasis:"100%"}}  >
                        <div className="content-heading-two" >{item.heading}</div>
                        <div className='content-text-two' >{item.text}</div>
                        <div className='experience-text-two'>{item.experience}</div>
                        {/* <div style={{width:"20px",height:"20px"}} className='image-text-two' > */}
                        <div className='linkedintext-img-two' ><span><img src={linkedinicon} style={{width:"20px",height:"20px"}} /></span></div>
                        {/* <img src={ linkedinicon} style={{width:"100%",height:"100%",objectFit:"contain"}} /> */}
                        {/* </div> */}
                        </div>
                        <div 
    // border: "1px solid yellow",
   className='image-section-cont-two' 
   style={{flexBasis:"25%"}} // Hide overflow to maintain circle shape
>
                          <img src={item.image} alt={`img-${index}`}    style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",  // Maintain image aspect ratio and cover the circle
        borderRadius: "50%",  // Apply border-radius to the image for circular shape
      }}/>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* end of teaam section  */}

        <div className='faq-top-section'>
          <div className='faq-heading'><b>Frequently Asked Questions</b></div>
          <div className="accordions" >
            {data.map((item, index) => (
              <div key={index} className={`accordions-items ${index === openIndex ? 'open' : ''}`}>
                <div className="accordions-questions" onClick={() => handleToggle(index)}>
                  <span>{item.question}</span>
                  <span className="arrow">{index === openIndex ? '▲' : '▼'}</span>
                </div>
                {index === openIndex && (
                  <div className="accordions-answers">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
      <div className='footer-top-section'>
        <Footer style={{ paddingTop: "0px" }} />
      </div>

    </>
  )
}

export default Readmore
