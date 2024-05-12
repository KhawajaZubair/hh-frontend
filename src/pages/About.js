import React from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../Style/aboutpage.css";
import holistic from "../Assets/img/holistic.png";
import wellness from "../Assets/img/wellness.jpg";
import medical from "../Assets/img/medical.jpg";

function About() {
  return (
    <div>
      <NavBar />

      <Container className="mt-5 abouttxt">
        <Row>
          <Col>
            <h2>Welcome to Holistic Health</h2>
            <p>
              Holistic Health is dedicated to providing you with the most recent
              information on wellness practices, innovative medical discoveries,
              and useful guidance so that you are well-informed and prepared to
              make the best decisions for your health.
            </p>
          </Col>
        </Row>

        <Row className="mt-5 abouttxt">
          <Col>
            <Image src={holistic} fluid className="img-fluid-custom" />
            <h3>A Journey Towards Holistic Well-being</h3>
            <p>
              In today's information age, it's challenging to discern what's
              truly beneficial for our health. Holistic Health is committed to
              guiding you on your journey towards holistic well-being with our
              dedicated team of specialists and healthcare professionals.
              Explore a variety of holistic practices and lifestyle choices that
              can contribute to your overall well-being.
            </p>
          </Col>
        </Row>

        <Row className="mt-5 abouttxt">
          <Col>
            <Image src={wellness} fluid className="img-fluid-custom" />
            <h3>Our Commitment to You</h3>
            <p>
              We strive to provide accurate and reliable information on wellness
              techniques and practices that can improve your quality of life.
              Stay informed about the latest medical advancements and explore
              our library of resources designed to empower you in making
              informed decisions about your health.
            </p>
          </Col>
        </Row>

        <Row className="mt-5 abouttxt">
          <Col>
            <Image src={medical} fluid className="img-fluid-custom" />
            <h3>Services Tailored to Your Needs</h3>
            <p>
              Benefit from personalized medical consultations with knowledgeable
              experts who prioritize your well-being. Access our comprehensive
              online resources including articles, videos, and tools covering a
              wide range of health topics to support your health journey.
            </p>
          </Col>
        </Row>

        <Row className="mt-5 abouttxt">
          <Col>
            <h3>Your Well-being Matters</h3>
            <p>
              At Holistic Health, we firmly believe that your well-being
              matters. Join us in the pursuit of better health, informed
              decision-making, and a happier, more fulfilling life.
            </p>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
}

export default About;
