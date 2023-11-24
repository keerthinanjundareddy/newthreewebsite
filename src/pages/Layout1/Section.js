import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import axios from 'axios';
import '../../assets/css/Own.css'
import HomeUrl from '../../assets/images/home-border.png';

const Section = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [homeData, setHomeData] = useState([]);

  const openVideo = () => {
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
  };

  const baseUrl = 'https://isibisi-0c069f8.payloadcms.app';

  useEffect(() => {
    axios.get(`${baseUrl}/api/websitehome`).then((response) => {
      console.log("homedata",response.data.docs)
      setHomeData(response.data.docs);
    }).catch((error) => {
      console.error("Error fetching API data:", error);
    });
  }, []);

  return (
    <React.Fragment>
    
      <section className="bg-home bg-light" id="home" style={{position:"relative",paddingTop:"100px",paddingBottom:"100px"}} >
        <div className="home-center">
          <div className="home-desc-center">
            <Container>
            {homeData && homeData.map((item) => (
                <Row key={item.id} className="align-items-center">
                  <Col lg={6}>
                    <div className="home-content">
                      <p className="mb-0">{item.heading}</p>
                      <img src={HomeUrl} height="15" alt="" />
                      <h1 className="home-title mt-4">{item.subheadingone}<br />{item.subheadingtwo}</h1>
                      <p className="text-muted mt-4 f-20">{item.description}</p>
                      {item.watchvideotext && (
                        <div className="mt-4 pt-2">
                          <button className="video-play-icon text-dark watch-intro" onClick={openVideo}>
                            <i className="mdi mdi-play-circle-outline text-dark mr-2 " ></i>{item.watchvideotext}
                          </button>
                        </div>
                      )}
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="home-img">
                    {item.imagesection && (
      <img src={item.imagesection && baseUrl + item.imagesection.url} className="img-fluid" alt="" />
    )}
                    </div>
                  </Col>
                </Row>
            ))}
            
            </Container>
          </div>
          {isVideoOpen && (
            <div className="video-modal">
              <div className="video-overlay" onClick={closeVideo}></div>
              <div className="video-content">
              {homeData[0]?.videosection?.url && (
                <div>
                <button className="close-video-btn" onClick={closeVideo}>
                  <i className="mdi mdi-close"></i>
                </button>
               
                <video controls width="100%" height="100%" onClick={closeVideo}>
                  <source src={homeData[0]?.videosection?.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
       
    </React.Fragment>
  );
};

export default Section;
