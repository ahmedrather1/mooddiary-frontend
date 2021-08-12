import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllEntries } from "../redux/EntriesListSlice";
import { Line } from "react-chartjs-2";
import { Tabs, Tab } from "react-bootstrap";

function EntriesGraph() {
  const entries = useSelector((state) => state.entriesList);
  const [key, setKey] = useState("home");

  const createDataset = function (list) {
    let dataset = [];
    for (let element of list) {
      dataset.push({ x: element.date.substr(0, 10), y: element.mood });
    }

    console.log(dataset);

    return dataset;
  };

  const data = {
    //labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Mood",
        data: createDataset(entries.list),
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
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
          <Line data={data} options={options1} />
        </Tab>
        <Tab eventKey="year" title="Year">
          <Line data={data} options={options1} />
        </Tab>
        <Tab eventKey="month" title="Month">
          hello2
        </Tab>
        <Tab eventKey="week" title="Week">
          hello3
        </Tab>
      </Tabs>
    </>
  );
}

export default EntriesGraph;
