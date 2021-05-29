import React from "react";
import { Container, Navbar } from "react-bootstrap";
import Logo from '../assets/images/lk-logo-f.webp';

const CustomNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home"><img className='Logo' src={Logo} alt='Logo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
