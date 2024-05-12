import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStethoscope,
  faIdCardAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../Style/appointment.css";
import docimg from "../Assets/img/AppDoc.png";

function Appointment() {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  return (
    <div className="ba-section">
      <div className="ba-image-content">
        <img src={docimg} alt="Doctor Group" className="ba-image1" />
      </div>

      <div className="ba-text-content">
        <h3 className="ba-title">Booking appointment made easy</h3>
        <p className="ba-description">
          Embark on a health journey with Holistic Health. Discover expert
          holistic care, convenient services, and personalized solutions
          tailored to prioritize your well-being.
        </p>

        <div className="ba-checks">
          <FontAwesomeIcon icon={faStethoscope} style={{ color: "#0097B2" }} />
          <span>Find doctors by hospital, specialty, disease, or service</span>
        </div>
        <div className="ba-checks">
          <FontAwesomeIcon icon={faIdCardAlt} style={{ color: "#0097B2" }} />
          <span>Choose according to Rating, Experience, or Level</span>
        </div>
        <div className="ba-checks">
          <FontAwesomeIcon icon={faClock} style={{ color: "#0097B2" }} />
          <span>Make a Scheduled Appointment in Just a Few Seconds</span>
        </div>

        <button
          className="ba-appointment-btn"
          type="button"
          onClick={handleBookAppointmentClick}
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

export default Appointment;
