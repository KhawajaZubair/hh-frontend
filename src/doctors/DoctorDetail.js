import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import "../doctors/doctorpage.css";
const DoctorDetail = ({ doctor }) => {
  return (
    <Col md={4} className="mb-4 doc-page">
      <Card>
        <Card.Img variant="top" src={doctor.img} />
        <Card.Body>
          <Card.Title>{doctor.name}</Card.Title>
          <Card.Text>
            {doctor.specialization} <br />
            Experience: {doctor.experience} <br />
            Rating: {doctor.rating}
          </Card.Text>
          <Button variant="primary">View Profile</Button>
          <Button variant="primary">Book Appointment</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default DoctorDetail;
