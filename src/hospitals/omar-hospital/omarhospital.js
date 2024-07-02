import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../omar-hospital/hospital.css"; 
import HospitalDetails from "./HospitalDetails";
import DoctorList from "./DoctorList";
import Services from "./Services";
import AboutHospital from "./AboutHospital";
import NavBar from "../../components/navbar";
import Footer from "../../components/footer";

function Omar() {
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

export default Omar;
