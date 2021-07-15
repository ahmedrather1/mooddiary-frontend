import React, { useEffect } from "react";
import axios from "axios";

export default function useApi() {
  useEffect(() => {
    let api = axios.create();
    api.defaults.headers.common["Content-Type"] = "application/json";
    api.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
    api.defaults.headers.common["Access-Control-Allow-Credentials"] = true;

    return {
      api,
    };
  }, []);
}
