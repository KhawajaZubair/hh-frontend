import React from "react";
import { Col, Card, Button } from "react-bootstrap";

const DoctorDetail = ({ doctor }) => {
  return (
    <Col md={4} className="mb-4">
      <Card>
        <Card.Img variant="top" src={doctor.image} />
        <Card.Body>
          <Card.Title>{doctor.name}</Card.Title>
          <Card.Text>
            {doctor.specialization} <br />
            Experience: {doctor.experience} <br />
            Rating: {doctor.rating}
          </Card.Text>
          <Button variant="primary">View More</Button>
          <Button variant="primary">Book Appointment</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default DoctorDetail;
