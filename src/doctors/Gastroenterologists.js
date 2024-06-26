import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import DoctorDetail from "./DoctorDetail";
import { getDoctorsBySpecialization } from "../services/doctorService";
import "./doctorpage.css";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Gastro01 from "../Assets/doctors/Gastro01.webp";
import Gastro02 from "../Assets/doctors/Gastro02.jpeg";

const imageMap = {
  "Assist. Prof. Dr. Fahmina Ashfaq": Gastro01,
  "Dr. Syed Sibtain Ul Hassan": Gastro02,
};

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
            <DoctorDetail
              key={index}
              doctor={doctor}
              image={imageMap[doctor.name] || "default-image-path"} // Provide a default image path if needed
            />
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Gastroenterologists;
