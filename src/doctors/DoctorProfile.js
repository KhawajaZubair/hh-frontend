import "../doctors/doctorprofile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Loader from "../components/loader"; // Import the Loader component
import Nephro01 from "../Assets/doctors/Nephro01.webp";
import Nephro02 from "../Assets/doctors/Nephro02.webp";
import Nephro03 from "../Assets/doctors/Nephro03.webp";
import Nephro04 from "../Assets/doctors/Nephro04.webp";
import Derma01 from "../Assets/doctors/Derma01.webp";
import Derma02 from "../Assets/doctors/Derma02.webp";
import Gastro01 from "../Assets/doctors/Gastro01.webp";
import Gastro02 from "../Assets/doctors/Gastro02.jpeg";
import { Link } from "react-router-dom"; // Import Link component
import BookAppointmentModal from "../components/BookAppointmentModal"; // Import the modal component

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

const DoctorProfile = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false); // State for modal visibility

  const handleShowModal = (e) => {
    e.preventDefault(); // Prevent the default action of the link
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        console.log("Fetching doctor with id:", id); // Debug log
        const response = await fetch(`http://127.0.0.1:8000/api/doctor/${id}`);
        if (!response.ok) {
          throw new Error(
            `Network response was not ok: ${response.statusText}`
          );
        }
        const data = await response.json();
        console.log("Fetched doctor data:", data); // Debug log
        setDoctor(data);
      } catch (error) {
        console.error("Error fetching doctor:", error); // Debug log
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDoctor();
  }, [id]);

  if (loading) {
    return <Loader />; // Show loader while fetching data
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!doctor) {
    return <div>No doctor data found.</div>;
  }

  const renderList = (title, items) => {
    if (!items) return null;

    const renderItem = (item, index) => {
      if (typeof item === "object" && !Array.isArray(item)) {
        return (
          <li key={index}>
            {Object.keys(item).map((key) => (
              <div key={key}>
                <strong>{key}:</strong>{" "}
                {Array.isArray(item[key])
                  ? item[key].join(", ")
                  : item[key].toString()}
              </div>
            ))}
          </li>
        );
      }
      return <li key={index}>{item}</li>;
    };

    return (
      <div>
        <h2>{title}</h2>
        <ul>
          {Array.isArray(items)
            ? items.map(renderItem)
            : Object.keys(items).map((key, index) => (
                <li key={index}>
                  <strong>{key}:</strong>{" "}
                  {typeof items[key] === "object"
                    ? renderList("", items[key])
                    : items[key]}
                </li>
              ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="doctor-profile-page">
      <NavBar />
      <div className="container doctor-profile mb-5 mt-5">
        <h1 className="my-4">{doctor.name}</h1>
        <img
          src={imageMap[doctor.name] || "default-image-path"}
          alt={doctor.name}
          className="img-fluid profile-image"
        />
        <h3>About</h3>
        <p>{doctor.about}</p>
        {renderList("Specializations", doctor.specializations)}
        {renderList("Services", doctor.services)}
        {renderList("Conditions Treated", doctor.conditions_treated)}
        {renderList("Education", doctor.educations)}
        {renderList("Certificates", doctor.certificates)}
        {renderList("Experience", doctor.experiences)}
        <h2>Clinic Address</h2>
        <p>{doctor.clinic_address || "N/A"}</p>
        <h2>Hospital Address</h2>
        <p>{doctor.hospital_address}</p>
        <h2>Fee</h2>
        <p>{doctor.fee}</p>
        {renderList("Date and Time", doctor.date_and_time)}

        {/* Book Appointment Link */}
        <Link
          to="#"
          className="doc-links"
          onClick={handleShowModal}
          style={{ cursor: "pointer" }}
        >
          Book Appointment
        </Link>
      </div>
      <Footer />
      <BookAppointmentModal
        show={showModal}
        handleClose={handleCloseModal}
        doctorId={doctor.id}
      />
    </div>
  );
};

export default DoctorProfile;
