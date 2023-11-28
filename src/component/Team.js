import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { Col, Container, Row } from "reactstrap";
import Slider from "react-slick";

import HomeUrl from '../assets/images/home-border.png';

import Img1 from '../assets/images/users/img-1.png';
import Img2 from '../assets/images/users/img-2.png';
import Img3 from '../assets/images/users/img-3.png';
import Img4 from '../assets/images/users/img-4.png';



const Contact = () => {
  const [teamData, setTeamData] = useState([]);

  const baseUrl = 'https://ayathanapayload.payloadcms.app';
  // const baseUrltwo='http://localhost:4000';
  useEffect(() => {
    axios
      .get(`${baseUrl}/api/websiteteam?locale=undefined&draft=false&depth=2`)
      .then((response) => {
        console.log("payclientdata", response);
        console.log("payteamData", response.data);
        console.log("payresponse", response.data.docs);
        console.log("paayheding",response.data.docs[0].Heading)
        console.log("payresponsetwo", response.data.docs.Description);
        setTeamData(response.data.docs);
        console.log("payteamDataa", response.data.docs.websiteTeamCard);
        console.log("headingpay",)
      })
      .catch((error) => {
        console.error("Error fetching API data:", error);
      });
  }, []);

  const temsettings = {
    autoplay: true,
    dots: true,
    speed: 300,
    infinite: false,
    arrows: false,
    slidesToShow: window.innerWidth < 768 ? 1 : 2,
    slidesToScroll: 1,
  };

  const handleCardClick = (url) => {
  
    if (url) {
   
      window.open(url, '_blank');  // Use window.location.href to navigate to the URL
    }
};


// Other code...

// Other code...
const teamSlides = (teamData && teamData[0]?.websiteTeamCard) ? teamData[0].websiteTeamCard.map((team, teamindex) => {
  // const imageUrl = baseUrl + (team.attributes.medialist?.data?.[0]?.attributes?.url || '');
  // const socialMediaIcons = team.attributes.medialistwo?.data;
  // if (!team) {
  //   // Handle the case where 'team' is undefined
  //   return null;
  // }

  return (
    <div className="team-box p-3" key={teamindex}>
      <Row className="align-items-center">
        <Col lg={6}>
          <div className="mt-4">
            <h5 className="mt-2">{team.Heading && team.Heading}</h5>
            <p className="team-badge bg-primary text-white rounded f-14 mt-2">{team.Designation && team.Designation}</p>
            {/* <p className="text-muted mt-3">{team.attributes.description}</p> */}
           

            {team.socilMediaImages && (
                  <div className="team-social mt-4 pt-2">
                    <ul className="list-inline mb-0">
                      { team.socilMediaImages && team.socilMediaImages.map((socialMedia, index) => (
                        <li className="list-inline-item" key={index}>
                          {/* <Link to={socialMedia.socialMediaLink || "#"} className="text-reset"> */}
                          {socialMedia.socialMediaImage && socialMedia.socialMediaImage.url && (
                            <img
                            // src={socialMedia.socialMediaImage.url}
                            // alt=""
                            src={`${baseUrl}${socialMedia.socialMediaImage.url}`}
                              alt={ `${baseUrl}${socialMedia.socialMediaUrl}`}
                              style={{ width: "30px", height: "30px" }}
                              // Assuming you have a function handleCardClick to handle clicks
                              onClick={() => handleCardClick(socialMedia.socialMediaLink)}
                            />
                          )}
                          {/* </Link> */}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </Col>
            <Col lg={6}>
            <div className="mt-4">
            
              <img src={`${baseUrl}${team.teamImage && team.teamImage.url}`}      alt="" className="img-fluid rounded" />
              {/* <img src={team.teamImage && team.teamImage.url} alt="" className="img-fluid rounded" /> */}
            </div>
          </Col>
      </Row>
    </div>
  );
}) : null;

// Other code...


// Other code...


  return (
    <React.Fragment>
      <section className="section pt-0" id="team">
        <Container>
          <Row>
            <Col lg="12">
            {teamData.length > 0 && (
              <div className="title-box text-center">
                <h3 className="title-heading mt-4">{teamData[0].Heading}</h3>
                <p className="text-muted f-17 mt-3">{teamData[0].Description}</p>
                <img src={HomeUrl} height="15" className="mt-3" alt="" />
              </div>
            )}
            </Col>
          </Row>
          <Row className="mt-5 pt-4">
            <Col lg="12">
              <div className="team-carousel">
                <Slider {...temsettings}>{teamSlides}</Slider>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* The rest of your code */}
    </React.Fragment>
  );
};

export default Contact;
