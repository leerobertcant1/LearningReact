import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { render } from "react-dom";

//import HomePage from "./components/HomePage";
//import AboutPage from "./components/AboutPage";
//render(<HomePage />, document.getElementById("root"));
//render(<AboutPage />, document.getElementById("root"));

import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
