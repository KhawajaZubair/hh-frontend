import React from "react";
import { Container, Row } from "react-bootstrap";
import DoctorDetail from "./DoctorDetail";
import "../doctors/doctorpage.css";
import profile1 from "../Assets/doccardimg/profile-4.jpg"
import profile2 from "../Assets/doccardimg/profile-2.jpg";

const doctors = [
  {
    name: "Dr. Syed Mohsin",
    specialization: "Dermatologist",
    experience: "8 Years",
    rating: "95%",
    img: profile1,
  },
  {
    name: "Dr. Usman Ali",
    specialization: "Dermatologist",
    experience: "2 Years",
    rating: "58%",
    img: profile2,
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
