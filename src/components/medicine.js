import React from "react";
import "../Style/medicine.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import med1 from "../Assets/img/med1.png";
import med2 from "../Assets/img/med2.png";
import med3 from "../Assets/img/med3.png";
import med4 from "../Assets/img/med5.png";
import Carousel from "react-bootstrap/Carousel";

const Medicine = () => {
  return (
    <section className="medicine-section">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col md={6} sm={12} className="text-center mb-4 ">
            <Carousel
              controls={false}
              indicators={false}
              className="ml-2 sliderimg1"
            >
              <Carousel.Item>
                <img src={med2} alt="mg-1" />
              </Carousel.Item>
              <Carousel.Item>
                <img src={med1} alt="mg-2" />
              </Carousel.Item>
              <Carousel.Item>
                <img src={med3} alt="mg-3" />
              </Carousel.Item>
              <Carousel.Item>
                <img src={med4} alt="mg-4" />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col md={6} sm={12} className="text-center mb-4">
            <h1 className="medicine-heading mb-4">Discover Medicines</h1>
            <p className="medicine-description mb-4">
              Explore a range of high-quality medicines for your health needs.
            </p>
            <Button variant="primary" size="lg">
              View Medicines
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Medicine;
