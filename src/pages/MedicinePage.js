import React, { useState, useEffect } from "react";
import NavBar from "../components/navbar";
import Blogs from "../components/blogcard";
import Footer from "../components/footer";
import "../Style/medicinepage.css";
import {
  Container,
  Row,
  Col,
  NavDropdown,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import MedCard from "./medicinecard";
import Carousel from "react-bootstrap/Carousel";

// Import images
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

// Image mapping object
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

const MedicinePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/medicines");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data);

        const transformedData = data.map((item) => ({
          id: item.id,
          title: item.med_name,
          formula: `Formula: ${item.formula}`,
          description: `Generic Name: ${item.generic_name}`,
          genericName: item.generic_name,
          img: item.med_image ? imageMap[item.med_image.split(".")[0]] : null,
        }));
        console.log("Transformed data:", transformedData);
        setProducts(transformedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.formula.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.genericName.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="medpage">
      <NavBar />
      <Container>
        <Carousel controls={false} indicators={false} className="sliderimg">
          <Carousel.Item>
            <img src={require("../Assets/img/med2.png")} alt="med-2" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={require("../Assets/img/med1.png")} alt="med-1" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={require("../Assets/img/med3.png")} alt="med-3" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={require("../Assets/img/med1.png")} alt="med-5" />
          </Carousel.Item>
        </Carousel>
        <NavDropdown.Divider />
        <h3 className="mt-4 mb-4 text-center">Medicines</h3>
        <InputGroup className="mb-5 mt-3">
          <FormControl
            placeholder="Search by name, generic name, or formula"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </InputGroup>
        <Row>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <Col key={index} sm={12} md={6} lg={4} className="mb-5">
                <MedCard {...product} />
              </Col>
            ))
          ) : (
            <p>No products found</p>
          )}
        </Row>
        <NavDropdown.Divider />
      </Container>
      <Blogs />
      <Footer />
    </div>
  );
};

export default MedicinePage;
