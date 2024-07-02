import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function DoctorHospitalDetails() {
  return (
    <div className="hospital-details mt-5">
      <h1>Doctors Hospital</h1>
      <p className="text-muted">
        152-G, 1 Canal Rd, Block G1 Block G 1 Phase 1 Johar Town, Lahore, Punjab
        54590, Pakistan
      </p>
      <div className="mb-4">
        <img
          src="https://d3313lwq5y3sh2.cloudfront.net/assets/photos/000/093/724/large_original/dct.jpg?1606635988"
          alt="Doctors Hospital"
          className="img-fluid rounded"
        />
      </div>
      <p>
        Doctors Hospital Lahore is one of the best state-of-the-art hospitals of
        Punjab. It is a huge six-story building that was established in 2000...
      </p>
      <a
        href="https://maps.app.goo.gl/uYdXErToYdALbWWk8"
        className="btn btn-success mr-2 "
      >
        Get Directions
      </a>
      <Link to="/app1" className="btn btn-success">
        View More
      </Link>
    </div>
  );
}

export default DoctorHospitalDetails;
