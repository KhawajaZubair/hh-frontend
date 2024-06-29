import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
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
          <Link to={``} className="doc-links">
            View Profile
          </Link>
          <Link to={``} className="doc-links">
            Book Appointment
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default DoctorDetail;
