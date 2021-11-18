import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function LoggedOutHeader() {
  return (
    <Container fluid>
      <Navbar bg="light" expand="sm" sticky="top">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>MoodDiary</Navbar.Brand>
          </LinkContainer>{" "}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default LoggedOutHeader;
