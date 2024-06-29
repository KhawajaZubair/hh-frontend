import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import DoctorDetail from "./DoctorDetail";
import { getDoctorsBySpecialization } from "../services/doctorService";
import "./doctorpage.css";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Derma01 from "../Assets/doctors/Derma01.webp";
import Derma02 from "../Assets/doctors/Derma02.webp";

const imageMap = {
  "Dr. Sippy Iqbal": Derma01,
  "Dr. Quratul Ain Sajida": Derma02,
};

const Dermatologists = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      const data = await getDoctorsBySpecialization("Dermatologist");
      setDoctors(data);
    };
    fetchDoctors();
  }, []);

  return (
    <div>
      <NavBar />
      <Container>
        <h2 className="my-4">Top Dermatologists In Lahore</h2>
        <Row>
          {doctors.map((doctor, index) => (
            <DoctorDetail
              key={index}
              doctor={doctor}
              image={imageMap[doctor.name] || "default-image-path"} 
            />
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Dermatologists;
