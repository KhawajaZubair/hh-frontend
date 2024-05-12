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
    <Card className="service-card">
      <Card.Body>
        <FontAwesomeIcon icon={icon} size="2x" className="icon" />
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <div className="arrow-container">
          <Link to={linkTo} className="arrow-link">
            <FontAwesomeIcon icon={faArrowRight} size="1x" className="arrow" />
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
}

function CardCollection() {
  const cards = [
    {
      icon: faHospital,
      title: "Find Hospital",
      text: "Find nearby hospitals and healthcare centers",
      linkTo: "hospital-page",
    },
    {
      icon: faUserMd,
      title: "Find Doctor",
      text: "Search for doctors and healthcare professionals",
      linkTo: "doctor-page",
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
      linkTo: "symptom-checker",
    },
    {
      icon: faFlask,
      title: "Lab-Test",
      text: "Schedule and view lab tests and results",
      linkTo: "Lab",
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
