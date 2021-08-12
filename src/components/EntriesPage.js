import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import EntriesList from "./EntriesList";
import EntriesGraph from "./EntriesGraph";

function EntriesPage() {
  return (
    <>
      <div>
        <h1>EntriesPage</h1>
      </div>
      <Container className="text-center mt-5">
        <Row>
          <Col sm={6} xs={12} className="mt-5">
            list component
            <EntriesList />
          </Col>
          <Col sm={6} xs={12} className="mt-5">
            graph component
            <EntriesGraph />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default EntriesPage;
