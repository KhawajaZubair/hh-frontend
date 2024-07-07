import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Alert,
  Spinner,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./navbar";
import Footer from "./footer";

function UserProfile() {
  const token = localStorage.getItem("token");
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
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

        if (!response.ok) {
          throw new Error(
            `Failed to fetch appointments: ${response.statusText}`
          );
        }

        const data = await response.json();
        setAppointments(data.appointments);
      } catch (error) {
        console.error("Error fetching appointments:", error);
        setError("Failed to fetch appointments");
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, [token]);

  const handleDelete = async (appointmentId) => {
    if (!window.confirm("Are you sure you want to delete this appointment?")) {
      return;
    }

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/appointments/${appointmentId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to delete appointment: ${response.statusText}`);
      }

      setAppointments(appointments.filter((a) => a.id !== appointmentId));
    } catch (error) {
      console.error("Error deleting appointment:", error);
      setError("Failed to delete appointment");
    }
  };

  return (
    <div>
      <NavBar />

      <Container className="mt-5 mb-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="shadow-lg">
              <Card.Header
                as="h1"
                className="bg-success text-white text-center"
              >
                Your Profile
              </Card.Header>
              <Card.Body>
                <Card.Title className="mb-4">Your Appointments</Card.Title>
                {loading ? (
                  <div className="text-center">
                    <Spinner animation="border" variant="primary" />
                  </div>
                ) : error ? (
                  <Alert variant="danger" className="text-center">
                    {error}
                  </Alert>
                ) : appointments.length > 0 ? (
                  <ListGroup variant="flush">
                    {appointments.map((appointment) => (
                      <ListGroup.Item
                        key={appointment.id}
                        className="mb-3 p-3 border rounded shadow-sm"
                      >
                        <div>
                          <strong>Full Name:</strong> {appointment.full_name}
                        </div>
                        <div>
                          <strong>Phone Number:</strong>{" "}
                          {appointment.phone_number}
                        </div>
                        <div>
                          <strong>Email:</strong> {appointment.email}
                        </div>
                        <div>
                          <strong>Appointment Date:</strong>{" "}
                          {appointment.appointment_date}
                        </div>
                        <div>
                          <strong>Appointment Time:</strong>{" "}
                          {appointment.appointment_time}
                        </div>
                        <div>
                          <strong>Doctor:</strong>{" "}
                          {appointment.doctor
                            ? appointment.doctor.name
                            : "Not available"}
                        </div>
                        <Button
                          variant="danger"
                          onClick={() => handleDelete(appointment.id)}
                        >
                          Delete
                        </Button>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                ) : (
                  <Alert variant="info" className="text-center">
                    You have no appointments booked.
                  </Alert>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </div>
  );
}

export default UserProfile;
