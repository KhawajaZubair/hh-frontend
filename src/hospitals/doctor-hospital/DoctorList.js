import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nephro01 from "../../Assets/doctors/Nephro01.webp";
import Nephro02 from "../../Assets/doctors/Nephro02.webp";
import Derma01 from "../../Assets/doctors/Derma01.webp";
import Derma02 from "../../Assets/doctors/Derma02.webp";
import BookAppointmentModal from "../../components/BookAppointmentModal";

// Image map for specific doctors
const imageMap = {
  "Assoc. Prof. Dr. Fowad Shahzad Warraich": Nephro01,
  "Dr. Hameed Tajammal Khan": Nephro02,
  "Dr. Sippy Iqbal": Derma01,
  "Dr. Quratul Ain Sajida": Derma02,
};

function DoctorList() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedDoctorId, setSelectedDoctorId] = useState(null);

  const handleShowModal = (e, doctorId) => {
    e.preventDefault();
    setSelectedDoctorId(doctorId);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedDoctorId(null);
  };

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/doctors");
        if (!response.ok) {
          throw new Error(
            `Network response was not ok: ${response.statusText}`
          );
        }
        const data = await response.json();
        console.log("Fetched data:", data); // Debug log
        // Filter doctors by name
        const filteredDoctors = data.filter((doctor) =>
          [
            "Assoc. Prof. Dr. Fowad Shahzad Warraich",
            "Dr. Hameed Tajammal Khan",
            "Dr. Sippy Iqbal",
            "Dr. Quratul Ain Sajida",
          ].includes(doctor.name)
        );
        console.log("Filtered doctors:", filteredDoctors); // Debug log
        setDoctors(filteredDoctors);
      } catch (error) {
        console.error("Error fetching doctors:", error); // Debug log
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="doctor-list mt-5">
      <h2>Doctors Available</h2>
      <div className="row">
        {doctors.length > 0 ? (
          doctors.map((doctor, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100">
                <img
                  src={
                    imageMap[doctor.name] ||
                    "https://d2cyip4t2cqq7y.cloudfront.net/assets/images/search-ico.svg"
                  }
                  className="card-img-top"
                  alt={doctor.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{doctor.name}</h5>
                  <p className="card-text">
                    <strong>Specialty:</strong>{" "}
                    {doctor.specializations?.join(", ")}
                  </p>
                  <p className="card-text">
                    <strong>Experience:</strong> {doctor.experiences}
                  </p>
                  <div className="d-flex flex-column">
                    <Link to={`/doctors/${doctor.id}`} className="doc-links">
                      View Profile
                    </Link>
                    <Link
                      to="#"
                      className="doc-links"
                      onClick={(e) => handleShowModal(e, doctor.id)}
                      style={{ cursor: "pointer" }}
                    >
                      Book Appointment
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No doctors found from Doctors Hospital.</div>
        )}
      </div>
      <BookAppointmentModal
        show={showModal}
        handleClose={handleCloseModal}
        doctorId={selectedDoctorId}
      />
    </div>
  );
}

export default DoctorList;
