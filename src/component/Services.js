import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import axios from "axios";

const Services = () => {
  const [offers, setOffers] = useState([]);

  const baseUrl = 'https://isibisi-0c069f8.payloadcms.app';
  useEffect(() => {
    // Fetch data from the API
    axios.get(`${baseUrl}/api/websiteoffer?locale=undefined&draft=false&depth=2`)
      .then((response) => {
        setOffers(response.data.docs);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <React.Fragment>
      <section className="section bg-services" id="services">
        <Container>
          {offers && offers.map((offer) => (
            <div key={offer.id} >
              <Row>
                <Col lg="12">
                  <div className="title-box text-center">
                    <h3 className="title-heading mt-4">{offer.Heading}</h3>
                    <p className="text-muted f-17 mt-3">{offer.Description}</p>
                  </div>
                </Col>
              </Row>
              <Row >
                {offer.websiteOfferCard && offer.websiteOfferCard.map((card) => (
                  <Col lg={4} key={card.id} style={{display:"flex",flexWrap:"wrap"}}>
                    <div className="services-box p-4 mt-4" style={{ minHeight: "20px",}}>
                      <div className="services-icon bg-soft-primary">
                        <img src={card.Icon && card.Icon.url} alt={card.AlternativeTextOfIcon} style={{ width: "100%", height: "100%",objectFit:"contain",padding:"10px" }} />
                      </div>
                      <h5 className="mt-4">{card.Heading}</h5>
                      <p className="text-muted mt-3">{card.Description}</p>
                      {/* <div className="mt-3">
                        <a href="#" className="text-primary f-16">Learn More <i className="mdi mdi-arrow-right ml-1"></i></a>
                      </div> */}
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          ))}
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Services;
