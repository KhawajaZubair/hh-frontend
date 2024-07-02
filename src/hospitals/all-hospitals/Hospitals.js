import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../doctor-hospital/hospital.css";
import NavBar from "../../components/navbar";
import Footer from "../../components/footer";
import DoctorHospitalDetails from "./DoctorHospitalDetails";
import OmarHospitalDetails from "./OmarHospitalDetails";
import ShalamarHospitalDetails from "./ShalamarHospitalDetails";

function Hospitals() {
  return (
    <>
      <NavBar />
      <div className="container mt-5">
        <DoctorHospitalDetails/>
        <OmarHospitalDetails/>
        <ShalamarHospitalDetails/>
      </div>
      <Footer />
    </>
  );
}

export default Hospitals;
