import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

function Footer() {
  return (
    <Container fluid>
      <Navbar bg="light" expand="sm" fixed="bottom">
        <Container>
          <Navbar.Brand href="/">MoodDiary</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default Footer;
