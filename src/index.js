import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
