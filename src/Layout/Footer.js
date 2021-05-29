import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FooterImage from "../assets/images/footer-image.png";

const support = [
  {
    tag: "Email Us",
    data: "support@lenskart.com",
    svg: require("../assets/icons/envelope.svg"),
  },
  {
    tag: "Call Us",
    data: "99998 99998",
    svg: require("../assets/icons/phone-call.svg"),
  },
];

const Footer = () => {
  return (
    <Container fluid className="Footer">
      <Row>
        <Col md={6} sm={12}>
          <h1>Looking for help?</h1>
          <hr />
          <div className="footer-text">
            We are available by phone Monday to Sunday from 9 AM to 8 PM.
            <br /> Please feel free to call us if you have any queries.
          </div>
        </Col>
        <Col md={6} sm={12}>
          <Row>
            {support.map((arr,index) => (
              <Col md={6} sm={6} key={index}>
                <div className="footer-tag">
                  <Row>
                    <Col lg={3} md={12} xs={4}>
                      <img
                        src={arr.svg.default}
                        alt={arr.tag}
                        className="tag-img"
                      />
                    </Col>
                    <Col lg={9} md={12} xs={8}>
                      <h3><b>{arr.tag}</b></h3>
                      <b>{arr.data}</b>
                    </Col>
                  </Row>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      <img src={FooterImage} alt="footer-img" className="footer-image" />
      <div className='Footer-Note'>© Made by Baldeep Singh, 2021</div>
    </Container>
  );
};

export default Footer;
