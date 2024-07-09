// MedicineDetail.js
import React, { useEffect, useState } from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import { useParams } from "react-router-dom";
import Loader from "../components/loader"; // Import the Loader component
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
import Klaricid from "../Assets/medicine-page-img/Klaricid.png";
import Ventolin from "../Assets/medicine-page-img/Ventolin.png";
import Zestril from "../Assets/medicine-page-img/Zestril.png";
import Lipitor from "../Assets/medicine-page-img/Lipitor.png";
import Zoloft from "../Assets/medicine-page-img/Zoloft.png";
import Celebrex from "../Assets/medicine-page-img/Celebrex.png";
import Gaviscon from "../Assets/medicine-page-img/Gaviscon.png";
import Motilium from "../Assets/medicine-page-img/Motilium.png";
import Neurobion from "../Assets/medicine-page-img/Neurobion.png";
import Entamizole from "../Assets/medicine-page-img/Entamizole.png";
import Cataflam from "../Assets/medicine-page-img/Cataflam.png";
import Norvasc from "../Assets/medicine-page-img/Norvasc.png";
import Tenormin from "../Assets/medicine-page-img/Tenormin.png";
import Cozaar from "../Assets/medicine-page-img/Cozaar.png";
import Glyset from "../Assets/medicine-page-img/Glyset.png";
import Januvia from "../Assets/medicine-page-img/Januvia.png";
import Humulin from "../Assets/medicine-page-img/Humulin.png";
import Diamicron from "../Assets/medicine-page-img/Diamicron.png";
import Euthyrox from "../Assets/medicine-page-img/Euthyrox.png";
import Plavix from "../Assets/medicine-page-img/Plavix.png";
import Zocor from "../Assets/medicine-page-img/Zocor.png";
import Crestor from "../Assets/medicine-page-img/Crestor.png";
import Lantus from "../Assets/medicine-page-img/Lantus.png";
import Tramal from "../Assets/medicine-page-img/Tramal.png";
import Monurol from "../Assets/medicine-page-img/Monurol.png";
import Coversyl from "../Assets/medicine-page-img/Coversyl.png";
import Diamox from "../Assets/medicine-page-img/Diamox.png";
import Imuran from "../Assets/medicine-page-img/Imuran.png";
import Xarelto from "../Assets/medicine-page-img/Xarelto.png";
import Aricept from "../Assets/medicine-page-img/Aricept.png";
import Remicade from "../Assets/medicine-page-img/Remicade.png";
import Enbrel from "../Assets/medicine-page-img/Enbrel.png";
import Methotrexate from "../Assets/medicine-page-img/Methotrexate.png";
import Imodium from "../Assets/medicine-page-img/Imodium.png";
import Azomax from "../Assets/medicine-page-img/Azomax.png";
import Rigix from "../Assets/medicine-page-img/Rigix.png";
import Brufen from "../Assets/medicine-page-img/Brufen.png";
import Deltacortril from "../Assets/medicine-page-img/Deltacortril.png";
import Telfast from "../Assets/medicine-page-img/Telfast.png";
import Mefloquine from "../Assets/medicine-page-img/Mefloquine.png";
import Fungizone from "../Assets/medicine-page-img/Fungizone.png";
import SoluMedrol from "../Assets/medicine-page-img/SoluMedrol.png";
import Avelox from "../Assets/medicine-page-img/Avelox.png";
import Diovan from "../Assets/medicine-page-img/Diovan.png";
import Glucophage from "../Assets/medicine-page-img/Glucophage.png";
import Jardiance from "../Assets/medicine-page-img/Jardiance.png";
import Lasix from "../Assets/medicine-page-img/Lasix.png";
import Digoxin from "../Assets/medicine-page-img/Digoxin.png";
import Cardizem from "../Assets/medicine-page-img/Cardizem.png";
import Aldactone from "../Assets/medicine-page-img/Aldactone.png";
import Amlor from "../Assets/medicine-page-img/Amlor.png";
import Inderal from "../Assets/medicine-page-img/Inderal.png";
import "../Style/medicinedetails.css";

const imageMap = {
  Inderal,
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
  Klaricid,
  Ventolin,
  Zestril,
  Lipitor,
  Zoloft,
  Celebrex,
  Gaviscon,
  Motilium,
  Neurobion,
  Entamizole,
  Cataflam,
  Norvasc,
  Tenormin,
  Cozaar,
  Glyset,
  Januvia,
  Humulin,
  Diamicron,
  Euthyrox,
  Plavix,
  Zocor,
  Crestor,
  Lantus,
  Tramal,
  Monurol,
  Coversyl,
  Diamox,
  Imuran,
  Xarelto,
  Aricept,
  Remicade,
  Enbrel,
  Methotrexate,
  Imodium,
  Azomax,
  Rigix,
  Brufen,
  Deltacortril,
  Telfast,
  Mefloquine,
  Fungizone,
  SoluMedrol,
  Avelox,
  Diovan,
  Glucophage,
  Jardiance,
  Lasix,
  Digoxin,
  Cardizem,
  Aldactone,
  Amlor,
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
    return <Loader />; // Show loader while fetching data
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
