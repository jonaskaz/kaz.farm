import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./webpages/Home";
import Gallery from "./webpages/Gallery";
import Resume from "./webpages/Resume";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);
