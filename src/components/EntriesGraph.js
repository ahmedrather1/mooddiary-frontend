import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSomeEntries } from "../redux/EntriesGraphSlice";
import { Line } from "react-chartjs-2";
import { Tabs, Tab } from "react-bootstrap";

function EntriesGraph() {
  const entries = useSelector((state) => state.entriesList);
  const someEntries = useSelector((state) => state.entriesGraph);

  const [key, setKey] = useState("all");

  const dispatch = useDispatch();

  useEffect(() => {
    let today = new Date();

    let weekAgo = new Date();
    let monthAgo = new Date();
    let yearAgo = new Date();

    weekAgo.setDate(today.getDate() - 7);
    monthAgo.setDate(today.getDate() - 31);
    yearAgo.setDate(today.getDate() - 365);

    weekAgo.setDate(weekAgo.getDate());
    let input = {
      yearPath:
        process.env.REACT_APP_API_URL +
        "?createdFrom=" +
        yearAgo.toJSON() +
        "&createdTo=" +
        today.toJSON(),
      monthPath:
        process.env.REACT_APP_API_URL +
        "?createdFrom=" +
        monthAgo.toJSON() +
        "&createdTo=" +
        today.toJSON(),
      weekPath:
        process.env.REACT_APP_API_URL +
        "?createdFrom=" +
        weekAgo.toJSON() +
        "&createdTo=" +
        today.toJSON(),
      body: {},
    };

    dispatch(getSomeEntries(input));
  }, []);

  const createDataset = function (list) {
    let dataset = [];
    for (let element of list) {
      dataset.push({ x: element.date.substr(0, 10), y: element.mood });
    }
    return dataset;
  };

  const createData = function (dataList) {
    return {
      //labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Mood",
          data: createDataset(dataList),
          fill: true,
          backgroundColor: "rgba(75,192,192,0.2)",
          borderColor: "rgba(75,192,192,1)",
        },
      ],
    };
  };

  let options1 = {
    title: { text: "This is a test" },
    scales: {
      xAxes: [
        {
          title: "time",
          type: "time",
          gridLines: {
            lineWidth: 2,
          },
          time: {
            unit: "day",
            unitStepSize: 1,
            displayFormats: {
              millisecond: "MMM DD",
              second: "MMM DD",
              minute: "MMM DD",
              hour: "MMM DD",
              day: "MMM DD",
              week: "MMM DD",
              month: "MMM DD",
              quarter: "MMM DD",
              year: "MMM DD",
            },
          },
        },
      ],
    },
  };

  return (
    <>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="all" title="All">
          <Line data={createData(entries.list)} options={options1} />
        </Tab>
        <Tab eventKey="year" title="Year">
          <Line data={createData(someEntries.year)} options={options1} />
        </Tab>
        <Tab eventKey="month" title="Month">
          <Line data={createData(someEntries.month)} options={options1} />
        </Tab>
        <Tab eventKey="week" title="Week">
          <Line data={createData(someEntries.week)} options={options1} />
        </Tab>
      </Tabs>
    </>
  );
}

export default EntriesGraph;
