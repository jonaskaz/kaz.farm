import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./webpages/Home";
import Gown from "./webpages/Gown";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gown" element={<Gown />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);
