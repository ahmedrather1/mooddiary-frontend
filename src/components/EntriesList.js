import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllEntries } from "../redux/EntriesListSlice";
import { Accordion, Card, Button } from "react-bootstrap";
function EntriesList() {
  const entries = useSelector((state) => state.entriesList);
  const dispatch = useDispatch();
  const [mappedEntries, setMappedEntries] = useState([]);

  useEffect(() => {
    let input = {
      path: process.env.REACT_APP_API_URL,
      body: {},
    };
    dispatch(getAllEntries(input));
  }, []);

  useEffect(() => {
    if (entries == null) {
      return;
    }
    console.log(entries.list);
    setMappedEntries(entries.list);
  }, [entries.loading]);

  if (mappedEntries == null || mappedEntries.length === 0) {
    return <div>No results..</div>;
  }

  let sortEntries = function (entryArray) {
    let allEntries = {};
    for (let element of entryArray) {
      let entryDate = new Date(element.date);
      let entryYear = entryDate.getFullYear();
      let entryMonth = entryDate.getMonth();

      if (!allEntries.hasOwnProperty(entryYear)) {
        allEntries[entryYear] = {};
        allEntries[entryYear][entryMonth] = [];
        allEntries[entryYear][entryMonth].push(element);
      } else {
        if (!allEntries[entryYear].hasOwnProperty(entryMonth)) {
          allEntries[entryYear][entryMonth] = [];
          allEntries[entryYear][entryMonth].push(element);
        } else {
          allEntries[entryYear][entryMonth].push(element);
        }
      }
    }

    return allEntries;
  };

  return (
    <>
      {Object.keys(sortEntries(mappedEntries)).map((year, yearIndex) => {
        return (
          <Accordion defaultActiveKey="0">
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  {year}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  {Object.keys(sortEntries(mappedEntries)[year]).map(
                    (month, monthIndex) => {
                      return (
                        <Accordion defaultActiveKey="0">
                          <Card>
                            <Card.Header>
                              <Accordion.Toggle
                                as={Button}
                                variant="link"
                                eventKey="0"
                              >
                                {month}
                              </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                              <Card.Body>
                                {sortEntries(mappedEntries)[year][month].map(
                                  (entry, entryIndex) => {
                                    return (
                                      <Card>
                                        <Card.Header>
                                          <Accordion.Toggle
                                            as={Button}
                                            variant="link"
                                            eventKey="0"
                                          >
                                            {entry.date}
                                          </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="0">
                                          <Card.Body>
                                            Hello! I'm the body
                                          </Card.Body>
                                        </Accordion.Collapse>
                                      </Card>
                                    );
                                  }
                                )}
                              </Card.Body>
                            </Accordion.Collapse>
                          </Card>
                        </Accordion>
                      );
                    }
                  )}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        );
      })}
    </>
  );
}

/**
 * <ul>
        {" "}
        {mappedEntries.map((e, i) => {
          return <li key={i}>{e.mood}</li>;
        })}{" "}
      </ul>
 */

/**
 *     <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            Click me!
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            Click me!
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
 */

export default EntriesList;
