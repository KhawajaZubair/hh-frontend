import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Card, Button } from "react-bootstrap";

const MedCard = ({ title, formula, description, img }) => {
  return (
    <Card className="med-card" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>{formula}</Card.Text>
        <Button className="med-button">Info</Button>
      </Card.Body>
    </Card>
  );
};

export default MedCard;
