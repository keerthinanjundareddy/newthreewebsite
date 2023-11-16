import React, { useState ,useEffect} from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

// Modal Video
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

import HomeUrl from '../../assets/images/home-border.png';
import Img from '../../assets/images/features/img-2.png';
import axios from 'axios'

const Section = () => {
  const [homeapiData, sethomeApiData] = useState([])
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }



const baseUrl = 'http://localhost:1337'
useEffect(() => {
  axios.get('http://localhost:1337/api/website-homes?[populate][medialist][fields]=url&&[populate][medialist][fields]=alternativetext')
      .then((response) => {
          console.log("response",response.data.data[0])
          console.log("second responses",response.data.data[0].attributes.title)
          sethomeApiData(response.data.data)
          // setDescription(response.data.data[0].attributes.description)
          console.log("apidata",homeapiData)
          console.log("sbout-section-image",response.data.data[0].attributes.medialist?.data?.[0]?.attributes.url)
          // console.log("description here",description)
          // console.log("image",response.data.data[0].attributes.media_list.data[0].attributes)
      })
}, [])

    // const imageUrl = baseUrl + (item.attributes.media_list?.data?.[0]?.attributes?.url || '');
  return (
    <React.Fragment>

      <section className="bg-home bg-light" id="home">
      {
  homeapiData.length > 0  && homeapiData.map((itemstwo)=>{
    
    const imageUrltwo = baseUrl + (itemstwo.attributes.medialist?.data?.[0]?.attributes.url || '');
    return(
      <div  key={itemstwo.id}>
        <div className="home-center">
          <div className="home-desc-center">
            <Container>
              <Row className="align-items-center">
                <Col lg={6}>
                  <div className="home-content">
                    <p className="mb-0">{itemstwo.attributes.heading}</p>
                    <img src={HomeUrl} height="15" alt="" />
                    <h1 className="home-title mt-4">{itemstwo.attributes.subheadingone} <br />{itemstwo.attributes.subheadingtwo}   </h1>
                    <p className="text-muted mt-4 f-20">
                    {itemstwo.attributes.description}
                    </p>
                    <div className="mt-2 pt-2">
                      <Link to="#" className="btn btn-primary mr-3"> {itemstwo.attributes.contactbutton}</Link>{" "}
                      <Link to="#" className="video-play-icon text-dark" onClick={openModal}>
                        <i className="mdi mdi-play-circle-outline text-dark mr-2"></i>Watch Intro Video
                      </Link>
                    </div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="home-img">
                    <div className="animation-1"></div>
                    <div className ="animation-2"></div>
                    <div className="animation-3"></div>
                    <img src={imageUrltwo}className="img-fluid" alt="" />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <ModalVideo
            channel="vimeo"
            isOpen={isOpen}
            videoId={itemstwo.attributes.videoId}
            onClose={() => setIsOpen(false)}
          />
        </div>
        </div>
          )
    })
    }
      </section>
    </React.Fragment>
  );
}

export default Section;
