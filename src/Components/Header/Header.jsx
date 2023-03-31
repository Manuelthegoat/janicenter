import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Img/logo2.png";
import "./Header.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
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
    <Navbar collapseOnSelect expand="lg" className={`${sticky ? "sticky " : "nav"}`}>
    <Container>
      <Navbar.Brand href="/"><img src="logo4.svg" className="logos" alt="" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
         
        </Nav>
        <Nav className="mpt">
          <Nav.Link className='text-light emmas' href="/">Home</Nav.Link>
          <Nav.Link className='text-light emmas' href="/about">About Us</Nav.Link>
          <Nav.Link className='text-light emmas' href="/our-partners">Our Partners</Nav.Link>
          <Nav.Link className='text-light emmas' href="/achiever">Become An Achiever</Nav.Link>
          <Nav.Link className='text-light emmas' href="/contact">Customer Service</Nav.Link>
         
        </Nav>
        <div className="nav-btn">
            <div className="icon">
                <i className="fas fa-phone-alt"></i>
            </div>
            <div className="content">
                <p >Call for help</p>
                <a href='tel:+2349095321394' >(+234) 909 532 1394</a>
            </div>
          </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default Header;
