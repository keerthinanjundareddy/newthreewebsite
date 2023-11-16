import React, { useState,useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import Slider from "react-slick";
import axios from "axios";

import Img1 from '../assets/images/testi-img/img-1.png';
import Img2 from '../assets/images/testi-img/img-2.png';
import Img3 from '../assets/images/testi-img/img-3.png';
import Img4 from '../assets/images/testi-img/img-4.png';

import HomeUrl from '../assets/images/home-border.png';

import Client1 from '../assets/images/clients/1.png';
import Client2 from '../assets/images/clients/2.png';
import Client3 from '../assets/images/clients/3.png';
import Client4 from '../assets/images/clients/4.png';

const Clients = () => {
  const[clientData,setClientData]=useState([])
  const baseUrl = 'http://localhost:1337'
useEffect(() => {
  axios.get(`${baseUrl}/api/website-brands?/api/website-brands?populate[medialist][fields]=url&populate[medialist][fields]=alternative_text&populate[website_cards][populate][medialist][fields]=url&populate[website_cards][populate][medialist][fields]=alternativeText`)
    .then((response) => {
      console.log("clientdata",response)
      console.log("clientresponse",response.data.data)
      console.log("response", response.data.data[0]);
      console.log("responsetwo",response.data.data[0].attributes.description_1)
      // console.log("card title",response.data.data.attributes.description_1)
      setClientData(response.data.data);
      console.log("clientDataa",clientData[0]);
      console.log("Medialist data:", response.data.data[0]?.attributes?.medialist?.data[0].attributes.alternativeText);
      // console.log("card title",response.data.data[0].attributes.website_cards.data.attributes.media_list?.data?.[0]?.attributes?.title)
    })
    .catch((error) => {
      console.error("Error fetching API data:", error);
    });
}, []);

  const slidesettings = {
    dots: true,
    speed: 300,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    dotsClass: "slick-dots slick-thumb carousel-indicators",
    customPaging: function (i) {
      return (
        <div>
          <img
            src={`${baseUrl}${clientData[0]?.attributes?.website_cards?.data[i]?.attributes?.medialist?.data?.[0]?.attributes?.url}`}
            alt=""
            className="testi-img img-fluid rounded mx-auto d-block"
          />
        </div>
      );
    },
  };

  const clientslides = clientData[0]?.attributes?.website_cards?.data?.map((team, teamindex) => {
    console.log("Heading:", clientData[0]?.attributes?.heading);

  const imageUrl = baseUrl + (team.attributes.medialist?.data?.[0]?.attributes?.url || '');
  if (!team) {
    // Handle the case where 'team' is undefined
    return null;
  }
    return(
    <div className="carousel-item" key={teamindex}>
      <Row className="align-items-center">
        <Col lg="6">
          <div className="client-box mt-4">
            <h5 className="line-height_1_6">{team.attributes?.heading}</h5>
            <div className="client-icon">
              <i className="mdi mdi-format-quote-close"></i>
            </div>
            <h5 className="f-18">{team.attributes?.sub_heading}</h5>
            <p className="text-primary mb-0">{team.attributes.description} </p>
          </div>
        </Col>
        <Col lg={6}>
          <div className="text-center mt-4">
          <img src={imageUrl} alt="hi" className="img-fluid rounded" />
          </div>
        </Col>
      </Row>
    </div>
    );
    });

  return (
    <React.Fragment>
       <section className="section" id="clients">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="title-box text-center">
                  <h3 className="title-heading mt-4">Clients Loved Products</h3>
                  <p className="text-muted f-17 mt-3">Vivamus ac nulla ultrices laoreet neque mollis mi morbi
                  elementum mauris
                            sit amet arcu <br /> fringilla auctor In eleifend maximus nisi sed vulputate.</p>

                  <img src={HomeUrl} height="15" className="mt-3" alt="" />
                </div>
              </Col>
            </Row>
            <Row className="mt-5 pt-4">
              <Col lg="12">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    <Slider {...slidesettings}>
                      {clientslides}
                    </Slider>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section bg-light bg-clients">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="title-box text-center">
                <h3 className="title-heading mt-4">{clientData[0]?.attributes?.heading}</h3>
                    <p className="text-muted f-17 mt-3">{clientData[0]?.attributes?.description}</p>

                  <img src={HomeUrl} height="15" className="mt-3" alt="" />
                </div>
              </Col>
            </Row>
            <Row className="mt-5 pt-4">
              <Col lg={3}>
                <div className="client-images mt-4">
                  <img src={Client1} alt="logo-img" className="mx-auto img-fluid d-block" />
                </div>
              </Col>
              <Col lg={3}>
                <div className="client-images mt-4">
                  <img src={Client2} alt="logo-img" className="mx-auto img-fluid d-block" />
                </div>
              </Col>
              <Col lg={3}>
                <div className="client-images mt-4">
                  <img src={Client3} alt="logo-img" className="mx-auto img-fluid d-block" />
                </div>
              </Col>
              <Col lg={3}>
                <div className="client-images mt-4">
                  <img src={Client4} alt="logo-img" className="mx-auto img-fluid d-block" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
    </React.Fragment>
  );
};

export default Clients;
