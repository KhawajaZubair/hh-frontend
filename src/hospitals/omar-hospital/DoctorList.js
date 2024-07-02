import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Gastro01 from "../../Assets/doctors/Gastro01.webp";
import Gastro02 from "../../Assets/doctors/Gastro02.jpeg";

const imageMap = {
  "Assist. Prof. Dr. Fahmina Ashfaq": Gastro01,
  "Dr. Syed Sibtain Ul Hassan": Gastro02,
};

function DoctorList() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        // Filter doctors by hospital
        const filteredDoctors = data.filter(
          (doctor) =>
            doctor.hospital_address === "Omar Hospital & Cardiac Centre"
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
                    <Link
                      to={`/doctors/${doctor.id}`}
                      className="doc-links mb-2"
                    >
                      View Profile
                    </Link>
                    <Link
                      to={`/doctors/${doctor.id}/book`}
                      className="doc-links"
                    >
                      Book Appointment
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No doctors found from Omar Hospital.</div>
        )}
      </div>
    </div>
  );
}

export default DoctorList;
