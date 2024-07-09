import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import emailjs from "emailjs-com";

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

  const [appointmentsCount, setAppointmentsCount] = useState(0);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = () => {
    const emailData = {
      to_name: "Khawaja Zubair",
      from_name: formData.full_name,
      message: `
        Full Name: ${formData.full_name}
        Phone Number: ${formData.phone_number}
        Email: ${formData.email}
        Date of Birth: ${formData.date_of_birth}
        Appointment Date: ${formData.appointment_date}
        Appointment Time: ${formData.appointment_time}
        Message: ${formData.message}
      `,
      to_email: "muhammad.zubair.webdev@gmail.com",
    };

    emailjs
      .send(
        "service_je5op5r", // Replace with your EmailJS service ID
        "template_7bpx5yt", // Replace with your EmailJS template ID
        emailData,
        "C3yWveM1PEaqFuzwb" // Replace with your EmailJS public key
      )
      .then((response) => {
        console.log("Email sent successfully:", response.status, response.text);
      })
      .catch((err) => {
        console.error("Failed to send email:", err);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (!token) {
      alert("You must be logged in to book an appointment.");
      return;
    }

    // Check if user has already booked 2 appointments for today
    if (appointmentsCount >= 2) {
      alert("You have already booked 2 appointments for today.");
      return;
    }

    // Check if appointment date is the same as today's date
    const today = new Date().toISOString().split("T")[0];
    if (formData.appointment_date !== today) {
      alert("You can only book 2 appointments in a day.");
      return;
    }

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

      if (response.status !== 201) {
        const errorData = response.data;
        console.error("Error response:", errorData);
        throw new Error(`Error: ${response.statusText}`);
      }

      // Successfully booked appointment
      setAppointmentsCount(appointmentsCount + 1);
      alert("Appointment booked successfully");
      sendEmail(); // Send email notification
      handleClose();
    } catch (error) {
      if (error.response) {
        console.error("Error response:", error.response.data);
        alert(`Failed to book appointment: ${error.response.data.error}`);
      } else if (error.request) {
        console.error("Error request:", error.request);
        alert(
          "Failed to book appointment: No response from server. Please check if the server is running."
        );
      } else {
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
