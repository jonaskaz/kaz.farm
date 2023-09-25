import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./webpages/Home";
import Engineering from "./webpages/Engineering";
import Gown from "./webpages/Gown";
import Writing from "./webpages/Writing";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/engineering" element={<Engineering />} />
      <Route path="/gown" element={<Gown />} />
      <Route exact path="/writing" element={<Writing />} />
      <Route path="/writing/:num" element={<Writing />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);
