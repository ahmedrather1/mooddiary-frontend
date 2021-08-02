import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllEntries } from "../redux/EntriesListSlice";

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

  return (
    <div>
      <ul>
        {" "}
        {mappedEntries.map((e, i) => {
          return <li key={i}>{e.mood}</li>;
        })}{" "}
      </ul>
    </div>
  );
}

export default EntriesList;
