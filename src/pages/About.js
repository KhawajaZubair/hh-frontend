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

      <div className="hero-section">
        <Container>
          <Row>
            <Col>
              <h1 className="hero-title">Welcome to Holistic Health</h1>
              <p className="hero-subtitle">
                Your journey to comprehensive well-being starts here.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="about-content mt-5">
        <Row className="about-section">
          <Col lg={6} className="about-image">
            <Image src={holistic} fluid className="img-fluid-custom" />
          </Col>
          <Col lg={6} className="about-text">
            <h3>A Journey Towards Holistic Well-being</h3>
            <p>
              In today's information age, it's challenging to discern what's
              truly beneficial for our health. Holistic Health is committed to
              guiding you on your journey towards holistic well-being with our
              dedicated team of specialists and healthcare professionals.
              Explore a variety of holistic practices and lifestyle choices that
              can contribute to your overall well-being, including nutrition,
              exercise, mindfulness, and alternative therapies.
            </p>
            <p>
              Our goal is to empower you with knowledge and tools that can help
              you make informed decisions about your health. We provide a wealth
              of resources including articles, videos, and expert advice to
              support your journey towards a healthier and happier life.
            </p>
          </Col>
        </Row>

        <Row className="about-section">
          <Col lg={6} className="about-image order-lg-2">
            <Image src={wellness} fluid className="img-fluid-custom" />
          </Col>
          <Col lg={6} className="about-text order-lg-1">
            <h3>Our Commitment to You</h3>
            <p>
              We strive to provide accurate and reliable information on wellness
              techniques and practices that can improve your quality of life.
              Stay informed about the latest medical advancements and explore
              our library of resources designed to empower you in making
              informed decisions about your health.
            </p>
            <p>
              Our team of experts is constantly researching and curating
              information to bring you the most up-to-date and relevant content.
              Whether you're looking for advice on managing stress, improving
              your diet, or staying active, we've got you covered.
            </p>
          </Col>
        </Row>

        <Row className="about-section">
          <Col lg={6} className="about-image">
            <Image src={medical} fluid className="img-fluid-custom" />
          </Col>
          <Col lg={6} className="about-text">
            <h3>Services Tailored to Your Needs</h3>
            <p>
              Benefit from personalized medical consultations with knowledgeable
              experts who prioritize your well-being. Access our comprehensive
              online resources including articles, videos, and tools covering a
              wide range of health topics to support your health journey.
            </p>
            <p>
              We offer a variety of services tailored to meet your unique needs,
              including one-on-one consultations, group workshops, and online
              courses. Our goal is to provide you with the support and guidance
              you need to achieve your health and wellness goals.
            </p>
          </Col>
        </Row>

        <Row className="about-section">
          <Col className="text-center">
            <h3>Your Well-being Matters</h3>
            <p>
              At Holistic Health, we firmly believe that your well-being
              matters. Join us in the pursuit of better health, informed
              decision-making, and a happier, more fulfilling life. We are
              committed to supporting you every step of the way and helping you
              achieve your wellness goals.
            </p>
            <p>
              Thank you for choosing Holistic Health as your trusted source for
              health and wellness information. We look forward to being a part
              of your journey towards a healthier and more balanced life.
            </p>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
}

export default About;
