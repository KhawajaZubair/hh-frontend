import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "../Style/medicinepage.css";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const MedCard = ({ id, title, formula, description, img }) => {
  return (
    <Card className="med-card" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>{formula}</Card.Text>
        <Link to={`/medicine/${id}`} className="view-links">
          View More
        </Link>
      </Card.Body>
    </Card>
  );
};

export default MedCard;
