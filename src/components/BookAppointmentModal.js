import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";

const BookAppointmentModal = ({ show, handleClose, doctorId }) => {
  const [formData, setFormData] = useState({
    full_name: "",
    phone_number: "",
    email: "",
    date_of_birth: "",
    appointment_date: "",
    appointment_time: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (!token) {
      alert("You must be logged in to book an appointment.");
      return;
    }

    console.log("Token:", token);
    console.log("Form Data:", formData); // Log form data

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/appointments",
        {
          ...formData,
          doctor_id: doctorId,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Response Status:", response.status); // Log response status

      if (response.status !== 201) {
        const errorData = response.data;
        console.error("Error response:", errorData);
        throw new Error(`Error: ${response.statusText}`);
      }

      const result = response.data;
      console.log("Result:", result); // Log the result from backend
      alert("Appointment booked successfully");
      handleClose();
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 2xx
        console.error("Error response:", error.response.data);
        alert(`Failed to book appointment: ${error.response.data.error}`);
      } else if (error.request) {
        // Request was made but no response received
        console.error("Error request:", error.request);
        alert(
          "Failed to book appointment: No response from server. Please check if the server is running."
        );
      } else {
        // Something else happened
        console.error("Error message:", error.message);
        alert(`Failed to book appointment: ${error.message}`);
      }
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Book Appointment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="fullName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="phoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="dateOfBirth">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              type="date"
              name="date_of_birth"
              value={formData.date_of_birth}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="appointmentDate">
            <Form.Label>Appointment Date</Form.Label>
            <Form.Control
              type="date"
              name="appointment_date"
              value={formData.appointment_date}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="appointmentTime">
            <Form.Label>Appointment Time</Form.Label>
            <Form.Control
              type="time"
              name="appointment_time"
              value={formData.appointment_time}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="message">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="success" type="submit">
            Book Appointment
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default BookAppointmentModal;
