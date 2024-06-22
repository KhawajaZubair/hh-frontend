import React from "react";
import DoctorInfo from "./doctorInfo"; 
import profile1 from "../Assets/doccardimg/profile-1.jpg";
import profile2 from "../Assets/doccardimg/profile-2.jpg";
import profile3 from "../Assets/doccardimg/profile-3.jpg";
import profile4 from "../Assets/doccardimg/profile-4.jpg";
import "../Style/doctor.css";

function Doctors() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">Most Visited Doctors</h3>
        <p className="dt-description">
          Discover our outstanding team of specialist doctors at Holistic
          Health, passionately dedicated to providing unparalleled healthcare
          services. Rely on their extensive knowledge and experience to lead you
          towards a healthier and happier life.
        </p>
      </div>

      <div className="dt-cards-content">
        <DoctorInfo
          img={profile1}
          name="Dr. Usman Ali"
          title="Dermatologist"
          stars="3.9"
          reviews="18"
        />
        <DoctorInfo
          img={profile2}
          name="Dr. Hanzila Ahmed"
          title="Radiologist"
          stars="4.8"
          reviews="70"
        />
        <DoctorInfo
          img={profile3}
          name="Dr. Hamid Mir"
          title="Nutritionist"
          stars="4.7"
          reviews="40"
        />
        <DoctorInfo
          img={profile4}
          name="Dr. Syed Mohsin"
          title="Dermatologist"
          stars="4.8"
          reviews="50"
        />
      </div>
    </div>
  );
}

export default Doctors;
