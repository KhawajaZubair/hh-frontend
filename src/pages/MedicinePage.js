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
import med1 from "../Assets/img/med1.png";
import med2 from "../Assets/img/med2.png";
import med3 from "../Assets/img/med3.png";
import Carousel from "react-bootstrap/Carousel";


const MedicinePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetching data from the API
    fetch("http://127.0.0.1:8000/api/medicines")
      .then((response) => response.json())
      .then((data) => {
        // Transforming the fetched data to match the expected format
        const transformedData = data.map((item) => ({
          title: item.med_name,
          description: `Formula: ${item.formula} 
          Generic Name: ${item.generic_name}`,
          formula: item.formula,
          genericName: item.generic_name,
          img: item.med_image,
        }));
        setProducts(transformedData);
      })
      .catch((error) => console.error("Error fetching data:", error));
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
            <img src={med2} alt="med-1" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={med1} alt="med-2" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={med3} alt="med-3" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={med1} alt="med-5" />
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
          {filteredProducts.map((product, index) => (
            <Col key={index} sm={12} md={6} lg={4} className="mb-5">
              <MedCard {...product} />
            </Col>
          ))}
        </Row>
        <NavDropdown.Divider />
      </Container>
      <Blogs />
      <Footer />
    </div>
  );
};

export default MedicinePage;
