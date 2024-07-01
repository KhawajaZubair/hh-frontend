import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHospital,
  faUserMd,
  faPills,
  faStethoscope,
  faFlask,
  faBlog,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import "../Style/services.css";

function CardWithFontAwesome({ icon, title, text, linkTo }) {
  return (
    <>
      {" "}
      {title === "Symptom Checker" ? (
        <div
          className="arrow-link remove-decoration"
          onClick={() => {
            window.open("https://hh-symptom-checker.netlify.app/");
          }}
        >
          <Card className="service-card">
            <Card.Body>
              <FontAwesomeIcon icon={icon} size="2x" className="icon" />
              <Card.Title>{title}</Card.Title>
              <Card.Text>{text}</Card.Text>
              <div className="arrow-container">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  size="1x"
                  className="arrow"
                />
              </div>
            </Card.Body>
          </Card>
        </div>
      ) : (
        <Link to={linkTo} className="arrow-link remove-decoration">
          <Card className="service-card">
            <Card.Body>
              <FontAwesomeIcon icon={icon} size="2x" className="icon" />
              <Card.Title>{title}</Card.Title>
              <Card.Text>{text}</Card.Text>
              <div className="arrow-container">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  size="1x"
                  className="arrow"
                />
              </div>
            </Card.Body>
          </Card>
        </Link>
      )}
    </>
  );
}

function CardCollection() {
  const cards = [
    {
      icon: faHospital,
      title: "Find Hospital",
      text: "Find nearby hospitals and healthcare centers",
      linkTo: "all-hospitals",
    },
    {
      icon: faUserMd,
      title: "Find Doctor",
      text: "Search for doctors and healthcare professionals",
      linkTo: "all-doctors",
    },
    {
      icon: faPills,
      title: "Search Medicine",
      text: "Explore and search for medicines and prescriptions",
      linkTo: "medicine-page",
    },
    {
      icon: faStethoscope,
      title: "Symptom Checker",
      text: "Check symptoms and get medical advice",
      linkTo: "/symptom-checker",
    },
    {
      icon: faFlask,
      title: "Lab-Test",
      text: "Schedule and view lab tests and results",
      linkTo: "https://chughtailab.com/home-sampling/",
    },
    {
      icon: faBlog,
      title: "View Blogs",
      text: "Read informative blogs and articles on healthcare",
      linkTo: "blog-page",
    },
  ];

  return (
    <div className="card-collection">
      <h2 className="heading">Let me know if I can be of any assistance?</h2>
      <div className="card-container">
        {cards.map((card, index) => (
          <CardWithFontAwesome
            key={index}
            icon={card.icon}
            title={card.title}
            text={card.text}
            linkTo={card.linkTo}
          />
        ))}
      </div>
    </div>
  );
}

export default CardCollection;
