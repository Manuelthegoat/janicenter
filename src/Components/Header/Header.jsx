import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Img/logo2.png";
import "./Header.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  const [sticky, setSticky] = useState(false);
//   const [mobile, setMoblie] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
      console.log(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.addEventListener("scroll", handleScroll);
  });

  return (
  
    <Navbar expand="sm" className={`${sticky ? "sticky" : "nav"}`}>
    <Container>
      <Navbar.Brand href="#home"><img src="logo4.svg" className="logos" alt="" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">About</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default Header;
