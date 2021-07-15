import React, { useState } from "react";
import { Dropdown, Button, Container, Row, Col } from "react-bootstrap";

function MoodSubmitter(props) {
  const [mood, setMood] = useState({ moodVal: 1 });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitted " + mood.moodVal);
    //axios();
    event.preventDefault();
  };

  const handleSelect = (eventKey) => {
    console.log(eventKey);
    let updatedMood = { moodVal: eventKey };
    setMood(updatedMood);
  };

  return (
    <Container>
      <Row className="col text-center">
        <Col></Col>
        <Col className="mt-4 mb-3">
          <Dropdown onSelect={handleSelect}>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Select mood
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="1">1</Dropdown.Item>
              <Dropdown.Item eventKey="2">2</Dropdown.Item>
              <Dropdown.Item eventKey="3">3</Dropdown.Item>
              <Dropdown.Item eventKey="4">4</Dropdown.Item>
              <Dropdown.Item eventKey="5">5</Dropdown.Item>
              <Dropdown.Item eventKey="6">6</Dropdown.Item>
              <Dropdown.Item eventKey="7">7</Dropdown.Item>
              <Dropdown.Item eventKey="8">8</Dropdown.Item>
              <Dropdown.Item eventKey="9">9</Dropdown.Item>
              <Dropdown.Item eventKey="10">10</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col className="mt-3 mb-3">
          <h1>Mood: {mood.moodVal}</h1>
        </Col>
        <Col></Col>
      </Row>

      <Row>
        <Col></Col>
        <Col className="col text-center ">
          <Button
            className="mt-3 mb-3"
            variant="primary"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Col>

        <Col></Col>
      </Row>
    </Container>
  );
}

export default MoodSubmitter;
