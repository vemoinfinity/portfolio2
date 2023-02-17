import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../picturs/logo_transparent.png';
const Navigator = () => {
  return (
      <Navbar className='fixed-top navbar navbar-expand-lg navbar-light bg-primary' collapseOnSelect expand="md">
        <Container>
          <Navbar.Brand to="/" as={Link}><Image style={{width:'225px',height:'60px'}} className='rounded' src={logo} /></Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link to="/abilities" as={Link}>Abilities</Nav.Link>
              <Nav.Link to="/portfolio" as={Link}>Portfolio</Nav.Link>
              <Nav.Link to="/contactme" as={Link}>Contact Me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default Navigator;