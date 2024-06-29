import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import DoctorDetail from "./DoctorDetail";
import { getDoctorsBySpecialization } from "../services/doctorService";
import "./doctorpage.css";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Nephro01 from "../Assets/doctors/Nephro01.webp";
import Nephro02 from "../Assets/doctors/Nephro02.webp";
import Nephro03 from "../Assets/doctors/Nephro03.webp";
import Nephro04 from "../Assets/doctors/Nephro04.webp";

const imageMap = {
  "Assoc. Prof. Dr. Fowad Shahzad Warraich": Nephro01,
  "Dr. Hameed Tajammal Khan": Nephro02,
  "Dr. Muhammad Aamir": Nephro03,
  "Dr. Azhar Nasim": Nephro04,
};

const Nephrologist = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      const data = await getDoctorsBySpecialization("Nephrologist");
      setDoctors(data);
    };
    fetchDoctors();
  }, []);

  return (
    <div>
      <NavBar />
      <Container>
        <h2 className="my-4">Top Nephrologists In Lahore</h2>
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

export default Nephrologist;
