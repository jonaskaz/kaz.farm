import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./webpages/Home";
import Gown from "./webpages/Gown";
import Writing from "./webpages/Writing";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gown" element={<Gown />} />
      <Route path="/writing" element={<Writing />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);
