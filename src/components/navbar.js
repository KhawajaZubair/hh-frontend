import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logo from "../Assets/logos/hh3.png";
import { useAuth } from "../context/AuthContext";

function NavBar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

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
              <NavDropdown.Item as={Link} to="/dermatologists">
                Dermatologist
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/nephrologist">
                Nephrologist
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/gastroenterologists">
                Gastroenterologist
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/all-doctors">
                All Doctors
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/medicine-page">
              Medicines
            </Nav.Link>
            <NavDropdown title="Hospitals" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/app1">
                Doctors Hospital
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shalamar">
                Shalamar Hospital
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/omar">
                Omar Hospital
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/all-hospitals">
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
            <Nav.Link as={Link} to="/about-page">
              About
            </Nav.Link>
            <Link to="/blog-page" className="nav-link">
              Blogs
            </Link>
          </Nav>
          <Nav>
            {user ? (
              <>
                <Nav.Link as={Link} to="/user-profile">
                  {" "}
                  {/* Updated here */}
                  {user.name}
                </Nav.Link>
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              </>
            ) : (
              <Nav.Link as={Link} to="/login">
                Sign In
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
