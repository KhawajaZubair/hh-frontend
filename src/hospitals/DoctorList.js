import React from "react";

const doctors = [
  {
    name: "Dr. Abubakar Atiq Durrani",
    specialty: "Orthopedic Surgeon, Spinal Surgeon",
    experience: "28 Years",
    fee: "Rs 4000",
    waitTime: "15-30 mins",
    img: "https://d2cyip4t2cqq7y.cloudfront.net/assets/images/search-ico.svg",
  },
  {
    name: "Dr. Khola Zeeshan",
    specialty: "Gynecologist, Fertility Consultant",
    experience: "15 Years",
    fee: "Rs 3000",
    waitTime: "15-30 mins",
    img: "https://d2cyip4t2cqq7y.cloudfront.net/assets/images/search-ico.svg",
  },
  // Add more doctors as needed
];

function DoctorList() {
  return (
    <div className="doctor-list mt-5">
      <h2>Doctors Available</h2>
      <div className="row">
        {doctors.map((doctor, index) => (
          <div className="col-md-4 mb-4 listcard" key={index}>
            <div className="card">
              <img
                src={doctor.img}
                className="card-img-top"
                alt={doctor.name}
              />
              <div className="card-body">
                <h5 className="card-title">{doctor.name}</h5>
                <p className="card-text">
                  <strong>Specialty:</strong> {doctor.specialty}
                </p>
                <p className="card-text">
                  <strong>Experience:</strong> {doctor.experience}
                </p>
                <p className="card-text">
                  <strong>Fee:</strong> {doctor.fee}
                </p>
                <p className="card-text">
                  <strong>Wait Time:</strong> {doctor.waitTime}
                </p>
                <a href="#" className="btn btn-primary">
                  View Profile
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoctorList;
