import React from "react";

function HospitalDetails() {
  return (
    <div className="hospital-details mt-5">
      <h1>Doctors Hospital</h1>
      <p className="text-muted">
        152 G 1 Canal Bank Road, Johar Town, Lahore, Punjab, Pakistan
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
        href="https://www.google.com/maps/search/?api=1&query=31.480204370946485,74.28092861534148"
        className="btn btn-success"
      >
        Get Directions
      </a>
    </div>
  );
}

export default HospitalDetails;
