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

    for (let year in allEntries) {
      for (let month in allEntries.year) {
        allEntries[year][month].reverse();
      }
    }

    console.log(allEntries);

    return allEntries;
  };

  let getMonthByNum = function (month) {
    if (month === "0") {
      return "January";
    } else if (month === "1") {
      return "February";
    } else if (month === "2") {
      return "March";
    } else if (month === "3") {
      return "April";
    } else if (month === "4") {
      return "May";
    } else if (month === "5") {
      return "June";
    } else if (month === "6") {
      return "July";
    } else if (month === "7") {
      return "August";
    } else if (month === "8") {
      return "September";
    } else if (month === "9") {
      return "October";
    } else if (month === "10") {
      return "November";
    } else if (month === "11") {
      return "December";
    }
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
                                {getMonthByNum(month)}
                              </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                              <Card.Body>
                                {sortEntries(mappedEntries)[year][month].map(
                                  (entry, entryIndex) => {
                                    let ref = "/entry/" + entry.ID;
                                    return (
                                      <a href={ref}>
                                        <div
                                          style={{
                                            display: "flex",
                                            justifyContent: "center",
                                          }}
                                        >
                                          <p>
                                            {new Date(
                                              entry.date
                                            ).toDateString()}
                                            &nbsp;
                                          </p>
                                          <p>&nbsp; Mood: {entry.mood}</p>
                                        </div>
                                      </a>
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
