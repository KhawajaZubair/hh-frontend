import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../doctors/doctorpage.css";
import BookAppointmentModal from "../components/BookAppointmentModal"; // Import the modal component

const DoctorDetail = ({ doctor, image }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = (e) => {
    e.preventDefault(); // Prevent the default action of the link
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <Col md={4} className="mb-4 doctor-detail-card">
      <Card>
        <Card.Img className="doc-card-img" variant="top" src={image} />
        <Card.Body>
          <Card.Title>{doctor.name}</Card.Title>
          <Card.Text>
            {doctor.specializations}
            <br />
            Experience: {doctor.experiences}
            <br />
            Rating: 95%
          </Card.Text>
          <Link to={`/doctors/${doctor.id}`} className="doc-links">
            View Profile
          </Link>
          <Link
            to="#"
            className="doc-links"
            onClick={handleShowModal}
            style={{ cursor: "pointer" }}
          >
            Book Appointment
          </Link>
        </Card.Body>
      </Card>
      <BookAppointmentModal
        show={showModal}
        handleClose={handleCloseModal}
        doctorId={doctor.id}
      />
    </Col>
  );
};

export default DoctorDetail;
