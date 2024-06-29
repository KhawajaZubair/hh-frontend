import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import DoctorDetail from "./DoctorDetail";
import { getAllDoctors } from "../services/doctorService";
import "./doctorpage.css";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Nephro01 from "../Assets/doctors/Nephro01.webp";
import Nephro02 from "../Assets/doctors/Nephro02.webp";
import Nephro03 from "../Assets/doctors/Nephro03.webp";
import Nephro04 from "../Assets/doctors/Nephro04.webp";
import Derma01 from "../Assets/doctors/Derma01.webp";
import Derma02 from "../Assets/doctors/Derma02.webp";
import Gastro01 from "../Assets/doctors/Gastro01.webp";
import Gastro02 from "../Assets/doctors/Gastro02.jpeg";

// Image map for doctors
const imageMap = {
  "Assoc. Prof. Dr. Fowad Shahzad Warraich": Nephro01,
  "Dr. Hameed Tajammal Khan": Nephro02,
  "Dr. Muhammad Aamir": Nephro03,
  "Dr. Azhar Nasim": Nephro04,
  "Dr. Sippy Iqbal": Derma01,
  "Dr. Quratul Ain Sajida": Derma02,
  "Assist. Prof. Dr. Fahmina Ashfaq": Gastro01,
  "Dr. Syed Sibtain Ul Hassan": Gastro02,
};

const AllDoctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      const data = await getAllDoctors();
      setDoctors(data);
    };
    fetchDoctors();
  }, []);

  return (
    <div>
      <NavBar />
      <Container>
        <h2 className="my-4">Doctors In Lahore</h2>
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

export default AllDoctors;
