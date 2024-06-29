import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import DoctorDetail from "./DoctorDetail"; // Corrected path
import { getDoctorsBySpecialization } from "../services/doctorService";
import "./doctorpage.css"; // Corrected path
import NavBar from "../components/navbar";
import Footer from "../components/footer";

const Gastroenterologists = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      const data = await getDoctorsBySpecialization("Gastroenterologist");
      setDoctors(data);
    };
    fetchDoctors();
  }, []);

  return (
    <div>
      <NavBar />
      <Container>
        <h2 className="my-4">Top Gastroenterologists In Lahore</h2>
        <Row>
          {doctors.map((doctor, index) => (
            <DoctorDetail key={index} doctor={doctor} />
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Gastroenterologists;
