import React from "react";

const services = [
  "Emergency Services",
  "Patient Experience",
  "Operation Theaters",
  "Daycare services",
  "Orthopedic services",
  "Pharmacy Blood Bank",
  "Diagnostic Lab",
  "Parking",
  "Patients Rooms",
  "Waiting Area",

  // Add more services as needed
];

function Services() {
  return (
    <div className="services mt-5">
      <h2>Services and Treatments</h2>
      <ul className="list-group">
        {services.map((service, index) => (
          <li className="list-group-item" key={index}>
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Services;
