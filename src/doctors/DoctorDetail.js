import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../doctors/doctorpage.css";

const DoctorDetail = ({ doctor, image }) => {
  return (
    <Col md={4} className="mb-4 doctor-detail-card">
      <Card>
        <Card.Img className="doc-card-img" variant="top" src={image} />
        <Card.Body>
          <Card.Title>{doctor.name}</Card.Title>
          <Card.Text>
            {doctor.specializations}
            <br />
            Experience: {doctor.experiences} years
            <br />
            Rating: 95%
          </Card.Text>
          <Link to={`/doctors/${doctor.id}`} className="doc-links">
            View Profile
          </Link>
          <Link to={`/doctors/${doctor.id}/book`} className="doc-links">
            Book Appointment
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};


export default DoctorDetail;
