import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineFundProjectionScreen } from "react-icons/ai";

function NavBar() {
  const [expand, setExpand] = useState(false);
  const [navColour, setNavColour] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 20) setNavColour(true);
    else setNavColour(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "navbar sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img src={logo} className="logo" alt="brand" />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpand(expand ? false : "expanded")}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => setExpand(false)}>
                <AiOutlineHome className="nav-icon" /> Home
              </Nav.Link>
            </Nav.Item>

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
