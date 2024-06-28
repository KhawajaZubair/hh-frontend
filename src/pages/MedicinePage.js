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

const imageMap = {
  Panadol: Panadol,
  Tylenol: Tylenol,
  Advil: Advil,
  Motrin: Motrin,
  Benadryl: Benadryl,
  Claritin: Claritin,
  Alavert: Alavert,
  Zyrtec: Zyrtec,
  Reactine: Reactine,
  Nytol: Nytol,
  Paracetamol: Paracetamol,
  Flagyl: Flagyl,
  Doxycycline: Doxycycline,
  Cleocin: Cleocin,
  Levaquin: Levaquin,
  Keflex: Keflex,
  Cipro: Cipro,
  Augmentin: Augmentin,
  Amoxil: Amoxil,
  EryTab: EryTab,
  Zithromax: Zithromax,
  Singulair: Singulair,
  Prevacid: Prevacid,
  Nexium: Nexium,
  Zantac: Zantac,
  Pepcid: Pepcid,
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
        console.log("Fetched data:", data); // Debugging log

        // Transforming the fetched data to match the expected format
        const transformedData = data.map((item) => ({
          id: item.id,
          title: item.med_name,
          formula: `Formula: ${item.formula}`,
          description: `Generic Name: ${item.generic_name}`,
          genericName: item.generic_name,
          img: item.med_image ? imageMap[item.med_image.split(".")[0]] : null, // Adjusting image path
        }));
        console.log("Transformed data:", transformedData); // Debugging log
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
