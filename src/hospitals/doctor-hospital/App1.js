import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../doctor-hospital/hospital.css";
import HospitalDetails from "../doctor-hospital/HospitalDetails";
import DoctorList from "../doctor-hospital/DoctorList";
import Services from "../doctor-hospital/Services";
import AboutHospital from "../doctor-hospital/AboutHospital";
import NavBar from "../../components/navbar";
import Footer from "../../components/footer";

function App1() {
  return (
    <>
      <NavBar />
      <div className="container mt-5">
        <HospitalDetails />
        <Services />
        <DoctorList />
        <AboutHospital />
      </div>
      <Footer />
    </>
  );
}

export default App1;
