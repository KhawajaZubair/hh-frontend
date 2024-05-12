import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import homeimg from "../Assets/img/home-img.png";
import "../Style/home.css";

function Home() {
  return (
    <div className="home">
      <Container>
        <Row>
          <Col lg={5}>
            <div className="p-5">
              <h1 className="display-6 mt-5 title">Welcome To</h1>
              <span>
                <h1 className="display-2 fw-bolder">Holistic Health</h1>
              </span>
              <p className="lead fw-normal lh-base">
                An approach to wellness that simultaneously addresses the
                physical, mental, emotional, social, and spiritual components of
                health. Join us on a journey to better health and a happier
                life.
              </p>
              <Link to="/login">
                <Button className="homebtn">Join Now</Button>
              </Link>
            </div>
          </Col>
          <Col lg={7}>
            <Image className="homeimage" src={homeimg} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
