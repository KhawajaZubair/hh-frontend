import React, { useEffect, useState } from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import { useParams } from "react-router-dom";
import Panadol from "../Assets/medicine-page-img/Panadol.png";
import Tylenol from "../Assets/medicine-page-img/Tylenol.png";
import Advil from "../Assets/medicine-page-img/Advil.png";
import Motrin from "../Assets/medicine-page-img/Motrin.png";
import Benadryl from "../Assets/medicine-page-img/Benadryl.png";
import Nytol from "../Assets/medicine-page-img/Nytol.png";
import Claritin from "../Assets/medicine-page-img/Claritin.png";
import Alavert from "../Assets/medicine-page-img/Alavert.png";
import Zyrtec from "../Assets/medicine-page-img/Zyrtec.png";
import Reactine from "../Assets/medicine-page-img/Reactine.png";
import Pepcid from "../Assets/medicine-page-img/Pepcid.png";
import Zantac from "../Assets/medicine-page-img/Zantac.png";
import Nexium from "../Assets/medicine-page-img/Nexium.png";
import Prevacid from "../Assets/medicine-page-img/Prevacid.png";
import Singulair from "../Assets/medicine-page-img/Singulair.png";
import Zithromax from "../Assets/medicine-page-img/Zithromax.png";
import EryTab from "../Assets/medicine-page-img/Ery-Tab.png";
import Amoxil from "../Assets/medicine-page-img/Amoxil.png";
import Augmentin from "../Assets/medicine-page-img/Augmentin.png";
import Cipro from "../Assets/medicine-page-img/Cipro.png";
import Keflex from "../Assets/medicine-page-img/Keflex.png";
import Levaquin from "../Assets/medicine-page-img/Levaquin.png";
import Cleocin from "../Assets/medicine-page-img/Cleocin.png";
import Doxycycline from "../Assets/medicine-page-img/Doxycycline.png";
import Flagyl from "../Assets/medicine-page-img/Flagyl.png";
import Paracetamol from "../Assets/medicine-page-img/Paracetamol.png";
import "../Style/medicinedetails.css";

const imageMap = {
  Panadol,
  Tylenol,
  Advil,
  Motrin,
  Benadryl,
  Claritin,
  Alavert,
  Zyrtec,
  Reactine,
  Nytol,
  Paracetamol,
  Flagyl,
  Doxycycline,
  Cleocin,
  Levaquin,
  Keflex,
  Cipro,
  Augmentin,
  Amoxil,
  EryTab,
  Zithromax,
  Singulair,
  Prevacid,
  Nexium,
  Zantac,
  Pepcid,
};

const MedicineDetail = () => {
  const { id } = useParams();
  const [medicine, setMedicine] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/medicines/${id}`)
      .then((response) => response.json())
      .then((data) => setMedicine(data))
      .catch((error) =>
        console.error("Error fetching medicine details:", error)
      );
  }, [id]);

  if (!medicine) {
    return <div>Loading...</div>;
  }

  const imageName = medicine.med_image.split(".")[0];
  const imageSrc = imageMap[imageName] || "default-image-path"; // Use a default image path if not found

  return (
    <div>
      <NavBar />

      <div className="container medicine-detail-container">
        <div className="medicine-detail">
          <h1 className="my-4">{medicine.med_name}</h1>
          <img src={imageSrc} alt={medicine.med_name} className="img-fluid" />
          <p>
            <strong>Formula:</strong> {medicine.formula}
          </p>
          <p>
            <strong>Generic Name:</strong> {medicine.generic_name}
          </p>
          <p>
            <strong>Description:</strong> {medicine.description}
          </p>
          <p>
            <strong>Ingredients:</strong> {medicine.ingredients}
          </p>
          <p>
            <strong>Drug Class:</strong> {medicine.drug_class}
          </p>
          <p>
            <strong>Dosage Form:</strong> {medicine.dosage_form}
          </p>
          <p>
            <strong>Uses:</strong> {medicine.uses}
          </p>
          <p>
            <strong>Dosage:</strong> {medicine.dosage}
          </p>
          <p>
            <strong>Overdose:</strong> {medicine.overdose}
          </p>
          <p>
            <strong>Missed Dose:</strong> {medicine.missed_dose}
          </p>
          <p>
            <strong>How to Use:</strong> {medicine.how_to_use}
          </p>
          <p>
            <strong>When Not to Use:</strong> {medicine.when_not_to_use}
          </p>
          <p>
            <strong>Side Effects:</strong> {medicine.side_effects}
          </p>
          <p>
            <strong>Precautions & Warnings:</strong>{" "}
            {medicine.precautions_warnings}
          </p>
          <p>
            <strong>Drug Interactions:</strong> {medicine.drug_interactions}
          </p>
          <p>
            <strong>Storage & Disposal:</strong> {medicine.storage_disposal}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MedicineDetail;
