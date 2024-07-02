import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function ShalamarHospitalDetails() {
  return (
    <div className="hospital-details mt-5">
      <h1>Shalamar Hospital</h1>
      <p className="text-muted">
        Shalimar Link Road, Mughalpura, Lahore, Punjab, Pakistan
      </p>
      <div className="mb-4">
        <img
          src="https://alchetron.com/cdn/shalamar-hospital-0e63c75c-f953-4d7d-b1ea-06439a69d22-resize-750.jpeg"
          alt="Shalamar Hospital"
          className="img-fluid rounded"
        />
      </div>
      <p>
        Shalamar Hospital provides comprehensive healthcare services with the
        latest technology and a team of highly qualified doctors.
      </p>
      <a
        href="https://maps.app.goo.gl/hiPB8JMBEfsi1z6bA"
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

export default ShalamarHospitalDetails;

