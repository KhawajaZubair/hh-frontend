import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function OmarHospitalDetails() {
  return (
    <div className="hospital-details mt-5">
      <h1>Omar Hospital & Cardiac Centre</h1>
      <p className="text-muted">
        5 Jail Rd, Shadman II Shadman 2 Shadman, Lahore, Punjab 54000, Pakistan
      </p>
      <div className="mb-4">
        <img
          src="https://d3313lwq5y3sh2.cloudfront.net/assets/photos/001/109/591/large_original/omar_hospital.jpg?1675429852"
          alt="Omar Hospital & Cardiac Centre"
          className="img-fluid rounded"
        />
      </div>
      <p>
        Omar Hospital & Cardiac Centre is a state-of-the-art hospital located in
        the heart of Lahore. It provides comprehensive healthcare services with
        the latest technology and a team of highly qualified doctors.
      </p>
      <a
        href="https://maps.app.goo.gl/AR4J5BK21nwzeXbJ6"
        className="btn btn-success"
      >
        Get Directions
      </a>
      <Link to="/app1" className="btn btn-success">
        View More
      </Link>
    </div>
  );
}

export default OmarHospitalDetails;

