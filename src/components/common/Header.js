import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

function Header() {
  return (
    <Container fluid>
      <Navbar bg="light" expand="sm" sticky="top">
        <Container>
          <Navbar.Brand href="/">MoodDiary</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* idk if this home is needed*/}
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="entries">Entries</Nav.Link>
              <Nav.Link href="analytics">Analytics</Nav.Link>
              <Nav.Link href="settings">Settings</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default Header;
