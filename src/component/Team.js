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
  // const [teams, setTeams] = useState([
  //   {
  //     id: 1,
  //     img: Img1,
  //     name: 'Calvin Hubbard',
  //     nickname: '#Calvin',
  //     description: 'Anterdum maleada fames Integer molestie ante primis nulla facibus felis ulputate platea elit.'
  //   },
  //   {
  //     id: 2,
  //     img: Img2,
  //     name: 'Jeremiah Eskew',
  //     nickname: '#Jeremiah',
  //     description: 'Anterdum maleada fames Integer molestie ante primis nulla facibus felis ulputate platea elit.'
  //   },
  //   {
  //     id: 3,
  //     img: Img3,
  //     name: 'Zachary Tevis',
  //     nickname: '#Zachary',
  //     description: 'Anterdum maleada fames Integer molestie ante primis nulla facibus felis ulputate platea elit.'
  //   },
  //   {
  //     id: 4,
  //     img: Img4,
  //     name: 'William Alderman',
  //     nickname: '#William',
  //     description: 'Anterdum maleada fames Integer molestie ante primis nulla facibus felis ulputate platea elit.'
  //   },
  // ]);
const[teamData,seteamData]=useState([])

const baseUrl = 'http://localhost:1337'
useEffect(() => {
  axios.get(`${baseUrl}/api/website-teams?populate[website_cards][populate][medialist][fields]=url&populate[website_cards][populate][medialist][fields]=alternativeText`)
    .then((response) => {
      console.log("clientdata",response)
      console.log("clientresponse",response.data.data)
      console.log("response", response.data.data[0]);
      console.log("responsetwo",response.data.data[0].attributes.description_1)
      // console.log("card title",response.data.data.attributes.description_1)
      seteamData(response.data.data);
      console.log("teamDataa",teamData[0])
      // console.log("card title",response.data.data[0].attributes.website_cards.data.attributes.media_list?.data?.[0]?.attributes?.title)
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
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  const teamslides = teamData[0]?.attributes?.website_cards?.data?.map((team, teamindex) => {
    const imageUrl = baseUrl + (team.attributes.medialist?.data?.[0]?.attributes?.url || '');
    if (!team) {
      // Handle the case where 'team' is undefined
      return null;
    }
  
    return (
      <div className="team-box p-3" key={teamindex}>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="mt-4">
              <h5 className="mt-2">{team.attributes.heading}</h5>
              <p className="team-badge bg-primary text-white rounded f-14 mt-2">{team.attributes.sub_heading}</p>
              <p className="text-muted mt-3">{team.attributes.description}</p>
              <div className="team-social mt-4 pt-2">
                <ul className="list-inline mb-0">
                  {team.medialist?.data?.map((socialMedia, socialMediaIndex) => (
                    <li className="list-inline-item" key={socialMediaIndex}>
                      <Link to={socialMedia.attributes.url} className="text-reset">
                        hi
                        {/* <i className={`mdi mdi-${getSocialMediaIcon(socialMedia.attributes.url)}`}></i> */}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={6}>
              <div className="mt-4">
              
                <img src={imageUrl} alt="" className="img-fluid rounded" />
              </div>
            </Col>
        </Row>
      </div>
    );
  });
  
  // Rest of your code...
  
  return (
    <React.Fragment>
      <section className="section pt-0" id="team">
        <Container>
          <Row>
            <Col lg="12">
              <div className="title-box text-center">
                <h3 className="title-heading mt-4">{teamData[0]?.attributes?.heading}</h3>
                <p className="text-muted f-17 mt-3">{teamData[0]?.attributes?.description}</p>
                <img src={HomeUrl} height="15" className="mt-3" alt="" />
              </div>
            </Col>
          </Row>
          <Row className="mt-5 pt-4">
            <Col lg="12">
              <div className="team-carousel">
                <Slider {...temsettings}>
                  {teamslides}
                </Slider>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section bg-light bg-cta">
        <Container>
          <Row className="justify-content-center">
            <Col lg={9}>
              <div className="text-center">
                <h2>Get Started With <span className="text-primary">Thamza</span></h2>
                <p className="text-muted mt-3">Quisque iaculis urna eu magna semper quis ultrices lectus efficitur
                Praesent convallis
                velit urna, vitae tristique tellus feugiat a maecenas diam metus convallis id cursus vel
                          tellus.<br /> Curabitur ullamcorper feugiat convallis.</p>
                <div className="mt-4 pt-2">
                  <Link to="#" className="btn btn-soft-primary btn-round mr-3 btn-rounded">Request a demo</Link>
                  <Link to="#" className="btn btn-primary btn-round btn-rounded">Get Started Now</Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Contact;
