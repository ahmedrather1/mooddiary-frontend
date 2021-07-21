import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
  return (
    <Container fluid>
      <Navbar bg="light" expand="sm" sticky="top">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>MoodDiary</Navbar.Brand>
          </LinkContainer>{" "}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* idk if this home is needed*/}
              <LinkContainer to="entries">
                <Nav.Link>Entries</Nav.Link>
              </LinkContainer>
              <LinkContainer to="analytics">
                <Nav.Link>Analytics</Nav.Link>
              </LinkContainer>
              <LinkContainer to="settings">
                <Nav.Link>Settings</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default Header;
