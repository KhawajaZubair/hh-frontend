import React from "react";
import NavBar from "../components/navbar";
import Blogs from "../components/blogcard";
import Footer from "../components/footer";
import "../Style/medicinepage.css";
import { Container, Row, Col, NavDropdown } from "react-bootstrap";
import MedCard from "./medicinecard";
import med1 from "../Assets/img/med1.png";
import med2 from "../Assets/img/med2.png";
import med3 from "../Assets/img/med3.png";
import med5 from "../Assets/img/med5.png";
import med6 from "../Assets/img/med6.png";
import med7 from "../Assets/img/med7.png";
import med8 from "../Assets/img/med8.png";
import Carousel from "react-bootstrap/Carousel";

const MedicinePage = () => {
  const products = [
    {
      title: "Panadol (500mg)",
      description: "Manufacturer: GlaxoSmithKline Generic Name: Paracetamol",
      img: med5,
    },
    {
      title: "Imodium® (2mg)",
      description: "Manufacturer: Johnson & Johnson Generic Name: Loperamide",
      img: med2,
    },
    {
      title: "Novidat® (500mg)",
      description:
        "Manufacturer: SAMI Pharmaceuticals (Prvte.) Lmtd. Generic Name: Ciprofloxacin",
      img: med6,
    },
    {
      title: "Risek® (20mg)",
      description: "Manufacturer:  AstraZeneca - Generic Name: Omeprazole",
      img: med3,
    },
    {
      title: "Rigix (10mg)",
      description: "Manufacturer: AGP Limited - Generic Name: Cetirizine",
      img: med7,
    },
    {
      title: "Nims® (100mg) ",
      description: "Generic Name: Nimesulide",
      img: med8,
    },
    // Add more products as needed
  ];

  return (
    <div>
      <NavBar />

      <Container>
        <Carousel controls={false} className="sliderimg">
          <Carousel.Item>
            <img src={med2} alt="med-1" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={med1} alt="med-2" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={med3} alt="med-3" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={med5} alt="med-5" />
          </Carousel.Item>
        </Carousel>
        <NavDropdown.Divider />
        <h3 className="mt-4 mb-4 text-center">Medicines</h3>
        <Row>
          {products.map((product, index) => (
            <Col key={index} sm={12} md={6} lg={4} className="mb-5">
              <MedCard {...product} />
            </Col>
          ))}
        </Row>
      <NavDropdown.Divider />
      </Container>
      <Blogs />
      <Footer />
    </div>
  );
};

export default MedicinePage;
