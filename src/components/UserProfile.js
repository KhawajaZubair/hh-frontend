import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Alert,
  Spinner,
} from "react-bootstrap";

function UserProfile({ token }) {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        console.log("Fetching appointments...");
        const response = await fetch(
          "http://127.0.0.1:8000/api/user/appointments",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        console.log("Response status:", response.status);
        console.log("Response headers:", response.headers);
        if (!response.ok) {
          throw new Error("Failed to fetch appointments");
        }
        const data = await response.json();
        console.log("Data:", data);
        setAppointments(data.appointments);
      } catch (error) {
        console.error("Error fetching appointments", error);
        setError("Failed to fetch appointments");
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, [token]);

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={8}>
          <Card>
            <Card.Header as="h1">Your Profile</Card.Header>
            <Card.Body>
              <Card.Title>Your Appointments</Card.Title>
              {loading ? (
                <Spinner animation="border" variant="primary" />
              ) : error ? (
                <Alert variant="danger">{error}</Alert>
              ) : appointments.length > 0 ? (
                <ListGroup variant="flush">
                  {appointments.map((appointment) => (
                    <ListGroup.Item key={appointment.id}>
                      <strong>Full Name:</strong> {appointment.full_name}
                      <br />
                      <strong>Phone Number:</strong> {appointment.phone_number}
                      <br />
                      <strong>Email:</strong> {appointment.email}
                      <br />
                      <strong>Date of Birth:</strong>{" "}
                      {appointment.date_of_birth}
                      <br />
                      <strong>Appointment Date:</strong>{" "}
                      {appointment.appointment_date}
                      <br />
                      <strong>Appointment Time:</strong>{" "}
                      {appointment.appointment_time}
                      <br />
                      <strong>Message:</strong> {appointment.message}
                      <br />
                      <strong>Doctor ID:</strong> {appointment.doctor_id}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              ) : (
                <Alert variant="info">You have no appointments booked.</Alert>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default UserProfile;
