import React from "react";
import { Container, Row } from "react-bootstrap";
import DoctorDetail from "./DoctorDetail";

const doctors = [
  {
    name: "Dr. Attia Tabassum",
    specialization: "Dermatologist",
    experience: "8 Years",
    rating: "100%",
    image: "path/to/image1.jpg",
  },
  {
    name: "Dr. Battia Taba",
    specialization: "Dermatologist",
    experience: "2 Years",
    rating: "58%",
    image: "path/to/image1.jpg",
  },
  // Add more doctors here
];

const DermatoligistList = () => {
  return (
    <Container>
      <h2 className="my-4">Top Dermatologists in Lahore</h2>
      <Row>
        {doctors.map((doctor, index) => (
          <DoctorDetail key={index} doctor={doctor} />
        ))}
      </Row>
    </Container>
  );
};

export default DermatoligistList;
