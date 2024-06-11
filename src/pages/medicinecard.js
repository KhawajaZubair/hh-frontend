import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Card, Button } from "react-bootstrap";

const MedCard = ({ title, description, img }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Info</Button>
      </Card.Body>
    </Card>
  );
};

export default MedCard;
