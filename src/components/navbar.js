import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logo from "../Assets/logos/hh3.png";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to="/">
          <img className="mt-1" src={logo} alt="HH Logo" />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ms-5">
            <NavDropdown title="Doctors" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Heart</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Kidney</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Lungs</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Doctors in Lahore
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/medicine-page">Medicines</Nav.Link>
            <NavDropdown title="Hospitals" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">CCU</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">ABK</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">MAO</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Hospitals in Lahore
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Lab Test" id="collapsible-nav-dropdown">
              <NavDropdown.Item
                as={Link}
                to="https://shaukatkhanum.org.pk/testpanels/"
              >
                Shaukat Khanam
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="https://chughtailab.com/home-sampling/"
              >
                Chaugtai Labs
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="https://tmlzeenatlab.com/">
                Zeenat Labs
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/about-page">About</Nav.Link>
            <Link to="/blog-page" className="nav-link">
              Blogs
            </Link>
          </Nav>
          <Nav>
            <NavDropdown title="Join Now" id="collapsible-nav-dropdown">
              <Link to="/login" className="dropdown-item">
                Doctor
              </Link>
              <Link to="/login" className="dropdown-item">
                Patient
              </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
